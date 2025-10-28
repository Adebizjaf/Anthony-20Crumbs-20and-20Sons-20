import { useEffect, ReactNode } from 'react';
import { useCounterAnimation, useInViewAnimation } from '@/hooks/use-counter-animation';
import { cn } from '@/lib/utils';

interface AnimatedCounterProps {
  end: number;
  start?: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
  separator?: string;
  decimals?: number;
  className?: string;
  children?: ReactNode;
  triggerOnView?: boolean;
  threshold?: number;
  easing?: 'linear' | 'easeInOut' | 'easeOut' | 'easeIn' | 'bounce';
}

const easingMap = {
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

export function AnimatedCounter({
  end,
  start = 0,
  duration = 2000,
  delay = 0,
  prefix = '',
  suffix = '',
  separator = ',',
  decimals = 0,
  className,
  children,
  triggerOnView = true,
  threshold = 0.3,
  easing = 'easeOut'
}: AnimatedCounterProps) {
  const { elementRef, isInView } = useInViewAnimation(threshold);
  
  const { formattedCount, startAnimation } = useCounterAnimation({
    end,
    start,
    duration,
    delay,
    prefix,
    suffix,
    separator,
    decimals,
    easing: easingMap[easing]
  });

  useEffect(() => {
    if (triggerOnView && isInView) {
      startAnimation();
    } else if (!triggerOnView) {
      startAnimation();
    }
  }, [isInView, triggerOnView, startAnimation]);

  return (
    <div ref={elementRef} className={className}>
      <span className="inline-block">
        {formattedCount}
      </span>
      {children}
    </div>
  );
}

// Specialized component for stats with extra animations
export function AnimatedStatCard({
  value,
  label,
  icon,
  delay = 0,
  duration = 2000,
  className,
}: {
  value: string;
  label: string;
  icon?: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const { elementRef, isInView } = useInViewAnimation(0.3);
  
  // Extract number from value string
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const prefix = value.match(/^[^0-9.]*/)?.[0] || '';
  const suffix = value.match(/[^0-9.]*$/)?.[0] || '';

  return (
    <div 
      ref={elementRef}
      className={cn(
        "text-center transform transition-all duration-700 ease-out",
        isInView 
          ? "translate-y-0 opacity-100 scale-100" 
          : "translate-y-8 opacity-0 scale-95",
        className
      )}
      style={{ 
        transitionDelay: `${delay}ms`,
      }}
    >
      {icon && (
        <div className={cn(
          "flex justify-center mb-3 transition-all duration-500",
          isInView ? "animate-bounce" : ""
        )}>
          {icon}
        </div>
      )}
      
      <div className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-1 xs:mb-2 relative">
        <AnimatedCounter
          end={numericValue}
          prefix={prefix}
          suffix={suffix}
          duration={duration}
          delay={delay + 200}
          easing="easeOut"
          triggerOnView={true}
          className="relative"
        />
      </div>
      
      <p className={cn(
        "text-muted-foreground text-xs xs:text-sm sm:text-base px-1 transition-all duration-500",
        isInView ? "opacity-100" : "opacity-0"
      )}
      style={{ 
        transitionDelay: `${delay + 400}ms`,
      }}>
        {label}
      </p>
    </div>
  );
}

// Component for portfolio metrics with advanced animations
export function AnimatedMetricCard({
  value,
  label,
  icon: IconComponent,
  delay = 0,
  className,
}: {
  value: string;
  label: string;
  icon?: React.ComponentType<{ className?: string }>;
  delay?: number;
  className?: string;
}) {
  const { elementRef, isInView } = useInViewAnimation(0.2);
  
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const prefix = value.match(/^[^0-9.]*/)?.[0] || '';
  const suffix = value.match(/[^0-9.]*$/)?.[0] || '';

  return (
    <div
      ref={elementRef}
      className={cn(
        "bg-card dark:bg-card rounded-lg p-6 xs:p-8 border border-border text-center shadow-sm hover:shadow-md transition-all duration-500 transform",
        isInView 
          ? "translate-y-0 opacity-100 scale-100 rotate-0" 
          : "translate-y-12 opacity-0 scale-90 rotate-1",
        className
      )}
      style={{ 
        transitionDelay: `${delay}ms`,
      }}
    >
      <div className="flex justify-center mb-4">
        <div className={cn(
          "w-12 h-12 xs:w-16 xs:h-16 bg-accent/10 dark:bg-accent/20 rounded-full flex items-center justify-center transition-all duration-700 transform",
          isInView 
            ? "scale-100 rotate-0" 
            : "scale-0 rotate-180"
        )}
        style={{ 
          transitionDelay: `${delay + 100}ms`,
        }}>
          {IconComponent && (
            <IconComponent className="w-6 h-6 xs:w-8 xs:h-8 text-accent" />
          )}
        </div>
      </div>
      
      <p className="text-2xl xs:text-3xl sm:text-4xl font-bold mb-2 relative">
        <AnimatedCounter
          end={numericValue}
          prefix={prefix}
          suffix={suffix}
          duration={2500}
          delay={delay + 300}
          easing="bounce"
          triggerOnView={true}
          className="relative"
        />
      </p>
      
      <p className={cn(
        "text-muted-foreground text-sm xs:text-base transition-all duration-500",
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      )}
      style={{ 
        transitionDelay: `${delay + 600}ms`,
      }}>
        {label}
      </p>
    </div>
  );
}

// Animated sector allocation bar component
interface AnimatedSectorBarProps {
  name: string;
  percentage: number;
  companies: number;
  avgReturn: number;
  delay?: number;
}

export function AnimatedSectorBar({
  name,
  percentage,
  companies,
  avgReturn,
  delay = 0
}: AnimatedSectorBarProps) {
  const { elementRef, isInView } = useInViewAnimation(0.3);

  return (
    <div ref={elementRef} className="group">
      <div className="flex items-center justify-between mb-2">
        <p className="font-semibold text-foreground text-sm transition-all duration-300 group-hover:text-accent">
          {name}
        </p>
        <div className="flex items-center gap-2">
          <AnimatedCounter
            end={percentage}
            suffix="%"
            duration={2000}
            delay={delay}
            easing="easeOut"
            triggerOnView={true}
            className="text-sm font-bold text-accent"
          />
        </div>
      </div>
      
      <div className="relative w-full bg-border rounded-full h-3 overflow-hidden group-hover:h-4 transition-all duration-300">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-1000 ease-out bg-gradient-to-r from-accent to-accent/80",
            isInView ? "animate-in slide-in-from-left-full" : "w-0"
          )}
          style={{ 
            width: isInView ? `${percentage}%` : '0%',
            transitionDelay: `${delay}ms`,
            animationDelay: `${delay}ms`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <AnimatedCounter
            end={companies}
            duration={1500}
            delay={delay + 200}
            easing="easeOut"
            triggerOnView={true}
            className="font-medium"
          />
          <span>companies</span>
        </span>
        <span className="flex items-center gap-1">
          <span>Avg IRR:</span>
          <AnimatedCounter
            end={avgReturn}
            suffix="%"
            decimals={1}
            duration={1800}
            delay={delay + 400}
            easing="easeOut"
            triggerOnView={true}
            className="font-medium text-accent"
          />
        </span>
      </div>
    </div>
  );
}