import Link from 'next/link'

export default function Header() {
  return (
    <div className="p-3 flex justify-between items-center bg-green-500 text-white">
     
    <img src="baca-logo.png alt="describe the image here"/>
   
      <div className="">
        <Link href="/">
          <a className="text-xl font-bold">BacaKomik</a>
        </Link>
      </div>
      <div className=""></div>
    </div>
  )
}
