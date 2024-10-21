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

  console.log(menu)

  return (
    <div className=' border-b-2 border-border-color/20 lg:border-0 lg:min-h-screen w-full  lg:w-2/6'>
      <button className='p-4 lg:p-0 lg:hidden' onClick={handleActive}>
        <AiOutlineMenuFold className='text-white' size={24} />
      </button>
      <nav
        className={`${
          menu
            ? 'fixed top-0  overflow-y-scroll  lg:relative w-full  bg-component-navbar-background  lg:flex'
            : 'hidden lg:block bg-component-navbar-background'
        }`}
      >
        <button onClick={handleActive} className='absolute p-4 lg:hidden'>
          <AiOutlineMenuUnfold className='text-white' size={24} />
        </button>
        <div className='flex flex-col items-center justify-around w-full min-h-screen'>
          <div className='flex flex-col items-center justify-center w-full gap-4'>
            <div className='flex items-center flex-col '>
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
            <ul className='text-secondary-color flex gap-4 items-center justify-center'>
              {socialMedia.map((social) => (
                <li
                  key={social.socialName}
                  className='p-2 border-2 border-border-color rounded-full'
                >
                  <span className=' text-2xl '>{social.icon}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className='w-full '>
            <ul className='flex flex-col gap-4 items-center justify-start w-full  '>
              {pages.map((page) => (
                <li
                  key={page.title}
                  className={`text-white text-2xl  w-3/5 p-2 rounded-lg hover:transition-all  hover:bg-primary-color  ${
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
          <div className='p-2  bg-primary-color w-3/4 rounded-md text-cente flex justify-center items-centerr'>
            <button className='flex items-center gap-2 justify-center'>
              <span>
                <AiOutlineSend />
              </span>
              <p className='text-2xl'>Contacto</p>
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
