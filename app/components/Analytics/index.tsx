'use client';

import Script from 'next/script';

// export function Analytics() {
//   return (
//     <>
//       <Script
//         async
//         src=""
//         crossOrigin="anonymous"
//         strategy="afterInteractive"
//         onLoad={() => {
//           console.log('Ads script has loaded');
//         }}
//         onError={() => {
//           console.log('Ads script failed to load');
//         }}
//       />
//     </>
//   );
// }

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
