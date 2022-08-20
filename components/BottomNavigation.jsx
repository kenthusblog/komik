import Link from 'next/link'

import {
  ClockIcon,
  FireIcon,
  HomeIcon,
  SearchCircleIcon
} from '@heroicons/react/solid'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const navs = [
  {
    title: 'Home',
    path: ['/', '/details', '/read'],
    icon: <HomeIcon className="w-6" />
  },
  {
    title: 'Populer',
    path: ['/popular'],
    icon: <FireIcon className="w-6" />
  },
  {
    title: 'Update',
    path: ['/update'],
    icon: <ClockIcon className="w-6" />
  },
  {
    title: 'Search',
    path: ['/search'],
    icon: <SearchCircleIcon className="w-6" />
  }
]

export default function BottomNavigation() {
  const router = useRouter()
  const [active, setActive] = useState(null)
  const firstPath = '/' + router.asPath.split('/')[1].split('?')[0]

  useEffect(() => {
    setActive(navs.find(({ path }) => path.includes(firstPath)).path)
  }, [])

  return (
    <div className="sticky inset-x-0 bottom-0 text-white">
    <div class="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ...">
      <div className="grid grid-cols-4">
        {navs.map(({ title, path, icon }, i) => (
        <Link href="/">
            <a className="text-xl font-bold">BacaKomik</a>
          </Link>
        ))}
      </div>
      </div>
    </div>
  )
}
