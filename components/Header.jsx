import Link from 'next/link'

export default function Header() {
  return (
    <div className="p-3 flex justify-between items-center bg-green-500 text-white">
      <div className="">
        <Link href="/">
          <a className="text-xl font-bold">BacaKomik</a>
        </Link>
      </div>
      <div className="">
    <li className={`mx-3 ${activeNavLink("/about")}`}>
         <Link to="/about">
         <i className="fab fa-angular text-lg px-1"></i> Tentang
          </Link>
          </li></div>
    </div>
  )
}
