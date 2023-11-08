import React from 'react'
import Nav from '@/components/nav/Nav'
import Link from 'next/link'
import style from "@/styles/reglog.module.css"
function index() {
    
  return (
    <>
    <Nav />
    <section className={style.container}>
        <h1 className={style.title}>Registrate</h1>
        <form method='post' className={style.formcontain}>
            {/* Form Group */}
            <div className={style.formgroup}>
                <label htmlFor="fullname">
                    Nombre y Apellido
                </label>
                <input type="text" placeholder='Nombre y Apellido' id='fullname' />
            </div>
            {/* Fin Form Group */}
            {/* Form Group */}
            <div className={style.formgroup}>
                <label htmlFor="email">
                    Email
                </label>
                <input type="text" placeholder='ejemplo@ejemplo.com' id='email' />
            </div>
            {/* Fin Form Group */}
            {/* Form Group */}
            <div className={style.formgroup}>
                <label htmlFor="password">
                    Contraseña
                </label>
                <input type="text" placeholder='*******' id='password' />
            </div>
            {/* Fin Form Group */}

            <button type='submit' className={style.btn}>Resgitrar</button>
            <Link href={'/auth/login'}className={style.tengocuenta}>Ya tengo una cuenta</Link>
        </form>
    </section>
    </>
  )
}

export default index