import React, { useEffect, useState } from "react";
import Hearth from "./Hearth";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Card({ audioRef, audioFile, handlePlayAudio, modal }) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    Aos.init({
      offset: 200,
      once: true,
      duration: 1400,
    });
  }, []);
  return (
    <>
      <div>
        <audio
          className="opacity-0"
          src={audioFile}
          ref={audioRef}
          controls
        ></audio>
      </div>
      <div
        className={`${
          modal &&
          "animate-fade animate-once animate-duration-[3200ms] animate-ease-in-out animate-normal"
        } w-full h-screen`}
      >
        <div className="flex justify-center my-auto items-center">
          <div className="size-44 absolute -z-40 flex justify-center items-center align-middle left-56 top-10 bg-violet-300 rounded-full"></div>
        </div>
        <div className="flex flex-col justify-center align-middle pt-16 overflow-x-hidden">
          <h2
            className="z-10 font-body text-5xl text-violet-900 px-8"
            data-aos="fade-right"
          >
            "Si hago cosas por ti, no es para que me quieras, es para que sepas
            que te quiero."
          </h2>
          <h1
            className="font-body text-2xl mt-5 text-violet-900 px-8"
            data-aos="fade-left"
          >
            — Mario Benedetti.
          </h1>
          <p
            className="z-10 font-body text-2xl text-violet-900 mt-15 px-8"
            data-aos="fade-right"
          >
            Han pasado 39 días desde que nos convertimos en novios, y 158 días
            desde que comenzamos a hablar... <br />
            no es que suene disco rayado repitiendo jaja, sino que es algo que hare y luego nos demos cuenta del tiempo que ha transcurrido. Sin embargo el día de
            hoy te celebro a ti, por simplemente ser tu.
          </p>
          <br />
          <p
            className="z-10 font-body text-5xl text-violet-900 mt-15 px-8"
            data-aos="fade-left"
          >
            Celebro contigo los días de esfuerzo que has dedicado para ser una
            gran persona.
          </p>
          <div className="flex justify-center items-center align-middle size-44 absolute mt-[270px] -z-40 ml-48 bg-violet-300 rounded-full"></div>
          <br />
          <p
            className="z-10 font-body text-2xl text-violet-900 mt-15 px-8"
            data-aos="fade-right"
          >
            Celebro contigo los días que fueron difíciles para ti, pero que, sin
            embargo, supiste cómo levantarte y superar ese reto.
          </p>
          <br />
          <p
            className="z-10 font-body text-5xl text-violet-900 mt-15 px-8"
            data-aos="fade-left"
          >
            Aunque yo no haya estado en todos los momentos de tu vida para
            apoyarte...
          </p>
          <br />
          <p
            className="z-10 font-body text-2xl text-violet-900 mt-15 px-8"
            data-aos="fade-right"
          >
            Sí estaré en los próximos, y te apoyaré ❤️.
          </p>
          <br />
          <p
            className="z-10 font-body w-full text-4xl text-violet-900 mt-15 px-8"
            data-aos="fade-left"
          >
            Celebro contigo nuestra hermosa relación.
          </p>
          <br />
          <p
            className="z-10 font-body text-2xl text-violet-900 mt-15 px-8"
            data-aos="fade-right"
          >
            existen muchas cosas de ti por la cuales celebro y podria seguir
            escribiendolas, sin embargo aprovecho esto para expresar mi amor por ti.{" "}
            <br />y es que eres una persona que me hace sonreir. Porque eres la
            mujer de mis ojos, que hace que mi corazon resuene asi como las
            vias al pasar un tren... Tu amor es como una paloma blanca, igual de
            bella. y bella es la vida que me das...
             <br />
          </p>
          <p
            className="z-10 font-body w-full text-4xl text-violet-900 mt-15 px-8"
            data-aos="fade-left"
          >
            Espero que este día pueda ser muy lindo para tí. Mi amor! espero y te haya gustado este regalito. 
          </p>
          <h2
            className="z-10 font-body text-center text-2xl text-violet-900 mt-15 px-8"
            data-aos="fade-right"
          >
            He preparado un jueguito... A lo largo de la página hay corazones
            ocultos, ¡búscalos!
          </h2>
          <p
            className="z-10 font-body text-center text-2xl text-violet-900 mt-15 px-8 pb-24"
            data-aos="fade-left"
          >
            Encuentra los corazones invisibles: {counter}/10
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
