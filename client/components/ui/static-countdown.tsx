import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Clock } from 'lucide-react';

interface StaticCountdownProps {
  show: boolean;
  onComplete: () => void;
  duration?: number;
}

export function StaticCountdown({ show, onComplete, duration = 10 }: StaticCountdownProps) {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!show) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);
    setTimeLeft(duration);
    
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setTimeout(() => {
            setIsVisible(false);
            onComplete();
          }, 500);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [show, duration, onComplete]);

  if (!show) return null;

  return (
    <div
      className={cn(
        "fixed bottom-4 left-4 z-50 bg-accent/90 text-accent-foreground px-4 py-3 rounded-lg shadow-lg backdrop-blur-sm transition-all duration-500 flex items-center gap-2 text-sm font-medium",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
    >
      <Clock className="w-4 h-4 animate-pulse" />
      <span>Animations starting in {timeLeft}s...</span>
      <div className="w-12 h-1 bg-accent-foreground/20 rounded-full overflow-hidden">
        <div 
          className="h-full bg-accent-foreground transition-all duration-1000 ease-linear"
          style={{ width: `${((duration - timeLeft) / duration) * 100}%` }}
        />
      </div>
    </div>
  );
}