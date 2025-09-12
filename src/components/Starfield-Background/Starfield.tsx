// components/Starfield.tsx
'use client';

import { useRef, useEffect } from 'react';

const Starfield = () => {
  // Reference to the <canvas> element
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return; // Safety check
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height); 
    gradient.addColorStop(0, '#0f2027');  // Top color
    gradient.addColorStop(1, '#2c5364');  // Bottom color

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);



    // Array to hold star objects
    const stars: { x: number; y: number; radius: number; velocity: number }[] = [];
    const numStars = 300; // How many stars to render

    // Function to resize canvas to full window size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas(); // Initial sizing
    window.addEventListener('resize', resizeCanvas);

    // Initialize stars with random position, size, and speed
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,     // Random horizontal position
        y: Math.random() * canvas.height,    // Random vertical position
        radius: Math.random() * 1.5,         // Small random size
        velocity: 0.2 + Math.random() * 0.5, // Random downward speed
      });
    }

    let t = 0; // time variable for gradient animation

    // Main animation loop
    const animate = () => {
      t += 0.001; // speed of gradient color shift

      // Generate two shifting HSL colors
      const color1 = `hsl(${(t * 40) % 360}, 70%, 5%)`;
      const color2 = `hsl(${(t * 40 + 120) % 360}, 70%, 10%)`;

      // Create vertical gradient background
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, color1);
      gradient.addColorStop(1, color2);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);


      // Draw stars
      ctx.fillStyle = 'white';
      stars.forEach((star) => {
        // Move star downward
        star.y += star.velocity;

        // If star passes bottom edge, respawn at top with new random X
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }

        // Draw star as a small white circle
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Call this function again on the next animation frame
      requestAnimationFrame(animate);
    };

    animate(); // Start the animation

    // Cleanup: remove resize listener when component unmounts
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    />
  );
};

export default Starfield;
