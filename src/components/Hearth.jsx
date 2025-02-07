import React, { useEffect, useState } from "react";
import Confetti from "canvas-confetti";

export default function Hearth({ counter, setCounter }) {
  const [hearts, setHearts] = useState([]);
  const [modalCongrats, setModalCongrats] = useState(false);

  // Función para generar posiciones aleatorias
  const getRandomPosition = () => ({
    top: `${Math.floor(Math.random() * 300) + 10}vh`, // Posición vertical aleatoria (entre 10vh y 80vh)
    left: `${Math.floor(Math.random() * 50) + 10}vw`, // Posición horizontal aleatoria (entre 10vw y 90vw)
  });

  useEffect(() => {
    // Inicializa los corazones con posiciones aleatorias
    setHearts([
      {
        id: 1,
        clicked: false,
        img: "IMG_2635.jpeg",
        position: getRandomPosition(),
        copy: "Nos vemos increíbles",
      },
      {
        id: 2,
        clicked: false,
        img: "IMG_2064.jpeg",
        position: getRandomPosition(),
      },
      {
        id: 3,
        clicked: false,
        img: "IMG_2376.jpeg",
        position: getRandomPosition(),
      },
      {
        id: 4,
        clicked: false,
        img: false,
        position: getRandomPosition(),
        copy: "Eres hermosa",
      },
      {
        id: 5,
        clicked: false,
        img: false,
        position: getRandomPosition(),
        copy: "Adoro tu sonrisa",
      },
      {
        id: 6,
        clicked: false,
        img: false,
        position: getRandomPosition(),
        copy: "Te amo!❤️",
      },
      {
        id: 7,
        clicked: false,
        img: false,
        position: getRandomPosition(),
        copy: "Tan bella!",
      },
      {
        id: 8,
        clicked: false,
        img: "IMG_2389.jpeg",
        position: getRandomPosition(),
        copy: "11/01 siempre en mi corazon!",
      },
    ]);
  }, []);

  const handleHeartClick = (id) => {
    setHearts((prevHearts) =>
      prevHearts.map((heart) =>
        heart.id === id ? { ...heart, clicked: !heart.clicked } : heart
      )
    );

    const newCounter = counter + 1;
    setCounter(newCounter);

    if (newCounter === 8) {
      setTimeout(() => {
        setModalCongrats(true);
      }, 1000);
    }
  };

  const handleCloseClick = (id) => {
    setHearts((prevHearts) =>
      prevHearts.map((heart) =>
        heart.id === id ? { ...heart, clicked: false } : heart
      )
    );
  };

  useEffect(() => {
    // Inicia el confeti cuando el modalCongrats sea true
    if (modalCongrats) {
      Confetti();  // Esto dispara el confeti
    }
  }, [modalCongrats]);

  return (
    <>
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="z-10 absolute cursor-pointer"
          style={{ top: heart.position.top, left: heart.position.left }}
        >
          <img
            onClick={() => handleHeartClick(heart.id)}
            className={`${heart.clicked ? "hidden" : ""} opacity-6 z-10 w-15`}
            src="138418700_361f67ed-eac8-4cc3-a3df-2ad899975270.svg"
            alt="Heart Icon"
          />
          <div
            className={`${
              !heart.clicked ? "hidden" : ""
            } w-60 flex mx-auto pb-20 z-50 justify-center items-center fixed inset-0 `}
          >
            <div className="animate-jump-in animate-once animate-duration-[2000ms] shadow-2xl z-50  w-60 flex flex-col justify-end text-end border border-gray-400 rounded-2xl bg-violet-100 p-4">
              <p
                onClick={() => handleCloseClick(heart.id)}
                className="font-body text-2xl text-violet-500 mt-0 cursor-pointer"
              >
                x
              </p>
              <img
                className={` ${heart.img || "hidden"} rounded-2xl `}
                src={heart.img}
                alt="Card Image"
              />
              <p className="font-body text-2xl">{heart.copy}</p>
            </div>
          </div>
        </div>
      ))}

      {modalCongrats && (
        <div className="bg-violet-100 font-body text-center fixed z-30 inset-0">
          <div className="mt-72  p-4 text-violet-500">
            <h3 className="text-2xl font-black">Felicidades, has encontrado todos los Corazones.</h3>
            <p className="text-sm">Te amo mucho amor de mi vida. ¡Que disfrutes mucho tu cumpleaños! 😘</p>
            <br />
            <p className="text-sm ">
              Te has ganado unos besos de Mono conmigo, qué privilegiada
            </p>
          </div>
        </div>
      )}
    </>
  );
}
