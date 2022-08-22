import Link from 'next/link'

export default function Header() {
  return (
    <div class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
        <div className="p-3 flex justify-between items-center text-white">
       <div className="">
        <Link href="/">
           <a className="text-xl font-bold inline-block duration-300">
    <span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
    <span class="relative text-white">BacaKomik</span></span></a>
        </Link>
    </div>

    </div>
    </div>
  )
}
