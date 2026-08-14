import { Suspense } from "react";
import Script from "next/script";
import { GoogleTagManager } from "@next/third-parties/google";

import MetaPageViewTracker from "@/components/analytics/MetaPageViewTracker";

const gtmId = process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID?.trim();
const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim();

const validGtmId = gtmId && /^GTM-[A-Z0-9]+$/i.test(gtmId) ? gtmId : null;
const validMetaPixelId =
  metaPixelId && /^\d+$/.test(metaPixelId) ? metaPixelId : null;

export default function Analytics() {
  return (
    <>
      {validGtmId ? <GoogleTagManager gtmId={validGtmId} /> : null}
      {validMetaPixelId ? (
        <>
          <Script id="meta-pixel" strategy="afterInteractive">
            {`
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${validMetaPixelId}');
              fbq('track', 'PageView');
            `}
          </Script>
          <Suspense fallback={null}>
            <MetaPageViewTracker />
          </Suspense>
        </>
      ) : null}
    </>
  );
}
