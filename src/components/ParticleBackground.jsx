import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // --- Configuration ---
    const config = {
      // THIS IS THE CHANGED LINE
      particleColor: `rgba(0, 245, 255, 1)`, // Opacity increased to 1 for max brightness
      particleAmount: 50,
      defaultRadius: 2,
      variantRadius: 2,
      defaultSpeed: 0.3,
      variantSpeed: 0.5,
      linkRadius: 200,
    };
    
    let tick = 0;
    let particles = [];
    let mouse = { x: null, y: null, baseRadius: 150, currentRadius: 150 };

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.baseRadius = config.defaultRadius + Math.random() * config.variantRadius;
            this.radius = this.baseRadius;
            this.speed = config.defaultSpeed + Math.random() * config.variantSpeed;
            this.directionAngle = Math.floor(Math.random() * 360);
            this.vector = {
                x: Math.cos(this.directionAngle) * this.speed,
                y: Math.sin(this.directionAngle) * this.speed
            };
        }
        update() {
            this.border();
            this.x += this.vector.x;
            this.y += this.vector.y;
            this.vector.x *= 0.98;
            this.vector.y *= 0.98;
            const currentSpeed = Math.sqrt(this.vector.x**2 + this.vector.y**2);
            if (currentSpeed < this.speed && this.speed > 0) {
                this.vector.x = (this.vector.x / currentSpeed) * this.speed;
                this.vector.y = (this.vector.y / currentSpeed) * this.speed;
            }
        }
        border() {
            if (this.x >= canvas.width || this.x <= 0) this.vector.x *= -1;
            if (this.y >= canvas.height || this.y <= 0) this.vector.y *= -1;
        }
        draw() {
            this.radius = this.baseRadius + Math.sin(tick * 0.05) * 0.5;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fillStyle = config.particleColor;
            ctx.fill();
        }
    }

    function setupParticles() {
        particles = [];
        for (let i = 0; i < config.particleAmount; i++) {
            particles.push(new Particle());
        }
    }

    function linkParticles() {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < config.linkRadius) {
                    const opacity = 1 - (distance / config.linkRadius);
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.closePath();
                    ctx.strokeStyle = `rgba(0, 245, 255, ${opacity * 0.2})`;
                    ctx.stroke();
                }
            }
        }
    }

    function mouseInteraction() {
        if (mouse.x === null || mouse.y === null) return;
        particles.forEach(particle => {
            const dx = particle.x - mouse.x;
            const dy = particle.y - mouse.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < mouse.currentRadius) {
                const opacity = 1 - (distance / mouse.currentRadius);
                ctx.beginPath();
                ctx.moveTo(particle.x, particle.y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.closePath();
                ctx.strokeStyle = `rgba(0, 245, 255, ${opacity * 0.5})`;
                ctx.stroke();
            }
        });
    }

    const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        tick++;
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });
        linkParticles();
        mouseInteraction();
        animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        setupParticles();
    };

    const handleMouseMove = event => {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
    };

    const handleMouseOut = () => {
        mouse.x = null;
        mouse.y = null;
    };
    
    const handleClick = event => {
        const clickX = event.clientX;
        const clickY = event.clientY;
        const blastRadius = 200;
        const forceMagnitude = -25;
        particles.forEach(particle => {
            const dx = particle.x - clickX;
            const dy = particle.y - clickY;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < blastRadius && distance > 0) {
                const force = (1 - distance / blastRadius) * forceMagnitude;
                particle.vector.x += (dx / distance) * force;
                particle.vector.y += (dy / distance) * force;
            }
        });
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);
    window.addEventListener('click', handleClick);
    
    setupParticles();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      window.removeEventListener('click', handleClick);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />;
};

export default ParticleBackground;