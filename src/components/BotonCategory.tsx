import { useContext } from 'react';
import style from "@/styles/botoncategory.module.css"

function BotonCategory() {

  return (
    <>
      <div className={style.botoncontainers}>
        <button className={style.boton}>
          Hombres
        </button>
        <button className={style.boton}>
          Mujeres
        </button>
        <button className={style.boton}>
          Lenceria
        </button>
        <button className={style.boton}>
          Gaming
        </button>
      </div>
    </>
  );
}

export default BotonCategory;
