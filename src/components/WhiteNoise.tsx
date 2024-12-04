"use client"

import { useEffect, useRef } from 'react';

interface IWhiteNoiseProps {
  opacity?: number
}

export default function WhiteNoise({ opacity = 5 }: IWhiteNoiseProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    const resize = () => {
      if (!canvas) return;

      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
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
    window.addEventListener('resize', resize);
    animationLoop();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      className={`absolute pointer-events-none opacity-${opacity} top-0 left-0 bottom-0 right-0 z-50`}
      ref={canvasRef}
    />
  );
}

