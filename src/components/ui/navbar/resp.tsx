import React from 'react'

const resp = () => {
  return (
    <div
      className={` ${
        !menu
          ? 'hidden'
          : 'flex flex-col  justify-around py-12 px-8  gap-20 min-h-screen'
      }`}
    >
      <div className={`flex flex-col justify-center items-center gap-4 `}>
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
  )
}

export default resp
