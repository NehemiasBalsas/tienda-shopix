"use client"
import React, { FormEvent, useRef } from 'react'
import { useRouter } from 'next/navigation'
import Nav from '@/components/nav/Nav'
import Link from 'next/link'
import style from "@/styles/reglog.module.css"

function index() {
  return (
    <>
    <Nav />
    <section className={style.container}>
        <h1 className={style.title}>Iniciar Sesion</h1>
        <form method='post' className={style.formcontain}>
            {/* Form Group */}
            <div className={style.formgroup}>
                <label htmlFor="email">
                    Email
                </label>
                <input type="email" inputMode='email' placeholder='ejemplo@ejemplo.com' id='email' />
            </div>
            {/* Fin Form Group */}
            {/* Form Group */}
            <div className={style.formgroup}>
                <label htmlFor="password">
                    Contraseña
                </label>
                <input type="password" placeholder='*******' id='password'/>
            </div>
            {/* Fin Form Group */}

            <button type='submit' className={style.btn}>Resgitrar</button>
            <Link href={'/auth/register'}className={style.tengocuenta}>Crear cuenta</Link>
        </form>
    </section>
    </>
  )
}

export default index