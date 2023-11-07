import { useEffect, useState } from 'react'
import Image from 'next/image';
import Nav from '@/components/nav/Nav';
import css from '@/styles/productos.module.css'

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
    image: string
    
  }
  
  return (
    <div className={css.main} >
      <Nav />
      <ul>
        <div className={css.ul}>

        {productos.map((producto: Producto) => (
        
        <li className={css.li} key={producto.id}>
      
            <div className={css.contenedorImagen}>
            <Image src={producto.image} alt='foto no disponible' width={400} height={400} className={css.imagen} />
            </div>
            <div className={css.texto}>
              <h2 className={css.title}>{producto.title}</h2>
              <span className={css.price}>{producto.price}</span>
            </div>
          </li>
      ))}
        </div>
      </ul>
    </div>
  )
}

