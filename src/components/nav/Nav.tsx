import React, { useState } from 'react';
import Image from 'next/image';
import style from '@/styles/navar.module.css';
import search from '@/assets/img/search.png';
import setting from '@/assets/img/setting.png';
import carrito from '@/assets/img/shopping-cart (3).png';
import Cart from '../Cart';

export default function Nav() {
  const [cartOpen, setCartOpen] = useState(false);

  const handleCartToggle = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <div>
      <nav className={style.navbarcontainer}>
        {/* Botón buscar */}
        <button>
          <Image src={search} alt="foto no disponible" className={style.buscador} />
        </button>

        {/* Botón filtros */}
        <button>
          <Image src={setting} alt="foto no disponible" className={style.menu} />
        </button>

        {/* Botón del carrito */}
        <button onClick={handleCartToggle}>
          <Image src={carrito} alt="Cart Icon" className={style.carrito} />
        </button>
      </nav>

      {/* Renderizar el componente Cart si cartOpen es true */}
      {cartOpen && <Cart />}
    </div>
  );
}
