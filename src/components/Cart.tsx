import React, { useContext } from 'react';
import { CartContext } from '@/context/CartContext';
import Cartcss from '@/styles/Cart.module.css';
import Image from 'next/image';
import basura from '@/assets/img/recycle-bin (2).png'
import más from '@/assets/img/button.png'
import button from '@/assets/img/button.png';

type Producto = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
  cantidad: number;
}


export default function Cart() {
    //@ts-ignore
    const { cart } = useContext(CartContext);
    
  
    if (cart.products.length === 0) {
        return <p className={Cartcss.cart}>El carrito está vacío.</p>;
    }
  
    
  
  
  return (
    <div className={Cartcss.cart}>
      <h2>Carrito de compras</h2>
      <ul>
        {cart.products.map((producto: Producto ) => (
            <li className={Cartcss.li} key={producto.id}>

                <Image className={Cartcss.image} src={ producto.image } alt='foto no disponible' width={15} height={15} />
                
                <h2>{producto.title}</h2>
                
                <h3>{producto.price}</h3>
                
               <p>Cantidad:{ } </p>

                <button className={Cartcss.button}>
                <Image src={más} alt='foto no disponible'/>
                </button>

                <button className={Cartcss.button}>
                <Image src={basura} alt='foto no disponible'/>
                </button>
          </li>
        ))}
      </ul>
      <p>Total: ${cart.totalPrice}</p>
    </div>
  );
}
