import { useEffect, useRef } from "react";
import gsap from "gsap";

// Tunables — change these to taste
const GAP = 34; // px between dots
const DOT_RADIUS = 1.6; // base dot size
const HOVER_RADIUS = 140; // px falloff around cursor
const BASE_ALPHA = 0.15; // resting opacity
const MAX_ALPHA = 0.9; // opacity right under cursor
const MAX_SCALE = 2.6; // size multiplier under cursor

// Club zone colors (top → mid → bottom), RGB triples
const MATRIX = [81, 126, 255]; // #517eff
const ECOMM = [0, 197, 42]; // #00C52A
const PSYNAPSE = [255, 49, 215]; // punchier, more saturated pink
const REST = [150, 150, 150]; // resting grey

// Blend the three club colors across a normalized axis (0..1)
const zoneColor = (n: number): number[] => {
  const c = Math.min(1, Math.max(0, n)) * 2; // 0..2 span
  const [a, b, f] = c < 1 ? [MATRIX, ECOMM, c] : [ECOMM, PSYNAPSE, c - 1];
  return [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f, a[2] + (b[2] - a[2]) * f];
};

type Dot = { x: number; y: number };

export default function InteractiveDotBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let dots: Dot[] = [];
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Virtual tracker GSAP eases toward the raw pointer — this is the smoothing.
    const pointer = { x: -9999, y: -9999 };
    const tracker = { x: -9999, y: -9999 };
    const moveX = gsap.quickTo(tracker, "x", { duration: 0.4, ease: "power3.out" });
    const moveY = gsap.quickTo(tracker, "y", { duration: 0.4, ease: "power3.out" });

    const buildGrid = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      dots = [];
      const cols = Math.ceil(w / GAP);
      const rows = Math.ceil(h / GAP);
      const offsetX = (w - (cols - 1) * GAP) / 2;
      const offsetY = (h - (rows - 1) * GAP) / 2;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          dots.push({ x: offsetX + c * GAP, y: offsetY + r * GAP });
        }
      }
    };

    const render = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      ctx.clearRect(0, 0, w, h);

      // Active zone color from cursor y — computed once per frame
      const zone = zoneColor(tracker.y / h);

      const r2 = HOVER_RADIUS * HOVER_RADIUS;
      for (let i = 0; i < dots.length; i++) {
        const d = dots[i];
        const dx = d.x - tracker.x;
        const dy = d.y - tracker.y;
        const dist2 = dx * dx + dy * dy;

        let t = 0; // 0 = resting, 1 = fully lit
        if (dist2 < r2) t = 1 - Math.sqrt(dist2) / HOVER_RADIUS;

        const alpha = BASE_ALPHA + (MAX_ALPHA - BASE_ALPHA) * t;
        const radius = DOT_RADIUS * (1 + (MAX_SCALE - 1) * t);

        ctx.beginPath();
        ctx.arc(d.x, d.y, radius, 0, Math.PI * 2);
        const cr = REST[0] + (zone[0] - REST[0]) * t;
        const cg = REST[1] + (zone[1] - REST[1]) * t;
        const cb = REST[2] + (zone[2] - REST[2]) * t;
        ctx.fillStyle = `rgba(${cr | 0}, ${cg | 0}, ${cb | 0}, ${alpha})`;
        ctx.fill();
      }
    };

    const onMove = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      moveX(pointer.x);
      moveY(pointer.y);
    };

    buildGrid();
    window.addEventListener("resize", buildGrid);
    window.addEventListener("pointermove", onMove);
    gsap.ticker.add(render);

    return () => {
      gsap.ticker.remove(render);
      window.removeEventListener("resize", buildGrid);
      window.removeEventListener("pointermove", onMove);
      gsap.killTweensOf(tracker);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none bg-[#0a0a0a]"
    />
  );
}
