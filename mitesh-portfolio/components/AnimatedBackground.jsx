"use client";

import { useEffect, useRef } from "react";

// Lightweight canvas effect: a handful of soft, colored nodes drifting slowly
// with parallax that responds to the pointer, giving the hero some depth
// without pulling in a full 3D library.
export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function resize() {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    resize();
    window.addEventListener("resize", resize);

    const isDark = () => document.documentElement.getAttribute("data-theme") === "dark";

    const colors = () =>
      isDark()
        ? ["rgba(139,134,255,0.55)", "rgba(255,145,128,0.5)", "rgba(45,212,191,0.45)"]
        : ["rgba(79,70,229,0.45)", "rgba(255,107,91,0.4)", "rgba(13,148,136,0.35)"];

    const nodeCount = 7;
    const nodes = Array.from({ length: nodeCount }, (_, i) => ({
      baseX: Math.random() * width,
      baseY: Math.random() * height * 0.8,
      r: 90 + Math.random() * 120,
      depth: 0.3 + Math.random() * 0.7,
      driftX: (Math.random() - 0.5) * 0.15,
      driftY: (Math.random() - 0.5) * 0.1,
      angle: Math.random() * Math.PI * 2,
      colorIndex: i % 3,
    }));

    let pointer = { x: width / 2, y: height / 2 };
    let targetPointer = { x: width / 2, y: height / 2 };

    function handlePointerMove(e) {
      const rect = canvas.getBoundingClientRect();
      targetPointer.x = e.clientX - rect.left;
      targetPointer.y = e.clientY - rect.top;
    }
    window.addEventListener("pointermove", handlePointerMove);

    let raf;
    let t = 0;

    function draw() {
      t += 0.004;
      pointer.x += (targetPointer.x - pointer.x) * 0.04;
      pointer.y += (targetPointer.y - pointer.y) * 0.04;

      ctx.clearRect(0, 0, width, height);

      const palette = colors();

      nodes.forEach((n) => {
        const driftAngle = t + n.angle;
        const x =
          n.baseX +
          Math.cos(driftAngle) * 30 * n.driftX * 10 +
          (pointer.x - width / 2) * 0.04 * n.depth;
        const y =
          n.baseY +
          Math.sin(driftAngle) * 30 * n.driftY * 10 +
          (pointer.y - height / 2) * 0.04 * n.depth;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, n.r);
        gradient.addColorStop(0, palette[n.colorIndex]);
        gradient.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, n.r, 0, Math.PI * 2);
        ctx.fill();
      });

      if (!prefersReducedMotion) {
        raf = requestAnimationFrame(draw);
      }
    }

    draw();
    if (prefersReducedMotion) {
      // Draw a single static frame and stop.
    }

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", handlePointerMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="hero-canvas" aria-hidden="true" />;
}
