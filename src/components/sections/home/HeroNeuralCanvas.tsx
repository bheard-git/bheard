"use client";

import { useEffect, useRef, type RefObject } from "react";
import { cn } from "@/lib/utils";

/**
 * Particle configuration
 *
 * Intentionally no connection/line configuration.
 * This background renders particles only.
 */
const PARTICLE_DENSITY = 0.00014;

const MIN_PARTICLES = 65;
const MAX_PARTICLES = 145;

const MIN_RADIUS = 0.8;
const MAX_RADIUS = 3.6;

const MIN_OPACITY = 0.16;
const MAX_OPACITY = 0.72;

/**
 * Cursor interaction.
 *
 * Higher force + relatively small radius gives the quick,
 * responsive repulsion seen in interactive template backgrounds.
 */
const MOUSE_RADIUS = 135;
const MOUSE_FORCE = 5.4;

/**
 * Particle physics.
 */
const RETURN_FORCE = 0.012;
const FRICTION = 0.84;
const MAX_SPEED = 7;

const DRIFT_FORCE = 0.007;

export interface HeroMouseState {
  x: number;
  y: number;
  active: boolean;
}

interface Particle {
  x: number;
  y: number;

  originX: number;
  originY: number;

  vx: number;
  vy: number;

  radius: number;
  opacity: number;

  phaseX: number;
  phaseY: number;
  phaseSpeed: number;
}

interface HeroNeuralCanvasProps {
  mouseRef: RefObject<HeroMouseState>;
  className?: string;
}

/**
 * Generate particles based on available canvas area.
 *
 * This keeps particle density visually consistent between
 * different viewport sizes instead of hardcoding one count.
 */
function createParticles(width: number, height: number): Particle[] {
  const area = width * height;

  const particleCount = Math.max(
    MIN_PARTICLES,
    Math.min(MAX_PARTICLES, Math.round(area * PARTICLE_DENSITY))
  );

  return Array.from({ length: particleCount }, () => {
    const x = Math.random() * width;
    const y = Math.random() * height;

    // Bias toward smaller particles.
    // Most particles stay subtle while a few become larger accents.
    const sizeRandom = Math.pow(Math.random(), 2);

    return {
      x,
      y,

      originX: x,
      originY: y,

      vx: 0,
      vy: 0,

      radius: MIN_RADIUS + sizeRandom * (MAX_RADIUS - MIN_RADIUS),

      opacity:
        MIN_OPACITY +
        Math.random() * (MAX_OPACITY - MIN_OPACITY),

      phaseX: Math.random() * Math.PI * 2,
      phaseY: Math.random() * Math.PI * 2,

      phaseSpeed:
        0.004 +
        Math.random() * 0.008,
    };
  });
}

export function HeroNeuralCanvas({
  mouseRef,
  className,
}: HeroNeuralCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const particlesRef = useRef<Particle[]>([]);

  const rafRef = useRef<number | null>(null);

  const pausedRef = useRef(false);

  const reducedMotionRef = useRef(false);

  const sizeRef = useRef({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d", {
      alpha: true,
    });

    if (!ctx) return;

    /**
     * ------------------------------------------------------------
     * Reduced motion
     * ------------------------------------------------------------
     */

    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    reducedMotionRef.current = mediaQuery.matches;

    const handleMotionChange = () => {
      reducedMotionRef.current = mediaQuery.matches;
    };

    mediaQuery.addEventListener(
      "change",
      handleMotionChange
    );

    /**
     * ------------------------------------------------------------
     * Page visibility
     * ------------------------------------------------------------
     */

    const handleVisibilityChange = () => {
      pausedRef.current = document.hidden;
    };

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );

    /**
     * ------------------------------------------------------------
     * Canvas sizing
     * ------------------------------------------------------------
     */

    const resizeCanvas = () => {
      const parent = canvas.parentElement;

      if (!parent) return;

      const rect = parent.getBoundingClientRect();

      const width = rect.width;
      const height = rect.height;

      if (!width || !height) return;

      /**
       * Avoid unnecessary particle resets caused by ResizeObserver
       * reporting effectively identical dimensions.
       */
      if (
        Math.abs(sizeRef.current.width - width) < 1 &&
        Math.abs(sizeRef.current.height - height) < 1
      ) {
        return;
      }

      sizeRef.current = {
        width,
        height,
      };

      const dpr = Math.min(
        window.devicePixelRatio || 1,
        2
      );

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );

      particlesRef.current = createParticles(
        width,
        height
      );
    };

    resizeCanvas();

    /**
     * ResizeObserver is preferable here because hero height may
     * change independently from window resize.
     */
    const parent = canvas.parentElement;

    const resizeObserver =
      parent &&
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => {
            resizeCanvas();
          })
        : null;

    resizeObserver?.observe(parent!);

    window.addEventListener(
      "resize",
      resizeCanvas,
      {
        passive: true,
      }
    );

    /**
     * ------------------------------------------------------------
     * Particle drawing
     * ------------------------------------------------------------
     */

    const drawParticle = (
      particle: Particle,
      mouse: HeroMouseState | null
    ) => {
      let opacity = particle.opacity;

      let radius = particle.radius;

      /**
       * Slightly emphasize particles near the cursor.
       *
       * Keep this subtle because movement/repulsion should remain
       * the dominant interaction.
       */
      if (mouse?.active) {
        const dx =
          particle.x - mouse.x;

        const dy =
          particle.y - mouse.y;

        const distanceSquared =
          dx * dx + dy * dy;

        const mouseRadiusSquared =
          MOUSE_RADIUS * MOUSE_RADIUS;

        if (
          distanceSquared <
          mouseRadiusSquared
        ) {
          const distance =
            Math.sqrt(distanceSquared);

          const proximity =
            1 -
            distance /
              MOUSE_RADIUS;

          opacity = Math.min(
            0.95,
            opacity +
              proximity * 0.22
          );

          radius +=
            proximity * 0.45;
        }
      }

      /**
       * Soft outer glow.
       */
      ctx.beginPath();

      ctx.arc(
        particle.x,
        particle.y,
        radius * 2.6,
        0,
        Math.PI * 2
      );

      const glow =
        ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          radius * 2.6
        );

      glow.addColorStop(
        0,
        `rgba(249, 115, 22, ${
          opacity * 0.32
        })`
      );

      glow.addColorStop(
        0.45,
        `rgba(249, 115, 22, ${
          opacity * 0.12
        })`
      );

      glow.addColorStop(
        1,
        "rgba(249, 115, 22, 0)"
      );

      ctx.fillStyle = glow;

      ctx.fill();

      /**
       * Main particle.
       */
      ctx.beginPath();

      ctx.arc(
        particle.x,
        particle.y,
        radius,
        0,
        Math.PI * 2
      );

      ctx.fillStyle =
        `rgba(249, 115, 22, ${opacity})`;

      ctx.fill();

      /**
       * Tiny brighter center on larger particles.
       */
      if (radius > 2.2) {
        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          radius * 0.38,
          0,
          Math.PI * 2
        );

        ctx.fillStyle =
          `rgba(251, 146, 60, ${Math.min(
            1,
            opacity + 0.18
          )})`;

        ctx.fill();
      }
    };

    /**
     * ------------------------------------------------------------
     * Animation
     * ------------------------------------------------------------
     */

    const animate = () => {
      rafRef.current =
        requestAnimationFrame(
          animate
        );

      if (pausedRef.current) {
        return;
      }

      const {
        width,
        height,
      } = sizeRef.current;

      if (!width || !height) {
        return;
      }

      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      const particles =
        particlesRef.current;

      const mouse =
        mouseRef.current ?? null;

      const reducedMotion =
        reducedMotionRef.current;

      /**
       * ----------------------------------------------------------
       * Particle physics
       * ----------------------------------------------------------
       */

      if (!reducedMotion) {
        for (
          let i = 0;
          i < particles.length;
          i++
        ) {
          const particle =
            particles[i];

          /**
           * Gentle natural floating.
           */
          particle.phaseX +=
            particle.phaseSpeed;

          particle.phaseY +=
            particle.phaseSpeed *
            0.73;

          const driftX =
            Math.sin(
              particle.phaseX
            ) *
            DRIFT_FORCE;

          const driftY =
            Math.cos(
              particle.phaseY
            ) *
            DRIFT_FORCE;

          particle.vx += driftX;
          particle.vy += driftY;

          /**
           * Spring particles back toward their original positions.
           */
          const homeDX =
            particle.originX -
            particle.x;

          const homeDY =
            particle.originY -
            particle.y;

          particle.vx +=
            homeDX *
            RETURN_FORCE;

          particle.vy +=
            homeDY *
            RETURN_FORCE;

          /**
           * ------------------------------------------------------
           * Cursor repulsion
           * ------------------------------------------------------
           */

          if (mouse?.active) {
            const dx =
              particle.x -
              mouse.x;

            const dy =
              particle.y -
              mouse.y;

            const distanceSquared =
              dx * dx +
              dy * dy;

            const mouseRadiusSquared =
              MOUSE_RADIUS *
              MOUSE_RADIUS;

            if (
              distanceSquared <
                mouseRadiusSquared &&
              distanceSquared > 0.01
            ) {
              const distance =
                Math.sqrt(
                  distanceSquared
                );

              /**
               * Stronger nonlinear force near cursor.
               */
              const normalized =
                1 -
                distance /
                  MOUSE_RADIUS;

              const force =
                normalized *
                normalized *
                MOUSE_FORCE;

              const directionX =
                dx / distance;

              const directionY =
                dy / distance;

              particle.vx +=
                directionX *
                force;

              particle.vy +=
                directionY *
                force;
            }
          }

          /**
           * Damping.
           */
          particle.vx *=
            FRICTION;

          particle.vy *=
            FRICTION;

          /**
           * Prevent extreme velocity when quickly sweeping cursor.
           */
          const speedSquared =
            particle.vx *
              particle.vx +
            particle.vy *
              particle.vy;

          if (
            speedSquared >
            MAX_SPEED *
              MAX_SPEED
          ) {
            const speed =
              Math.sqrt(
                speedSquared
              );

            particle.vx =
              (particle.vx /
                speed) *
              MAX_SPEED;

            particle.vy =
              (particle.vy /
                speed) *
              MAX_SPEED;
          }

          particle.x +=
            particle.vx;

          particle.y +=
            particle.vy;
        }
      }

      /**
       * ----------------------------------------------------------
       * Render particles
       * ----------------------------------------------------------
       */

      for (
        let i = 0;
        i < particles.length;
        i++
      ) {
        drawParticle(
          particles[i],
          mouse
        );
      }
    };

    animate();

    /**
     * ------------------------------------------------------------
     * Cleanup
     * ------------------------------------------------------------
     */

    return () => {
      if (
        rafRef.current !== null
      ) {
        cancelAnimationFrame(
          rafRef.current
        );
      }

      resizeObserver?.disconnect();

      window.removeEventListener(
        "resize",
        resizeCanvas
      );

      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );

      mediaQuery.removeEventListener(
        "change",
        handleMotionChange
      );
    };
  }, [mouseRef]);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "absolute inset-0 h-full w-full pointer-events-none",
        className
      )}
      aria-hidden="true"
    />
  );
}