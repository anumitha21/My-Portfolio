import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const dotSpring = { damping: 30, stiffness: 500, mass: 0.2 };
  const ringSpring = { damping: 26, stiffness: 260, mass: 0.5 };
  const dotX = useSpring(mouseX, dotSpring);
  const dotY = useSpring(mouseY, dotSpring);
  const ringX = useSpring(mouseX, ringSpring);
  const ringY = useSpring(mouseY, ringSpring);

  useEffect(() => {
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "a, button, [role='button'], input, textarea, select, .cursor-pointer"
      );
      setIsPointer(!!interactive);
    };

    const leave = () => setIsVisible(false);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
    };
  }, [mouseX, mouseY, isVisible]);

  if (isTouch) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[200]" aria-hidden>
      {/* Diamond dot — tracks fast */}
      <motion.div
        className="fixed top-0 left-0 bg-[#0e7490]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: 7,
          height: 7,
          opacity: isVisible ? 1 : 0,
          clipPath: "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)",
        }}
        transition={{ opacity: { duration: 0.2 } }}
      />
      {/* Rotating square ring — trails, grows + spins on hover */}
      <motion.div
        className="fixed top-0 left-0 border-[1.5px] border-[#0e7490]/55"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isPointer ? 44 : 26,
          height: isPointer ? 44 : 26,
          rotate: isPointer ? 45 : 0,
          opacity: isVisible ? (isPointer ? 0.9 : 0.5) : 0,
          backgroundColor: isPointer ? "rgba(14,116,144,0.06)" : "rgba(14,116,144,0)",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      />
    </div>
  );
}
