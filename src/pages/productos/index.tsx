import { useEffect, useState } from 'react'
import Image from 'next/image';
import Nav from '@/components/nav/Nav';
import css from '@/styles/productos.module.css'
import Link from 'next/link';
import BotonCategory from '@/components/BotonCategory';

export default function Index() {
  const [productos, setProductos] = useState([])

  useEffect(() => {
    async function llamarDatos() {
      const res = await fetch("https://fakestoreapi.com/products")
      const datos = await res.json()
      setProductos(datos)
    }

    llamarDatos()
  }, [])

  type Producto = {
    id: number;
    title: string;
    price: number;
    image: string;
  }

  return (
    <>
      <Nav />
      <BotonCategory />
      <div className={css.gridcontainer}>
        {productos.map((producto: Producto) => (
          <article className={css.cardcontain} key={producto.id}>
            <Image
              src={producto.image}
              alt={`Foto de ${producto.title}`}
              width={200}
              height={200}
              layout='resposive'
              className={css.imagedit}
            />

            <div className={css.textcontain}>
              <h2 className={css.titulo}>{producto.title}</h2>
              <p className={css.price}>$ {producto.price}</p>
              <Link className={css.btn} href={`./productos/lista/${producto.id}`}>
                Ver más
              </Link>
            </div>
          </article>
        ))}
      </div>

    </>
  )
}
