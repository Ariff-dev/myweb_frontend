import Image from 'next/image'
import {
  AiOutlineMenu,
  AiOutlineAppstore,
  AiOutlineCoffee,
} from 'react-icons/ai'

import Me from '../../assets/images/yo.png'

const previewSkills = [
  {
    number: '2',
    title: 'Años de experiencia',
  },
  {
    number: '12',
    title: 'Proyectos terminados',
  },
  {
    number: '6',
    title: 'Freelance Clients',
  },
]

function AboutPage() {
  return (
    <div className='container'>
      <section className='flex flex-col gap-6 '>
        <div className='flex flex-col gap-8 border-b-2 py-6 p-8 border-border-color/30'>
          <div className='flex flex-col gap-2'>
            <p className='text-xl font-light'>HOLA, SOY ARIFF</p>
            <h2 className='text-5xl font-bold text-primary-color'>
              Desarrollador
            </h2>
            <p>
              Soy un estudiante de Ingieniería de Software, especializado en
              aplicaciones escalables.
            </p>
            <p>
              Explora mi{' '}
              <span className='text-primary-color font-bold'>blog,</span>
              <span className='text-primary-color font-bold'>
                portafolio de proyectos
              </span>{' '}
              y{' '}
              <span className='text-primary-color font-bold'>
                mi resumen online
              </span>
            </p>
          </div>
          <div className='flex gap-4'>
            <button className='flex items-center gap-2 bg-primary-color p-2 rounded-full px-4'>
              <span>
                <AiOutlineAppstore />
              </span>
              <p>Ver Portafolio</p>
            </button>
            <button className='flex items-center gap-2 bg-three-color  p-2 rounded-full px-4'>
              <span>
                <AiOutlineCoffee />
              </span>
              <p>Ver Resumen</p>
            </button>
          </div>
          <div className='flex justify-center items-centers w-full'>
            <Image src={Me} width={300} height={300} alt='Me' />
          </div>
          <div>
            <ul className='flex flex-col gap-4'>
              {previewSkills.map((skill) => (
                <li className='flex items-center gap-2' key={skill.title}>
                  <p className='text-5xl text-primary-color font-bold'>
                    {skill.number}
                  </p>
                  <span className='text-3xl  font-light'>|</span>
                  <p>{skill.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
