import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
    <div className="p-3 flex justify-between items-center bg-green-500 text-white">
   <div>
  <Image src="/baca-logo.png" width={50} height={50} layout="responsive" />
</div>  
   
      <div className="">
        <Link href="/">
          <a className="text-xl font-bold">BacaKomik</a>
        </Link>
      </div>
      <div className=""></div>
    </div>
  )
}
