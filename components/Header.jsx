import Link from 'next/link'
import Image from 'next/image'
import BottomNavigation from './BottomNavigation'

export default function Header() {
  return (
     <div className="p-3 flex justify-between items-center bg-green-500 text-white">
     
    <div className="">
            <Image src="/baca-logo.png" width={35} height={35}  />
        <Link href="/">
          <a className="text-xl font-bold">BacaKomik</a>
        </Link>
       </div>
      <div className=""></div>
    </div>
      <BottomNavigation />


  )
}
