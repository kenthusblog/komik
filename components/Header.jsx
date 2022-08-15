import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
     <div className="p-3 flex justify-between items-center bg-green-500 text-white">
     <Image src="/baca-logo.png" width={60} height={60}  />
    <div className="">
        <Link href="/">
          <a className="text-xl font-bold">BacaKomik</a>
        </Link>
      </div>
      <div className=""></div>
    </div>
  )
}
