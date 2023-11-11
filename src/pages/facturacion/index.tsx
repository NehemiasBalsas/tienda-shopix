import Nav from "@/components/nav/Nav";
import style from "@/styles/facturacion.module.css";
import React, { FormEvent, useRef, useEffect } from "react";
import mercadopago from "mercadopago";

function DatosDeFacturacion() {
  const nombreRef = useRef<HTMLInputElement>(null);
  const apellidoRef = useRef<HTMLInputElement>(null);
  const calleRef = useRef<HTMLInputElement>(null);
  const alturaRef = useRef<HTMLInputElement>(null);
  const cpostalRef = useRef<HTMLInputElement>(null);
  const provinciaRef = useRef<HTMLInputElement>(null);
  const localidadRef = useRef<HTMLInputElement>(null);
  const dniRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const telefonoRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchCheckout = async () => {
      const respuestamp = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({
        })
      })
    }
  })

  async function enviarDatosDeFacturacion(evento: FormEvent) {
    evento.preventDefault();
    
    const datosAEnviar = {
      //@ts-ignore
      nombre: nombreRef.current?.value,
      //@ts-ignore
      apellido: apellidoRef.current?.value,
      //@ts-ignore
      calle: calleRef.current?.value,
      //@ts-ignore
      altura: alturaRef.current?.value,
      //@ts-ignore
      cpostal: cpostalRef.current?.value,
      //@ts-ignore
      provincia: provinciaRef.current?.value,
      //@ts-ignore
      localidad: localidadRef.current?.value,
      //@ts-ignore
      dni: dniRef.current?.value,
      //@ts-ignore
      email: emailRef.current?.value,
      //@ts-ignore
      telefono: telefonoRef.current?.value,
    };
    console.log(datosAEnviar)
    
    


    const respuesta = await fetch("http://localhost:3000/api/facturacion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datosAEnviar),
    });
    console.log(respuesta);

    if(respuesta.status !== 201){
        const error = await respuesta.json()
        alert(error.msg)
      }
  }
  return (
    <>
      <Nav />
      <div className={style.container}>
        <h1>Ingresa datos de facturacion</h1>
        <form className={style.form} method="post" onSubmit={async (e) => await enviarDatosDeFacturacion(e)}>
          <div className={style.flexrow}>
            <div className={style.formgroup}>
              <label htmlFor="nombre">Nombre(s)</label>
              <input
                type="text"
                ref={nombreRef}
                name=""
                placeholder="Nombre"
                id="nombre"
                required
              />
            </div>
            <div className={style.formgroup}>
              <label htmlFor="apellido">Apellido</label>
              <input
                type="text"
                ref={apellidoRef}
                name=""
                placeholder="Apellido"
                id="apellido"
                required
              />
            </div>
          </div>
          <div className={style.formgroup}>
            <label htmlFor="dni">N° de documento</label>
            <input
              type="text"
              minLength={7}
              maxLength={8}
              inputMode="numeric"
              name=""
              ref={dniRef}
              placeholder="12.456.365"
              id="dni"
              required
            />
          </div>
          <h2 className={style.envio}>Datos de envio</h2>
          <div className={style.flexrow}>
            <div className={style.formgroup}>
              <label htmlFor="calle">Calle</label>
              <input
                ref={calleRef}
                type="text"
                name=""
                placeholder="calle"
                id="calle"
                required
              />
            </div>
            <div className={style.formgroup}>
              <label htmlFor="numerocasa">Altura</label>
              <input
                type="text"
                ref={alturaRef}
                inputMode="numeric"
                name=""
                placeholder="1975"
                id="numerocasa"
                required
              />
            </div>
          </div>
          <div className={style.formgroup}>
            <label htmlFor="codepostal">Codigo Postal</label>
            <input
              type="text"
              name=""
              ref={cpostalRef}
              inputMode="numeric"
              minLength={4}
              maxLength={5}
              placeholder="1975"
              id="codepostal"
              required
            />
          </div>
          <div className={style.flexrow}>
            <div className={style.formgroup}>
              <label htmlFor="provincia">Provincia</label>
              <input
                type="text"
                ref={provinciaRef}
                name=""
                placeholder="Buenos Aires"
                id="provincia"
                required
              />
            </div>
            <div className={style.formgroup}>
              <label htmlFor="localidad">Localidad</label>
              <input
                type="text"
                name=""
                ref={localidadRef}
                placeholder="Mar del plata"
                id="localidad"
                required
              />
            </div>
          </div>
          <h2 className={style.envio}>Contacto</h2>
          <div className={style.formgroup}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name=""
              ref={emailRef}
              placeholder="ejemplo@ejemplo.com"
              inputMode="email"
              id="email"
              required
            />
            <small>Te enviaremos el comprobante</small>
          </div>
          <div className={style.formgroup}>
            <label htmlFor="telefono">N° de telefono</label>
            <input
              type="text"
              ref={telefonoRef}
              minLength={10}
              maxLength={11}
              placeholder="1159031584"
              id="telefono"
              inputMode="numeric"
              required
            />
          </div>
          <button type="submit" className={style.btn}>
            Confirmar
          </button>
        </form>
      </div>
    </>
  );
}

export default DatosDeFacturacion;
