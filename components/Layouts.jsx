import Head from 'next/head'
import BottomNavigation from './BottomNavigation'
import Contents from './Contents'
import Footer from './Footer'
import Header from './Header'

export default function Layouts({ children, title }) {
  const appName = 'BacaKomik'
  return (
    <div className="text-slate-800">
      <Head>
        <title>{title ? `${appName} - ${title}` : appName}</title>
        
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        
      <meta name="description" content={description} />
        
      <meta key="og_type" property="og:type" content={ogType} />
         
      <meta key="og_title" property="og:title" content={title} />
      
      <meta key="og_description" property="og:description" content={description} />
      
      <meta key="og_locale" property="og:locale" content="en_IE" />
      
      <meta key="og_site_name" property="og:site_name" content={siteName} />
      
      <meta key="og_url" property="og:url" content={canonical ?? DOMAIN} />
      
      <meta key="og_site_name" property="og:site_name" content={siteName} />
      
      <meta
        key="og_image"
        property="og:image"
        content={ogImage ?? DEFAULT_OG_IMAGE}
      />
      <meta
        key="og_image:alt"
        property="og:image:alt"
        content={`${title} | ${siteName}`}
      />
      <meta key="og_image:width" property="og:image:width" content="1200" />
      <meta key="og_image:height" property="og:image:height" content="630" />

      <meta name="robots" content="index,follow" />

      <meta
        key="twitter:card"
        name="twitter:card"
        content="summary_large_image"
      />
      <meta 
        key="twitter:site" 
        name="twitter:site" 
        content={twitterHandle} 
      />
      <meta
        key="twitter:creator"
        name="twitter:creator"
        content={twitterHandle}
      />
      <meta 
        key="twitter:title" 
        property="twitter:title" 
        content={title} 
      />
      <meta
        key="twitter:description"
        property="twitter:description"
        content={description}
      />

     
        <link rel="icon" href="/favicon.ico" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <script async="async" data-cfasync="false" src="//poplarwindowsmasculine.com/60445a6b144e3cc5cf8cae41c2d85d9b/invoke.js"></script>
<div id="container-60445a6b144e3cc5cf8cae41c2d85d9b"></div>
      <Contents body={children} />
     <script type='text/javascript' src='//poplarwindowsmasculine.com/ec/7a/7e/ec7a7e7400b93f9a296d2062610ec4a2.js'></script>
     <BottomNavigation />
       <Footer />
    </div>
  )
}
