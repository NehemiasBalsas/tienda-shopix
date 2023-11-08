import Nav from "@/components/nav/Nav";
import Image from "next/image";
import style from "@/styles/detalleproducto.module.css";
import React from "react";
import Link from "next/link";
interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
}

const DetalleDelProducto = ({ producto }: { producto: Product }) => {
  return (
    <>
      <Nav />

      <section className={style.container}>
        <Image
          src={producto.image}
          alt={`Foto de ${producto.title}`}
          width={200}
          height={200}
          className={style.imageproduct}
        />
        <section className={style.textcontain}>

          <h1 className={style.titulo}>{producto.title}</h1>
          <h2 className={style.categoria}>{producto.category}</h2>
          <p>{producto.description}</p>

          <Link href={`./productos`} className={style.btn}>
            Comprar
          </Link>
        </section>
      </section>
    </>
  );
};

export async function getServerSideProps({
  query: { id },
}: {
  query: { id: string };
}) {
  const url = `https://fakestoreapi.com/products/${id}`;
  const respuesta = await fetch(url);
  const producto = await respuesta.json();
  return {
    props: {
      producto,
    },
  };
}

export default DetalleDelProducto;
