import React, { useRef, useState } from 'react';
import audioFile from '../../public/audio.mp3'; // Ajusta la ruta a tu archivo

const AudioPlayer = () => {
  // Crea una referencia para el elemento de audio
  const audioRef = useRef(null);
  
  // Estado para manejar si está reproduciendo
  const [isPlaying, setIsPlaying] = useState(false);

  // Función para manejar el clic
  const handlePlayAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return{audioRef,audioFile, handlePlayAudio}
};

export default AudioPlayer;