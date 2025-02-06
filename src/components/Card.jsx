import React, { useEffect, useState } from "react";
import Hearth from "./Hearth";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Card({ audioRef, audioFile, handlePlayAudio, modal }) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    Aos.init();
  }, []);

  

  return (
    <>
      <div className="">
        <audio
          className="opacity-0"
          src={audioFile}
          ref={audioRef}
          controls
        ></audio>
      </div>
      <div className={`${modal && "animate-fade animate-once animate-duration-[3200ms] animate-ease-in-out animate-normal"} w-full h-screen `}>
       <div className="flex justify-center my-auto items-center">
        <div className="size-44 absolute -z-40 flex justify-center items-center align-middle left-56 top-10 bg-violet-300 rounded-full ">
        <img className="animate-spin animate-infinite animate-duration-[10000ms] animate-ease-in animate-normal filter blur-none" src="freepik__background__38057.png" alt="" />
        </div>
       </div>
        <div className="flex  flex-col justify-center align-middle pt-16">
          <h2
            className="z-10 font-body text-5xl text-violet-900 px-8"
            data-aos="fade-right"
          >
            Si hago cosas por ti, no es para que me quieras, es para que sepas
            que te quiero.
          </h2>
          <h1
            className=" font-body text-2xl mt-5 text-violet-900 px-8"
            data-aos="fade-left"
          >
            Mario benedetti.
          </h1>
          <p
            className="z-10 font-body  text-2xl text-violet-900 mt-15 px-8"
            data-aos="fade-right"
          >
            ¿Alguien alguna vez se ha preguntado qué es lo más bonito en esta
            vida?... Ciertamente, tú. Claro, para mí lo eres.
            <br />
            En este día tan especial, celebro tu cumpleaños número 23 a tu lado,
            con maravillosas experiencias de gran valor para ti.
            <br />
          </p>
          <br />
          <p
            className="z-10 font-body  text-5xl text-violet-900 mt-15 px-8"
            data-aos="fade-left"
          >
            Celebro contigo los días de esfuerzo que has dedicado para ser una
            gran persona.
          </p>
          <div className="flex justify-center items-center align-middle size-44 absolute mt[270px] -z-40  ml-48   bg-violet-300 rounded-full ">
            <img className="animate-spin animate-infinite animate-duration-[10000ms] animate-ease-in animate-normal filter blur-none" src="freepik__background__38057.png" alt="" />
          </div>
          <br />
          <p
            className="z-10 font-body  text-2xl text-violet-900 mt-15 px-8"
            data-aos="fade-right"
          >
            Celebro contigo los días que fueron difíciles para ti, pero que, sin
            embargo, supiste cómo levantarte y superar ese reto.
          </p>
          <br />
          <p
            className="z-10 font-body  text-5xl text-violet-900 mt-15 px-8"
            data-aos="fade-left"
          >
            Aunque yo no haya estado en todos los mejores o malos momentos de
            tu vida para apoyarte...
          </p>
          <br />
          <p
            className="z-10 font-body  text-2xl text-violet-900 mt-15 px-8"
            data-aos="fade-right"
          >
            Sí estaré en los proximos y te apoyare❤️.
          </p>
          <br />
          <p
            className="z-10 font-body w-full  text-4xl text-violet-900 mt-15 px-8"
            data-aos="fade-left"
          >
            Celebro contigo nuestra hermosa relación.
          </p>
          <br />
          <h2
            className="z-10 font-body text-center  text-2xl text-violet-900 mt-15 px-8"
            data-aos="fade-right"
          >
            He preparado un jueguito... A lo largo de la página hay corazones
            ocultos, ¡búscalos!
          </h2>
          <p
            className="z-10 font-body text-center  text-2xl text-violet-900 mt-15 px-8 pb-20"
            data-aos="fade-left"
          >
            Encuentra los corazones invisibles: {counter}/7
          </p>

          <Hearth
            counter={counter}
            setCounter={setCounter}
            handlePlayAudio={handlePlayAudio}
          />
        </div>
      </div>
    </>
  );
}
