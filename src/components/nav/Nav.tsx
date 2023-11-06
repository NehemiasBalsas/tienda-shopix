import React from 'react'
import Image from 'next/image'
import search from '@/assets/img/search.png'
import setting from '@/assets/img/setting.png'


export default function Nav() {

    

  return (
      <div>
          <nav className='h-12 flex justify-end'>
          {/*boton buscar*/}
          
          <button>
              <Image src={ search } alt='foto no disponible' className='w-6 mr-4 mt-3' />
          </button>

          {/*boton filtros*/}

          <button>
              <Image src={ setting } alt='foto no disponible' className='w-8 mr-10 mt-3'/>
              </button>
            </nav>
    </div>
  )
}
