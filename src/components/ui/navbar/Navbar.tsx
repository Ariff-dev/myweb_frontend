'use client'

import Image from 'next/image'
import Profile from '../../../assets/images/toji.jpeg'

import {
  AiOutlineInstagram,
  AiFillLinkedin,
  AiOutlineUser,
  AiOutlineCoffee,
  AiOutlineSend,
  AiOutlineMenuFold,
  AiOutlineMenuUnfold,
} from 'react-icons/ai'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

const pages = [
  {
    title: 'Sobre Mi',
    path: '/',
    icon: <AiOutlineUser />,
  },
  {
    title: 'Blog',
    path: '/blog',
    icon: <AiOutlineCoffee />,
  },
]

const socialMedia = [
  {
    socialName: 'Instagram',
    icon: <AiOutlineInstagram />,
  },
  {
    socialName: 'Linkedin',
    icon: <AiFillLinkedin />, // Cambia 'Icon' a 'icon' y usa el componente de ícono de React
  },
]

const Navbar = () => {
  const pathURL = usePathname()
  const [menu, setMenu] = useState(false)

  const handleActive = () => {
    setMenu(!menu)
  }

  return (
    <div className='bg-component-navbar-background fixed min-h-screen w-full'>
      <nav>
        <div>
          {!menu ? (
            <button onClick={handleActive}>
              <AiOutlineMenuUnfold className='text-2xl text-white m-4' />
            </button>
          ) : (
            <button onClick={handleActive}>
              <AiOutlineMenuFold className='text-2xl text-white m-4' />
            </button>
          )}
        </div>
        <div
          className={` ${
            !menu
              ? 'hidden'
              : 'flex flex-col  justify-around py-12 px-8  gap-20 min-h-screen'
          }`}
        >
          <div className='flex flex-col justify-center items-center gap-4'>
            <div className='flex flex-col justify-center items-center'>
              <Image
                src={Profile}
                alt='Yo'
                width={100}
                height={100}
                className='rounded-full'
              />
              <p className='text-3xl font-bold text-white'>Ariff Martínez</p>
              <p className='text-white'>Software Engineering Student</p>
            </div>
            <ul className='text-secondary-color flex gap-4'>
              {socialMedia.map((social) => (
                <li
                  key={social.socialName}
                  className='p-2 border-2 border-border-color rounded-full'
                >
                  <span className=' text-2xl '>{social.icon}</span>
                </li>
              ))}
            </ul>
            <div className='w-5/6  border border-border-color ' />
          </div>
          <div>
            <ul className='flex flex-col gap-4 items-center justify-start'>
              {pages.map((page) => (
                <li
                  key={page.title}
                  className={`text-white text-2xl  w-3/4 p-2 rounded-lg hover:transition-all  hover:bg-primary-color ${
                    page.path == pathURL ? 'bg-primary-color' : ''
                  }`}
                >
                  <Link href={page.path} className='flex items-center gap-2'>
                    <span>{page.icon}</span>
                    <p>{page.title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <button className='flex items-center text-white bg-primary-color p-4 w-full justify-center gap-2 text-xl rounded-lg'>
              <span>
                <AiOutlineSend />
              </span>
              <p>Contacto</p>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
