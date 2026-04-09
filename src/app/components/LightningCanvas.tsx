import { useEffect, useRef } from "react";

interface Bolt {
  x: number;
  y: number;
  tx: number;
  ty: number;
  progress: number;
  opacity: number;
  segments: { x: number; y: number }[];
  width: number;
  speed: number;
}

function generateBoltSegments(x1: number, y1: number, x2: number, y2: number, roughness = 8): { x: number; y: number }[] {
  const points: { x: number; y: number }[] = [{ x: x1, y: y1 }];
  const steps = Math.max(6, Math.floor(Math.hypot(x2 - x1, y2 - y1) / 30));
  for (let i = 1; i < steps; i++) {
    const t = i / steps;
    const mx = x1 + (x2 - x1) * t;
    const my = y1 + (y2 - y1) * t;
    const perp = { x: -(y2 - y1), y: x2 - x1 };
    const len = Math.hypot(perp.x, perp.y) || 1;
    const offset = (Math.random() - 0.5) * roughness * 2;
    points.push({ x: mx + (perp.x / len) * offset, y: my + (perp.y / len) * offset });
  }
  points.push({ x: x2, y: y2 });
  return points;
}

export function LightningCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -999, y: -999 });
  const bolts = useRef<Bolt[]>([]);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };

      // Spawn 1-2 bolts from random edge points toward mouse
      const count = Math.random() > 0.5 ? 2 : 1;
      for (let i = 0; i < count; i++) {
        const edge = Math.floor(Math.random() * 4);
        let sx = 0, sy = 0;
        if (edge === 0) { sx = Math.random() * canvas.width; sy = 0; }
        else if (edge === 1) { sx = canvas.width; sy = Math.random() * canvas.height; }
        else if (edge === 2) { sx = Math.random() * canvas.width; sy = canvas.height; }
        else { sx = 0; sy = Math.random() * canvas.height; }

        // Also spawn some from nearby random points
        if (Math.random() > 0.4) {
          sx = mouse.current.x + (Math.random() - 0.5) * 300;
          sy = mouse.current.y + (Math.random() - 0.5) * 300;
        }

        bolts.current.push({
          x: sx, y: sy,
          tx: mouse.current.x + (Math.random() - 0.5) * 40,
          ty: mouse.current.y + (Math.random() - 0.5) * 40,
          progress: 0,
          opacity: 0.6 + Math.random() * 0.4,
          segments: generateBoltSegments(sx, sy, mouse.current.x, mouse.current.y, 12),
          width: 0.5 + Math.random() * 1.2,
          speed: 0.06 + Math.random() * 0.08,
        });
      }

      // Cap bolts
      if (bolts.current.length > 18) bolts.current = bolts.current.slice(-18);
    };

    canvas.addEventListener("mousemove", onMove);

    // Ambient idle bolts
    const idleInterval = setInterval(() => {
      if (!canvas) return;
      const x1 = Math.random() * canvas.width;
      const y1 = Math.random() * canvas.height;
      const x2 = x1 + (Math.random() - 0.5) * 200;
      const y2 = y1 + (Math.random() - 0.5) * 200;
      bolts.current.push({
        x: x1, y: y1, tx: x2, ty: y2,
        progress: 0, opacity: 0.15 + Math.random() * 0.2,
        segments: generateBoltSegments(x1, y1, x2, y2, 8),
        width: 0.3 + Math.random() * 0.6,
        speed: 0.04 + Math.random() * 0.05,
      });
    }, 800);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bolts.current = bolts.current.filter(b => b.opacity > 0.01);

      for (const bolt of bolts.current) {
        bolt.progress = Math.min(1, bolt.progress + bolt.speed);
        const visibleCount = Math.floor(bolt.segments.length * bolt.progress);
        if (visibleCount < 2) continue;

        const segs = bolt.segments.slice(0, visibleCount);

        // Outer glow
        ctx.beginPath();
        ctx.moveTo(segs[0].x, segs[0].y);
        for (let i = 1; i < segs.length; i++) ctx.lineTo(segs[i].x, segs[i].y);
        ctx.strokeStyle = `rgba(128,0,178,${bolt.opacity * 0.3})`;
        ctx.lineWidth = bolt.width * 4;
        ctx.shadowBlur = 12;
        ctx.shadowColor = "#8000b2";
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();

        // Core bolt
        ctx.beginPath();
        ctx.moveTo(segs[0].x, segs[0].y);
        for (let i = 1; i < segs.length; i++) ctx.lineTo(segs[i].x, segs[i].y);
        ctx.strokeStyle = `rgba(200,120,255,${bolt.opacity})`;
        ctx.lineWidth = bolt.width;
        ctx.shadowBlur = 6;
        ctx.shadowColor = "#c078ff";
        ctx.stroke();

        // Fade out after reaching target
        if (bolt.progress >= 1) bolt.opacity *= 0.88;
      }

      ctx.shadowBlur = 0;
      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animRef.current);
      clearInterval(idleInterval);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto z-[1]"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
