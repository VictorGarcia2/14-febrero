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
        <div className="size-44 absolute -z-40  left-5 filter  blur-3xl top-70 bg-violet-400 rounded-full "></div>
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
            En este día tan especial, celebro tu cumpleaños número 3 a tu lado,
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
          <div className="size-44 absolute mt[400px] -z-40  ml-48 filter  blur-3xl  bg-red-400 rounded-full "></div>
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
            Aunque yo no haya estado en todos los mejores o peores momentos de
            tu vida...
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
