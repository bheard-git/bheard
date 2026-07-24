"use client";

import { useEffect, useRef, type RefObject } from "react";
import { cn } from "@/lib/utils";

const NODE_COUNT = 180;
const CONNECT_DIST = 120;
const MAX_CONNECTIONS = 4;
const CELL_SIZE = 80;
const MOUSE_RADIUS = 175;
const MOUSE_FORCE = 2.8;

export interface HeroMouseState {
  x: number;
  y: number;
  active: boolean;
}

interface Node {
  x: number;
  y: number;
  homeX: number;
  homeY: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  phase: number;
  phaseSpeed: number;
}

function createNodes(width: number, height: number): Node[] {
  const nodes: Node[] = [];
  for (let i = 0; i < NODE_COUNT; i++) {
    const x = Math.random() * width;
    const y = Math.random() * height;
    nodes.push({
      x,
      y,
      homeX: x,
      homeY: y,
      vx: 0,
      vy: 0,
      radius: 1.5 + Math.random() * 3,
      opacity: 0.25 + Math.random() * 0.55,
      phase: Math.random() * Math.PI * 2,
      phaseSpeed: 0.003 + Math.random() * 0.004,
    });
  }
  return nodes;
}

function getConnections(nodes: Node[]): [number, number, number][] {
  const connections: [number, number, number][] = [];
  const grid = new Map<string, number[]>();

  for (let i = 0; i < nodes.length; i++) {
    const col = Math.floor(nodes[i].x / CELL_SIZE);
    const row = Math.floor(nodes[i].y / CELL_SIZE);
    const key = `${col},${row}`;
    if (!grid.has(key)) grid.set(key, []);
    grid.get(key)!.push(i);
  }

  const neighborCounts = new Array(nodes.length).fill(0);

  for (let i = 0; i < nodes.length; i++) {
    const col = Math.floor(nodes[i].x / CELL_SIZE);
    const row = Math.floor(nodes[i].y / CELL_SIZE);

    for (let dc = -1; dc <= 1; dc++) {
      for (let dr = -1; dr <= 1; dr++) {
        const key = `${col + dc},${row + dr}`;
        const bucket = grid.get(key);
        if (!bucket) continue;

        for (const j of bucket) {
          if (j <= i || neighborCounts[i] >= MAX_CONNECTIONS || neighborCounts[j] >= MAX_CONNECTIONS) continue;
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECT_DIST) {
            connections.push([i, j, dist]);
            neighborCounts[i]++;
            neighborCounts[j]++;
          }
        }
      }
    }
  }

  return connections;
}

interface HeroNeuralCanvasProps {
  mouseRef: RefObject<HeroMouseState>;
  className?: string;
}

export function HeroNeuralCanvas({ mouseRef, className }: HeroNeuralCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const rafRef = useRef<number>(0);
  const pausedRef = useRef(false);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mediaQuery.matches;

    const handleMotionChange = () => {
      reducedMotionRef.current = mediaQuery.matches;
    };
    mediaQuery.addEventListener("change", handleMotionChange);

    const handleVisibility = () => {
      pausedRef.current = document.hidden;
    };
    document.addEventListener("visibilitychange", handleVisibility);

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = parent.clientWidth;
      const h = parent.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      nodesRef.current = createNodes(w, h);
    };

    resize();
    window.addEventListener("resize", resize);

    const draw = () => {
      rafRef.current = requestAnimationFrame(draw);
      if (pausedRef.current) return;

      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      const nodes = nodesRef.current;
      const mouse = mouseRef.current;
      const reduced = reducedMotionRef.current;

      ctx.clearRect(0, 0, w, h);

      const bgGlow = ctx.createRadialGradient(w * 0.7, h * 0.35, 0, w * 0.7, h * 0.35, w * 0.5);
      bgGlow.addColorStop(0, "rgba(249, 115, 22, 0.12)");
      bgGlow.addColorStop(1, "transparent");
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, w, h);

      const bgGlow2 = ctx.createRadialGradient(w * 0.2, h * 0.7, 0, w * 0.2, h * 0.7, w * 0.35);
      bgGlow2.addColorStop(0, "rgba(249, 115, 22, 0.06)");
      bgGlow2.addColorStop(1, "transparent");
      ctx.fillStyle = bgGlow2;
      ctx.fillRect(0, 0, w, h);

      const vignette = ctx.createRadialGradient(w / 2, h / 2, w * 0.2, w / 2, h / 2, w * 0.75);
      vignette.addColorStop(0, "transparent");
      vignette.addColorStop(1, "rgba(0, 0, 0, 0.55)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, w, h);

      if (!reduced) {
        for (const node of nodes) {
          node.phase += node.phaseSpeed;
          const driftX = Math.sin(node.phase) * 0.4 + Math.cos(node.phase * 0.7) * 0.3;
          const driftY = Math.cos(node.phase * 1.1) * 0.4 + Math.sin(node.phase * 0.5) * 0.3;

          const toHomeX = node.homeX - node.x;
          const toHomeY = node.homeY - node.y;
          node.vx += toHomeX * 0.006 + driftX * 0.02;
          node.vy += toHomeY * 0.006 + driftY * 0.02;

          if (mouse?.active) {
            const dx = node.x - mouse.x;
            const dy = node.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < MOUSE_RADIUS && dist > 0) {
              const force = (1 - dist / MOUSE_RADIUS) * MOUSE_FORCE;
              node.vx += (dx / dist) * force;
              node.vy += (dy / dist) * force;
            }
          }

          node.vx *= 0.86;
          node.vy *= 0.86;
          node.x += node.vx;
          node.y += node.vy;
        }
      }

      const connections = getConnections(nodes);

      for (const [i, j, dist] of connections) {
        const a = nodes[i];
        const b = nodes[j];
        const proximity = 1 - dist / CONNECT_DIST;
        let alpha = proximity * 0.35 * Math.min(a.opacity, b.opacity);
        let lineWidth = 0.5 + proximity * 0.8;

        if (mouse?.active) {
          const midX = (a.x + b.x) / 2;
          const midY = (a.y + b.y) / 2;
          const mdx = midX - mouse.x;
          const mdy = midY - mouse.y;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < MOUSE_RADIUS) {
            const boost = 1 - mdist / MOUSE_RADIUS;
            alpha += boost * 0.65;
            lineWidth += boost * 0.6;
          }
        }

        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.strokeStyle = `rgba(249, 115, 22, ${Math.min(alpha, 1)})`;
        ctx.lineWidth = lineWidth;
        ctx.shadowColor = "rgba(249, 115, 22, 0.5)";
        ctx.shadowBlur = mouse?.active ? 5 : 2;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }

      for (const node of nodes) {
        let brightness = node.opacity;
        let radius = node.radius;
        const breathe = reduced ? 1 : 1 + Math.sin(node.phase * 2) * 0.15;

        if (mouse?.active) {
          const dx = node.x - mouse.x;
          const dy = node.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_RADIUS) {
            const boost = 1 - dist / MOUSE_RADIUS;
            brightness = Math.min(1, brightness + boost * 0.7);
            radius += boost * 2.2;
          }
        }

        const grad = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, radius * breathe * 2);
        grad.addColorStop(0, `rgba(251, 146, 60, ${brightness})`);
        grad.addColorStop(0.5, `rgba(249, 115, 22, ${brightness * 0.6})`);
        grad.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.arc(node.x, node.y, radius * breathe, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.shadowColor = "rgba(249, 115, 22, 0.6)";
        ctx.shadowBlur = radius * 2.5;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    };

    draw();

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", handleVisibility);
      mediaQuery.removeEventListener("change", handleMotionChange);
    };
  }, [mouseRef]);

  return (
    <canvas
      ref={canvasRef}
      className={cn("absolute inset-0 w-full h-full pointer-events-none", className)}
      aria-hidden
    />
  );
}
