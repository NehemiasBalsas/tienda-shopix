import React from 'react'
import style from '@/styles/index.module.css'
import Image from 'next/image'
import BotonCategory from './BotonCategory'

function Inicio() {
  return (
    <>
    <section className={style.container}>
        <div className={style.textcontain}>
            <h1>Tenemos todo lo que buscas</h1>
            <p>Encontra lo mejor al mejor precio!</p>
        </div>
        <BotonCategory />
        <div className={style.imagecard}>
            <Image src="/images/stylewoman.webp" alt='banner ropa'
            width={100}
            height={100}
            layout='resposive'
            className={style.banner}
            />
            <h2>Todo lo nuevo lo tenemos aca!</h2>
        </div>
        <div className={style.imagecard}>
            <Image src="/images/stylemen.webp" alt='banner ropa'
            width={100}
            height={100}
            layout='resposive'
            className={style.banner}
            />
            <h2>Todo lo nuevo lo tenemos aca!</h2>
        </div>
        <h2 className={style.title}>Productos Gaming</h2>
        <p className={style.subtitle}>Contamos con una gran variedad de productos Gaming</p>
        <Image src="/images/gaming-image.webp" alt='Imagen Gaming' width={100} height={100} className={style.imagegame}/>
    </section>
    </>
  )
}

export default Inicio