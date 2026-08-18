import { useState, useEffect } from 'react';
import { siteConfig } from '../constants/site';

export function useCurrentTime() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const options: Intl.DateTimeFormatOptions = {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
          timeZone: siteConfig.timezone
        };
        const formatter = new Intl.DateTimeFormat('en-US', options);
        setTime(formatter.format(new Date()));
      } catch (error) {
        // Fallback to local system time if configured timezone throws
        setTime(new Date().toLocaleTimeString('en-US'));
      }
    };

    updateTime();
    const timerId = setInterval(updateTime, 1000);

    return () => clearInterval(timerId);
  }, []);

  return {
    time,
    utcOffset: siteConfig.utcOffset
  };
}
