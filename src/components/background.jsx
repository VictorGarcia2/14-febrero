import React from "react";

export default function background() {
  return (
    <>
    <div className="fixed w-[480px] h-screen bg-black bg-linear-to-bl from-cyan-100 to-violet-600">
    </div>
    <div className="flex flex-col justify-center align-middle pt-16">
      <h1 className="z-10  font-display   text-3xl text-violet-900 px-8">Mario benedetti dijo:</h1>
      <br />
      <h2 className="z-10 font-body font-bold text-5xl text-violet-900 px-8">Si hago cosas por ti, no es para que me quieras, es para que sepas que te quiero.</h2>
      <br />
      <br />
      <br />
      <p className="z-10 font-body font-bold text-2xl text-violet-900 px-8"> Digo esto porque, a tu lado, cada latido de mi corazón se aviva con una fuerza única, impulsándome a amarte y quererte cada día más. Aunque nuestro tiempo juntos han sido de meses, has logrado llenarlo de momentos que atesoro como aventuras extraordinarias: risas que se vuelven huellas, miradas que construyen mundos y recuerdos que brillan con la intensidad de lo auténtico. Eres, mi amor, la razón por la que creo en el ahora.</p>
      <br /><br /><br />
      <p className="z-10 font-body font-bold text-3xl text-violet-100 px-8 pb-3">Lo sé, ha sido bastante poetico 😜 </p>
      
      <div className="z-10">
      <img
        className=" absolute  opacity-90 "
        src="campo_de_flores_con_variaciones_de_colores_muy_coloridos_en_un_estilo_de_van_gogh__ttymf2zyrtijv5i0ujsh_3.png"
        alt=""
        />
      <p className=" font-body z-20 font-bold text-3xl text-violet-100 px-8 pb-3">Lo sé, ha sido bastante poetico 😜 </p>
     
      </div>
    </div>
        </>
  );
}
