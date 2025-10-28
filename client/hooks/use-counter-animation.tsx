import { useEffect, useState, useRef } from 'react';

interface UseCounterAnimationProps {
  end: number;
  start?: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
  decimals?: number;
  easing?: (t: number) => number;
}

// Easing functions for smooth animations
const easingFunctions = {
  linear: (t: number) => t,
  easeInOut: (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  easeOut: (t: number) => 1 - Math.pow(1 - t, 3),
  easeIn: (t: number) => t * t * t,
  bounce: (t: number) => {
    const n1 = 7.5625;
    const d1 = 2.75;
    if (t < 1 / d1) {
      return n1 * t * t;
    } else if (t < 2 / d1) {
      return n1 * (t -= 1.5 / d1) * t + 0.75;
    } else if (t < 2.5 / d1) {
      return n1 * (t -= 2.25 / d1) * t + 0.9375;
    } else {
      return n1 * (t -= 2.625 / d1) * t + 0.984375;
    }
  }
};

export function useCounterAnimation({
  end,
  start = 0,
  duration = 2000,
  delay = 0,
  prefix = '',
  suffix = '',
  separator = ',',
  decimals = 0,
  easing = easingFunctions.easeOut
}: UseCounterAnimationProps) {
  const [count, setCount] = useState(end); // Start with final value
  const [isAnimating, setIsAnimating] = useState(false);
  const [showStatic, setShowStatic] = useState(true); // Show static for 10 seconds
  const animationRef = useRef<number>();
  const startTimeRef = useRef<number>();
  const staticTimeoutRef = useRef<number>();

  const formatNumber = (num: number) => {
    const rounded = Number(num.toFixed(decimals));
    const parts = rounded.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return prefix + parts.join('.') + suffix;
  };

  const animate = (timestamp: number) => {
    if (!startTimeRef.current) {
      startTimeRef.current = timestamp + delay;
      if (delay > 0) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }
    }

    const elapsed = timestamp - startTimeRef.current;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easing(progress);
    
    const currentCount = start + (end - start) * easedProgress;
    setCount(currentCount);

    if (progress < 1) {
      animationRef.current = requestAnimationFrame(animate);
    } else {
      setIsAnimating(false);
    }
  };

  const startAnimation = () => {
    if (isAnimating || !showStatic) return;
    
    // Show static numbers for 10 seconds first
    staticTimeoutRef.current = window.setTimeout(() => {
      setShowStatic(false);
      setIsAnimating(true);
      setCount(start);
      startTimeRef.current = undefined;
      animationRef.current = requestAnimationFrame(animate);
    }, 10000); // 10 second delay
  };

  const stopAnimation = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    if (staticTimeoutRef.current) {
      clearTimeout(staticTimeoutRef.current);
    }
    setIsAnimating(false);
    setShowStatic(false);
    setCount(end);
  };

  const resetAnimation = () => {
    stopAnimation();
    setCount(end); // Reset to final value, not start
    setShowStatic(true);
  };

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (staticTimeoutRef.current) {
        clearTimeout(staticTimeoutRef.current);
      }
    };
  }, []);

  return {
    count,
    formattedCount: formatNumber(count),
    isAnimating,
    showStatic,
    startAnimation,
    stopAnimation,
    resetAnimation
  };
}

// Hook for intersection observer to trigger animations when in view
export function useInViewAnimation(
  threshold: number = 0.3,
  rootMargin: string = '0px'
) {
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsInView(true);
          setHasAnimated(true);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, [threshold, rootMargin, hasAnimated]);

  const resetAnimation = () => {
    setIsInView(false);
    setHasAnimated(false);
  };

  return { elementRef, isInView, hasAnimated, resetAnimation };
}