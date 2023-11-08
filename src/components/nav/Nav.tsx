import React from 'react'
import Image from 'next/image'
import style from '@/styles/navar.module.css'
import search from '@/assets/img/search.png'
import setting from '@/assets/img/setting.png'


export default function Nav() {

    

  return (
      <div>
          <nav className={style.navbarcontainer}>
          {/*boton buscar*/}
          
          <button>
              <Image src={ search } alt='foto no disponible' className={style.buscador} />
          </button>

          {/*boton filtros*/}

          <button>
              <Image src={ setting } alt='foto no disponible' className={style.menu}/>
              </button>
            </nav>
    </div>
  )
}
