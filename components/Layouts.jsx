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
        
         <meta name="keywords" content="komik online, baca komik" />
        
         <meta property="og:image" content="/baca-komik.jpg"/>

         <meta key="og_title" property="og:title" content={title ? `${appName} - ${title}` : appName} />

         <meta property="og:description" content="Baca Komik Online Terlengkap dan Terupdate"/>
                
         <meta property="og:image:width" content="1200"/>

         <meta property="og:image:height" content="630"/>
         
        <meta name="robots" content="follow, index" />
     
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


<Footer />
    </div>
  )
}
