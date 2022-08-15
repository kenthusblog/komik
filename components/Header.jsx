import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <div className="p-3 flex justify-between items-center bg-green-500 text-white"  class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
       <div className="">
        <Link href="/">
          <a className="text-xl font-bold">BacaKomik</a>
        </Link>
      </div>
      <div className=""></div>
    </div>
  )
}
