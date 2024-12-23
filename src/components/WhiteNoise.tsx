'use client';

import classNames from '@/helpers/ClassNames';
import { className } from '@/types';
import { useEffect, useRef } from "react";

const DEFAULT_OPACITY = 0.03;
const FRAME_INTERVAL = 80; // Adjust frame interval for better performance

interface IWhiteNoiseProps {
  className?: className
  opacity?: number
}

export default function WhiteNoise({ className = '', opacity = DEFAULT_OPACITY }: IWhiteNoiseProps) {
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
        buffer32[i] = Math.random() < 0.5 ? 0xffffffff : 0xff000000; // Simplify noise generation
      }

      context.putImageData(imageData, 0, 0);
    };

    let lastFrameTime = 0;
    const animationLoop = (time: number) => {
      if (!ctx) return;

      if (time - lastFrameTime >= FRAME_INTERVAL) {
        noise(ctx);
        lastFrameTime = time;
      }
      requestAnimationFrame(animationLoop);
    };

    resize();
    window.addEventListener("resize", resize);
    requestAnimationFrame(animationLoop);

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      className={
        classNames(
          `absolute pointer-events-none top-0 left-0 bottom-0 right-0 z-50`,
          className,
        )
      }
      style={{ opacity: `${opacity}` }}
      ref={canvasRef}
    />
  );
}
