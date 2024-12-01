"use client"

import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

export default function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const stars: Star[] = Array.from({ length: 50 }, () => ({
      x: Math.random() * rect.width,
      y: Math.random() * rect.height,
      size: Math.random() * 2,
      opacity: Math.random(),
      speed: 0.02 + Math.random() * 0.03,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, rect.width, rect.height);

      stars.forEach((star) => {
        star.opacity += star.speed;
        if (star.opacity >= 1) {
          star.speed = -star.speed;
        } else if (star.opacity <= 0) {
          star.speed = Math.abs(star.speed);
          star.x = Math.random() * rect.width;
          star.y = Math.random() * rect.height;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(96, 165, 250, ${star.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      ctx.clearRect(0, 0, rect.width, rect.height);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.3 }}
    />
  );
} 