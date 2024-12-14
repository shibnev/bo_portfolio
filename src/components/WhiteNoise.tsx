"use client";

import classNames from '@/helpers/ClassNames';
import { className } from '@/types';
import { useEffect, useRef } from "react";

interface IWhiteNoiseProps {
  className?: className
}

export default function WhiteNoise({ className = '' }: IWhiteNoiseProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    const resize = () => {
      if (!canvas) return;

      const { parentElement } = canvas;

      if (parentElement) {
        const { width, height } = parentElement.getBoundingClientRect();

        canvas.width = width * window.devicePixelRatio;
        canvas.height = height * window.devicePixelRatio;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
      }
    };

    const noise = (context: CanvasRenderingContext2D) => {
      if (!context) return;

      const w = context.canvas.width;
      const h = context.canvas.height;
      const imageData = context.createImageData(w, h);
      const buffer32 = new Uint32Array(imageData.data.buffer);
      const len = buffer32.length;

      for (let i = 0; i < len; i++) {
        if (Math.random() < 0.5) {
          buffer32[i] = 0xffffffff;
        }
      }

      context.putImageData(imageData, 0, 0);
    };

    const animationLoop = () => {
      if (!ctx) return;

      noise(ctx);
      requestAnimationFrame(animationLoop);
    };

    resize();
    window.addEventListener("resize", resize);
    animationLoop();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      className={
        classNames(
          `absolute pointer-events-none opacity-5 top-0 left-0 bottom-0 right-0 z-50`,
          className,
        )
      }
      ref={canvasRef}
    />
  );
}
