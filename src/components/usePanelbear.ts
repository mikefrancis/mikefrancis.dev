import * as Panelbear from '@panelbear/panelbear-js';
import { useRouter } from 'next/router';
import * as React from 'react';

export const usePanelbear = () => {
  const router = useRouter();

  React.useEffect(() => {
    Panelbear.load(process.env.NEXT_PUBLIC_PANELBEAR_SITE_ID as string);

    // Trigger initial page view
    Panelbear.trackPageview();

    // Add on route change handler for client-side navigation
    const handleRouteChange = () => Panelbear.trackPageview();
    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);
};
