import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <div className="p-3 flex justify-between items-center bg-green-500 text-white">
        <img class="w-16 md:w-32 lg:w-48" src="baca-logo.png">

      <div className="">
        <Link href="/">
          <a className="text-xl font-bold">BacaKomik</a>
        </Link>
      </div>
      <div className=""></div>
    </div>
  )
}
