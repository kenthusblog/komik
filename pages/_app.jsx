import Aos from 'aos'
import { useEffect } from 'react'

import 'aos/dist/aos.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps, canonical }) {
  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <>
      <Seo canonical={canonical} />
      <Component {...pageProps} canonical={canonical} />
    </>
  );
}

export default MyApp
