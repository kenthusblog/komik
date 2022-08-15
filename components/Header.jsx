import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
     <div className="p-3 flex justify-between items-center bg-green-500 text-white">
     
    <div className="">
            <Image src="/baca-logo.png" width={35} height={35}  />
        <Link href="/">
          <img
            src="/baca-logo.png"
            alt={title}
            className="w-full"
            style={{ minHeight: '150px' }}
            onError={() =>
              setSrc('https://dummyimage.com/600x400/86efad/22c55e')
            }
          />
          <a className="text-xl font-bold">BacaKomik</a>
        </Link>
       </div>
      <div className=""></div>
    </div>
  )
}
