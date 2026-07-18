import { motion, useMotionValue, useSpring, useTransform, MotionProps } from "motion/react";
import { ReactNode, useRef } from "react";

interface TiltCardProps extends MotionProps {
  children: ReactNode;
  className?: string;
  clip?: "bl" | "tr" | "none";
  maxTilt?: number;
}

export function TiltCard({ children, className = "", clip = "bl", maxTilt = 7, ...motionProps }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [maxTilt, -maxTilt]), { stiffness: 220, damping: 22 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-maxTilt, maxTilt]), { stiffness: 220, damping: 22 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    px.set((e.clientX - rect.left) / rect.width);
    py.set((e.clientY - rect.top) / rect.height);
  };
  const handleLeave = () => { px.set(0.5); py.set(0.5); };

  const clipPath =
    clip === "bl"
      ? "polygon(0 0, 100% 0, 100% 100%, 22px 100%, 0 calc(100% - 22px))"
      : clip === "tr"
      ? "polygon(0 0, calc(100% - 22px) 0, 100% 22px, 100% 100%, 0 100%)"
      : undefined;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformPerspective: 900, clipPath }}
      className={className}
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
