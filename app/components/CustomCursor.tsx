'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
    const cursorRef = useRef<HTMLDivElement>(null);
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const cursor = cursorRef.current;
        const cursorDot = cursorDotRef.current;
        if (!cursor || !cursorDot) return;

        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;
        let dotX = 0;
        let dotY = 0;

        const handleMouseMove = (e: MouseEvent) => {
            mouseX = e.clientX;
            mouseY = e.clientY;

            const target = e.target as HTMLElement;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.closest('a') ||
                target.closest('button')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        const animate = () => {
            cursorX += (mouseX - cursorX) * 0.1;
            cursorY += (mouseY - cursorY) * 0.1;
            dotX += (mouseX - dotX) * 0.3;
            dotY += (mouseY - dotY) * 0.3;

            cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
            cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`;

            requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMouseMove);
        animate();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className={`custom-cursor hidden md:block ${isHovering ? 'hover' : ''}`}
                style={{
                    position: 'fixed',
                    width: isHovering ? '48px' : '32px',
                    height: isHovering ? '48px' : '32px',
                    border: '2px solid rgba(241, 90, 41, 0.5)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    left: '-16px',
                    top: '-16px',
                    transition: 'width 0.2s, height 0.2s',
                }}
            />
            <div
                ref={cursorDotRef}
                className="custom-cursor-dot hidden md:block"
                style={{
                    position: 'fixed',
                    width: '6px',
                    height: '6px',
                    backgroundColor: 'rgba(241, 90, 41, 0.8)',
                    borderRadius: '50%',
                    pointerEvents: 'none',
                    zIndex: 9999,
                    left: '-3px',
                    top: '-3px',
                }}
            />
        </>
    );
}
