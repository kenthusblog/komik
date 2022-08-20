import Link from 'next/link'
import Image from 'next/image'
import BottomNavigation from './BottomNavigation'

export default function Header() {
  return (
    <div class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
     <div className="p-3 flex justify-between items-center text-white">
       <div className="">
        <Link href="/">
          <a className="text-2xl font-bold">BacaKomik</a>
        </Link>
      </div>
    </div>
      <div className=""></div>
         <BottomNavigation />

    </div>
  )
}
