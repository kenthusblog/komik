import Link from 'next/link'

export default function Header() {
  return (
    <div class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
        <div className="p-3 flex justify-between items-center text-white">
       <div className="">
                <img src="/baca-logo.png" />
        <Link href="/">
           <a className="text-xl font-bold inline-block duration-300">
    <span class="block absolute -inset-1 -skew-y-3 bg-pink-500" aria-hidden="true"></span>
    <span class="relative text-white">BacaKomik</span></span></a>
        </Link>
    </div>

    </div>
    </div>
  )
}
