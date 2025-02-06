import React, { useEffect, useState } from "react";

export default function Hearth({ counter, setCounter }) {
  const [hearts, setHearts] = useState([]);
  const [modalCongrats, setModalCongrats] = useState(false);

  // Función para generar posiciones aleatorias
  const getRandomPosition = () => ({
    top: `${Math.floor(Math.random() * 300) + 10}vh`, // Posición vertical aleatoria (entre 10vh y 80vh)
    left: `${Math.floor(Math.random() * 80) + 10}vw`, // Posición horizontal aleatoria (entre 10vw y 90vw)
  });

  useEffect(() => {
    // Inicializa los corazones con posiciones aleatorias
    setHearts([
      {
        id: 1,
        clicked: false,
        img: "IMG_2635.jpeg",
        position: getRandomPosition(),
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

    if (newCounter === hearts.length) {
      setModalCongrats(true);
    }
  };

  const handleCloseClick = (id) => {
    setHearts((prevHearts) =>
      prevHearts.map((heart) =>
        heart.id === id ? { ...heart, clicked: false } : heart
      )
    );
  };

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
          className={`${heart.clicked ? "hidden" : ""} opacity-6 w-15`}
          src="138418700_361f67ed-eac8-4cc3-a3df-2ad899975270.svg"
          alt="Heart Icon"
        />
        <div
          className={`${
            !heart.clicked ? "hidden" : ""
          } w-60 flex mx-auto pb-20  justify-center items-center fixed inset-0 `}
        >
          <div className="shadow-2xl  w-60 flex flex-col justify-end text-end border border-gray-400 rounded-2xl bg-violet-100 p-4">
            <p
              onClick={() => handleCloseClick(heart.id)}
              className="font-body text-2xl text-violet-500 mt-0 cursor-pointer"
            >
              x
            </p>
            <img className=" rounded-2xl" src={heart.img} alt="Card Image" />
          </div>
        </div>
      </div>
    ))}

    {modalCongrats && (
      <div className="font-body text-center">
        <h3>Felicidades, has encontrado todos los Corazones.</h3>
        <p>Te amo mucho amor de mi vida. ¡Que disfrutes mucho tu cumpleaños! 😘</p>
      </div>
    )}
  </>
  );
}
