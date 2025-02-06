import React from "react";

export default function background() {
  return (
    <>
      <div className="  h-screen ">
        <div className="size-44 absolute -z-40  left-5 filter  blur-3xl top-70 bg-pink-500 rounded-full "></div>
        
        <div className="flex  flex-col justify-center align-middle pt-16">
          <h1 className=" z-10 font-display   text-3xl text-violet-900 px-8">
            Mario benedetti dijo:
          </h1>
          <br />
          <h2 className="z-10 font-body font-bold text-5xl text-violet-900 px-8">
            Si hago cosas por ti, no es para que me quieras, es para que sepas
            que te quiero.
          </h2>
          <br />
          <br />
          <br />
          <p className="z-10 font-body font-bold text-2xl text-violet-900 px-8">
            Tal vez esto sea diferente para ti, pero esto es lo que soy yo. Te dedico este regalito porque eres la razon de mi felicidad desde hace un tiempo a la actualidad. Los bellos momentos que he estado viviendo contigo los preservo en lo mas tierno de mi corazon...
          </p>
          <br />
          <br />
          <br />
        
          <div className="flex justify-center mt-40 pb-20">

          <img className=" w-20" src="/public/138418700_361f67ed-eac8-4cc3-a3df-2ad899975270.svg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
