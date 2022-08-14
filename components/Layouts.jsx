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
         <meta property="og:image" content="/baca-komik.jpg"/>

         <meta property="og:title" content="Baca Komik Online Terlengkap"/>

         <meta property="og:description" content="Baca Komik Online Terlengkap dan Terupdate"/>

         <meta property="og:image:width" content="1200"/>

         <meta property="og:image:height" content="630"/>

     
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
