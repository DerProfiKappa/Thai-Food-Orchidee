'use client';
import { useEffect } from "react";
import useFluidCursor from "@/hooks/useFluidCursor";

const FluidCursor = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;

    const destroy = useFluidCursor();

    return () => {
      destroy?.();
    };
  }, []);

  if (typeof window !== "undefined" && !window.matchMedia("(pointer: fine)").matches) {
    return null;
  }

  return (
    <div className="pointer-events-none fixed inset-0 z-[60] hidden md:block">
      <canvas id="fluid" className="h-full w-full" />
    </div>
  );
};

export default FluidCursor;
