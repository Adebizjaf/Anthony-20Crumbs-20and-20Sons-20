import { useState, useEffect } from 'react';

interface ScreenInfo {
  width: number;
  height: number;
  breakpoint: string;
  orientation: 'portrait' | 'landscape';
  deviceType: 'mobile' | 'tablet' | 'desktop';
}

export function useScreenInfo(): ScreenInfo {
  const [screenInfo, setScreenInfo] = useState<ScreenInfo>(() => {
    if (typeof window === 'undefined') {
      return {
        width: 0,
        height: 0,
        breakpoint: 'unknown',
        orientation: 'portrait',
        deviceType: 'desktop'
      };
    }

    const width = window.innerWidth;
    const height = window.innerHeight;
    
    return {
      width,
      height,
      breakpoint: getBreakpoint(width),
      orientation: width > height ? 'landscape' : 'portrait',
      deviceType: getDeviceType(width)
    };
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setScreenInfo({
        width,
        height,
        breakpoint: getBreakpoint(width),
        orientation: width > height ? 'landscape' : 'portrait',
        deviceType: getDeviceType(width)
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenInfo;
}

function getBreakpoint(width: number): string {
  if (width < 320) return 'xs-ultra';
  if (width < 375) return 'xs-small';
  if (width < 425) return 'xs';
  if (width < 480) return 'mobile-s';
  if (width < 640) return 'mobile-m';
  if (width < 768) return 'mobile-l';
  if (width < 1024) return 'tablet';
  if (width < 1280) return 'tablet-lg';
  if (width < 1440) return 'desktop';
  if (width < 1920) return 'desktop-lg';
  return 'desktop-xl';
}

function getDeviceType(width: number): 'mobile' | 'tablet' | 'desktop' {
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
}

// Development component to show current screen info
export function ResponsiveDebug() {
  const screenInfo = useScreenInfo();

  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-black/80 text-white px-3 py-2 rounded-lg text-xs font-mono backdrop-blur-sm">
      <div>{screenInfo.width}×{screenInfo.height}</div>
      <div>{screenInfo.breakpoint}</div>
      <div>{screenInfo.deviceType} • {screenInfo.orientation}</div>
    </div>
  );
}