import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
     <div className="p-3 flex justify-between items-center bg-green-500 text-white">
      <div className="">
         <Link href="/">
          <a className="text-xl"> <Image src="/baca-logo.png" width={25} height={25} />
         BacaKomik</a>
        </Link>
       </div>
      </div>
   </div>
  )
}
