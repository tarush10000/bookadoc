'use client';

import { useEffect, useRef } from 'react';

export default function DynamicGradient() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let time = 0;

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resize();
        window.addEventListener('resize', resize);

        const animate = () => {
            time += 0.005;

            const gradient1 = ctx.createRadialGradient(
                canvas.width * 0.3 + Math.sin(time) * 200,
                canvas.height * 0.3 + Math.cos(time) * 200,
                0,
                canvas.width * 0.3 + Math.sin(time) * 200,
                canvas.height * 0.3 + Math.cos(time) * 200,
                canvas.width * 0.5
            );

            gradient1.addColorStop(0, 'rgba(241, 90, 41, 0.25)');
            gradient1.addColorStop(1, 'rgba(241, 90, 41, 0)');

            const gradient2 = ctx.createRadialGradient(
                canvas.width * 0.7 + Math.cos(time * 1.3) * 150,
                canvas.height * 0.6 + Math.sin(time * 1.3) * 150,
                0,
                canvas.width * 0.7 + Math.cos(time * 1.3) * 150,
                canvas.height * 0.6 + Math.sin(time * 1.3) * 150,
                canvas.width * 0.4
            );

            gradient2.addColorStop(0, 'rgba(139, 92, 246, 0.2)');
            gradient2.addColorStop(1, 'rgba(139, 92, 246, 0)');

            const gradient3 = ctx.createRadialGradient(
                canvas.width * 0.5 + Math.sin(time * 0.8) * 100,
                canvas.height * 0.8 + Math.cos(time * 0.8) * 100,
                0,
                canvas.width * 0.5 + Math.sin(time * 0.8) * 100,
                canvas.height * 0.8 + Math.cos(time * 0.8) * 100,
                canvas.width * 0.3
            );

            gradient3.addColorStop(0, 'rgba(59, 130, 246, 0.15)');
            gradient3.addColorStop(1, 'rgba(59, 130, 246, 0)');

            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = gradient1;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = gradient2;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.fillStyle = gradient3;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none z-0"
            style={{ filter: 'blur(80px)', opacity: 0.6 }}
        />
    );
}
