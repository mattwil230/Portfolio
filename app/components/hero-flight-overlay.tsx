"use client";

import { useEffect, useRef, type CSSProperties } from "react";

type Waypoint = {
  x: number;
  y: number;
};

type PlanePath = (progress: number) => Waypoint;

type PlaneDefinition = {
  className: string;
  duration: number;
  offset: number;
  path: PlanePath;
};

const RUNWAY_Y = 82;

function catmullRomPoint(
  point0: Waypoint,
  point1: Waypoint,
  point2: Waypoint,
  point3: Waypoint,
  progress: number,
): Waypoint {
  const squared = progress * progress;
  const cubed = squared * progress;

  return {
    x:
      0.5 *
      ((2 * point1.x) +
        (-point0.x + point2.x) * progress +
        (2 * point0.x - 5 * point1.x + 4 * point2.x - point3.x) * squared +
        (-point0.x + 3 * point1.x - 3 * point2.x + point3.x) * cubed),
    y:
      0.5 *
      ((2 * point1.y) +
        (-point0.y + point2.y) * progress +
        (2 * point0.y - 5 * point1.y + 4 * point2.y - point3.y) * squared +
        (-point0.y + 3 * point1.y - 3 * point2.y + point3.y) * cubed),
  };
}

function createClosedSplinePath(points: Waypoint[]): PlanePath {
  const pointCount = points.length;

  return (progress) => {
    const scaled = wrapProgress(progress) * pointCount;
    const segmentIndex = Math.floor(scaled) % pointCount;
    const segmentProgress = scaled - segmentIndex;

    return catmullRomPoint(
      points[(segmentIndex - 1 + pointCount) % pointCount],
      points[segmentIndex],
      points[(segmentIndex + 1) % pointCount],
      points[(segmentIndex + 2) % pointCount],
      segmentProgress,
    );
  };
}

const planeCycle = 32000;

const planeDefinitions: PlaneDefinition[] = [
  {
    className: "hero-plane hero-plane-a",
    duration: planeCycle,
    offset: 0,
    path: createClosedSplinePath([
      { x: 36, y: RUNWAY_Y },
      { x: 40, y: RUNWAY_Y },
      { x: 44, y: 80 },
      { x: 46, y: 73 },
      { x: 44, y: 61 },
      { x: 37, y: 44 },
      { x: 23, y: 22 },
      { x: 10, y: 16 },
      { x: 14, y: 40 },
      { x: 24, y: 62 },
      { x: 28, y: 72 },
      { x: 32, y: 79 },
      { x: 34, y: 81 },
    ]),
  },
  {
    className: "hero-plane hero-plane-b",
    duration: planeCycle,
    offset: 3200,
    path: createClosedSplinePath([
      { x: 44, y: RUNWAY_Y },
      { x: 49, y: RUNWAY_Y },
      { x: 53, y: 80 },
      { x: 56, y: 72 },
      { x: 54, y: 58 },
      { x: 68, y: 26 },
      { x: 90, y: 12 },
      { x: 88, y: 38 },
      { x: 74, y: 62 },
      { x: 48, y: 74 },
      { x: 24, y: 70 },
      { x: 8, y: 36 },
      { x: 18, y: 14 },
      { x: 50, y: 10 },
      { x: 76, y: 18 },
      { x: 86, y: 48 },
      { x: 74, y: 76 },
      { x: 58, y: 80 },
    ]),
  },
  {
    className: "hero-plane hero-plane-c",
    duration: planeCycle,
    offset: 6400,
    path: createClosedSplinePath([
      { x: 52, y: RUNWAY_Y },
      { x: 57, y: RUNWAY_Y },
      { x: 61, y: 80 },
      { x: 63, y: 72 },
      { x: 61, y: 60 },
      { x: 72, y: 40 },
      { x: 86, y: 20 },
      { x: 92, y: 14 },
      { x: 88, y: 42 },
      { x: 74, y: 56 },
      { x: 68, y: 70 },
      { x: 64, y: 77 },
      { x: 60, y: 80 },
      { x: 58, y: 81 },
    ]),
  },
  {
    className: "hero-plane hero-plane-d",
    duration: planeCycle,
    offset: 9600,
    path: createClosedSplinePath([
      { x: 60, y: RUNWAY_Y },
      { x: 64, y: RUNWAY_Y },
      { x: 68, y: 80 },
      { x: 70, y: 72 },
      { x: 68, y: 61 },
      { x: 60, y: 48 },
      { x: 42, y: 22 },
      { x: 16, y: 10 },
      { x: 6, y: 30 },
      { x: 18, y: 58 },
      { x: 34, y: 74 },
      { x: 50, y: 80 },
      { x: 86, y: 28 },
      { x: 94, y: 54 },
      { x: 86, y: 74 },
      { x: 74, y: 81 },
    ]),
  },
];

function wrapProgress(progress: number) {
  return ((progress % 1) + 1) % 1;
}

function clampPoint(point: Waypoint): Waypoint {
  return {
    x: Math.min(94, Math.max(6, point.x)),
    y: Math.min(86, Math.max(8, point.y)),
  };
}

function getPlaneState(path: PlanePath, progress: number) {
  const current = clampPoint(path(wrapProgress(progress)));
  const ahead = clampPoint(path(wrapProgress(progress + 0.002)));
  const deltaX = ahead.x - current.x;
  const deltaY = ahead.y - current.y;

  return {
    x: current.x,
    y: current.y,
    angle: Math.atan2(deltaY, deltaX) * (180 / Math.PI),
  };
}

function getInitialPlaneStyle(definition: PlaneDefinition): CSSProperties {
  const { x, y, angle } = getPlaneState(
    definition.path,
    definition.offset / definition.duration,
  );

  return {
    left: `${x}%`,
    top: `${y}%`,
    transform: `translate(-50%, -50%) rotate(${angle}deg)`,
  };
}

function PlaneIcon() {
  return (
    <svg viewBox="0 0 40 40" className="h-full w-full" aria-hidden="true">
      <path
        d="M18.3 3.2c0-1.4 1.1-2.5 2.5-2.5h1.4c1.4 0 2.5 1.1 2.5 2.5v9.1l10.2 3.4c1.4.5 2.4 1.8 2.4 3.3v1.1c0 1.5-1 2.8-2.4 3.3l-10.2 3.4v5.3l3.7 2.6c1 .7 1.6 1.8 1.6 3v1.4H12.5v-1.4c0-1.2.6-2.3 1.6-3l3.7-2.6v-5.3L7.6 23.4c-1.4-.5-2.4-1.8-2.4-3.3V19c0-1.5 1-2.8 2.4-3.3l10.7-3.4Z"
        fill="currentColor"
        stroke="rgba(255, 255, 255, 0.92)"
        strokeWidth="1.2"
        vectorEffect="non-scaling-stroke"
      />
      <path
        d="M21.5 4.4v27.8"
        stroke="rgba(255, 255, 255, 0.78)"
        strokeWidth="1.4"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

export default function HeroFlightOverlay() {
  const planeRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frame = 0;
    let startedAt = 0;

    const updatePlanes = (time: number) => {
      if (!startedAt) {
        startedAt = time;
      }

      const elapsed = time - startedAt;

      planeDefinitions.forEach((definition, index) => {
        const node = planeRefs.current[index];

        if (!node) {
          return;
        }

        const progress =
          ((elapsed + definition.offset) % definition.duration) /
          definition.duration;
        const { x, y, angle } = getPlaneState(definition.path, progress);

        node.style.left = `${x}%`;
        node.style.top = `${y}%`;
        node.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
      });

      frame = window.requestAnimationFrame(updatePlanes);
    };

    frame = window.requestAnimationFrame(updatePlanes);

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="hero-runway absolute left-1/2 top-[82%] -translate-x-1/2 -translate-y-1/2">
        <div className="hero-runway-centerline" />
        <div className="hero-runway-mark hero-runway-mark-a" />
        <div className="hero-runway-mark hero-runway-mark-b" />
        <div className="hero-runway-mark hero-runway-mark-c" />
        <div className="hero-runway-mark hero-runway-mark-d" />
      </div>

      <div className="absolute inset-0 z-20">
        {planeDefinitions.map((definition, index) => (
          <div
            key={definition.className}
            ref={(node) => {
              planeRefs.current[index] = node;
            }}
            className={definition.className}
            style={getInitialPlaneStyle(definition)}
          >
            <PlaneIcon />
          </div>
        ))}
      </div>
    </div>
  );
}
