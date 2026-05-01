import Script from 'next/script'

export default function NhRetargetLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {/* ── 노형점 전용 GTM (GTM-TGKR77FL) ── */}
      <Script id="gtm-nh" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TGKR77FL');
        `}
      </Script>

      {/* ── 노형점 전용 Meta Pixel (891686733924318) ── */}
      <Script id="meta-pixel-nh" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '891686733924318');
          fbq('track', 'PageView');
        `}
      </Script>

      <noscript>
        <iframe 
          src="https://www.googletagmanager.com/ns.html?id=GTM-TGKR77FL"
          height="0" 
          width="0" 
          style={{ display: 'none', visibility: 'hidden' }}
        />
      </noscript>

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=891686733924318&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>

      {children}
    </>
  )
}
