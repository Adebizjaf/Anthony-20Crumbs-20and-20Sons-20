import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface FloatingParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  color: string;
}

interface AnimatedBackgroundProps {
  particleCount?: number;
  className?: string;
  colors?: string[];
}

export function AnimatedBackground({ 
  particleCount = 15, 
  className,
  colors = ['bg-accent/10', 'bg-primary/5', 'bg-secondary/10']
}: AnimatedBackgroundProps) {
  const [particles, setParticles] = useState<FloatingParticle[]>([]);

  useEffect(() => {
    const newParticles: FloatingParticle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        speed: Math.random() * 2 + 0.5,
        opacity: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)]
      });
    }
    
    setParticles(newParticles);
  }, [particleCount, colors]);

  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={cn(
            "absolute rounded-full blur-sm animate-float",
            particle.color
          )}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animationDuration: `${particle.speed + 3}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
}

// Pulsing ring animation component
export function PulsingRings({ 
  className,
  ringCount = 3 
}: { 
  className?: string;
  ringCount?: number;
}) {
  return (
    <div className={cn("absolute inset-0 flex items-center justify-center pointer-events-none", className)}>
      {Array.from({ length: ringCount }, (_, i) => (
        <div
          key={i}
          className="absolute border border-accent/20 rounded-full animate-ping"
          style={{
            width: `${(i + 1) * 100}px`,
            height: `${(i + 1) * 100}px`,
            animationDelay: `${i * 0.5}s`,
            animationDuration: '3s',
          }}
        />
      ))}
    </div>
  );
}

// Floating icons animation
export function FloatingIcons({ 
  icons,
  className 
}: { 
  icons: React.ReactNode[];
  className?: string;
}) {
  return (
    <div className={cn("absolute inset-0 overflow-hidden pointer-events-none", className)}>
      {icons.map((icon, index) => (
        <div
          key={index}
          className="absolute animate-float opacity-10 dark:opacity-20"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
            animationDelay: `${index * 0.7}s`,
            animationDuration: `${4 + Math.random() * 2}s`,
          }}
        >
          {icon}
        </div>
      ))}
    </div>
  );
}

// Gradient orb that follows cursor
export function InteractiveOrb() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed pointer-events-none z-0 w-64 h-64 rounded-full bg-gradient-to-r from-accent/10 via-primary/5 to-secondary/10 blur-3xl transition-all duration-300 -translate-x-1/2 -translate-y-1/2",
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"
      )}
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  );
}