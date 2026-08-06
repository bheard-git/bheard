"use client";

import React, { useId } from "react";

interface SignalDividerProps {
  className?: string;
  height?: number;
  signalColor?: string;
  noiseColor?: string;
  dotRadius?: number;
  duration?: number;
}

export default function SignalDivider({
  className = "",
  height = 86,
  signalColor = "#ff923e",
  noiseColor = "#7C818A",
  dotRadius = 5,
  duration = 5.5,
}: SignalDividerProps) {
  const id = useId();

  const wave = `
    M0,43
    L14,20
    L26,66
    L38,10
    L50,74
    L62,30
    L74,58
    L86,18
    L98,50
    L110,26
    L130,60
    L150,50
    L170,44
    C260,20 300,66 380,43
    C460,20 500,66 580,43
    C660,20 700,66 780,43
    C860,20 900,66 980,43
    L1180,43
  `;

  return (
    <div
      className={className}
      aria-hidden
      style={{
        width: "100%",
        overflow: "hidden",
        display: "block",
        flexShrink: 0,
        pointerEvents: "none",
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 1180 86"
        preserveAspectRatio="none"
      >
        <defs>
          <path id={`wave-${id}`} d={wave} />
        </defs>

        {/* Left noisy waveform */}
        <path
          d="
            M0,43
            L14,20
            L26,66
            L38,10
            L50,74
            L62,30
            L74,58
            L86,18
            L98,50
            L110,26
            L130,60
            L150,50
            L170,44
          "
          fill="none"
          stroke={noiseColor}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity=".75"
        />

        {/* Smooth signal */}
        <path
          d="
            M170,44
            C260,20 300,66 380,43
            C460,20 500,66 580,43
            C660,20 700,66 780,43
            C860,20 900,66 980,43
            L1180,43
          "
          fill="none"
          stroke={signalColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Animated dot */}
        <circle r={dotRadius} fill={signalColor}>
          <animateMotion
            dur={`${duration}s`}
            repeatCount="indefinite"
            rotate="auto"
          >
            <mpath href={`#wave-${id}`} />
          </animateMotion>
        </circle>
      </svg>
    </div>
  );
}