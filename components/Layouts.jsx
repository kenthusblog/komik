import Head from 'next/head'
import BottomNavigation from './BottomNavigation'
import Contents from './Contents'
import Footer from './Footer'
import Header from './Header'

export default function Layouts({ children, title }) {
  const appName = 'BacaKomik Online'
  return (
    <div className="text-slate-800">
      <Head>
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <meta charSet="utf-8" />
       <meta name="description" content={description}></meta>

       <meta property="og:title" content={pageTitle} key="ogtitle" />

       <meta property="og:description" content={description} key="ogdesc" />
              
        <title>{title ? `${appName} - ${title}` : appName}</title>
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
      <Contents body={children} />
      
      <BottomNavigation />
      <Footer />
    </div>
  )
}
