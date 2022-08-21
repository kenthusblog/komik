import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
   <div className="sticky inset-x-0 top-0 text-white">
    <div class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
     <div className="p-3 flex justify-between items-center text-white">
       <div className="">
        <Link href="/">
          <a className="text-xl font-bold inline-block duration-300">BacaKomik</a>
        </Link>
      </div>
    </div>
      <div className=""></div>
    </div>
    </div>
  )
}
