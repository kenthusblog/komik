import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <div class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
     <div className="p-3 flex justify-between items-center text-white">
       <div className="">
        <Link href="/">
          <a className={`px-3 pt-2 pb-1 sm:p-3 text-center inline-block text-sm duration-300 ${
                active === path ? 'bg-gradient-to-r' : ''
              }`}>BacaKomik</a>
        </Link>
      </div>
    </div>
      <div className=""></div>
    </div>
  )
}
