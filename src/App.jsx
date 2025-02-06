import React, { useState } from 'react'
import Card from './components/Card'
import Carta from './components/Carta'
import AudioPlayer from './components/AudioPlayer'
export default function App() {
  
  const [modal, setModal] = useState(false)
const {audioRef,audioFile, handlePlayAudio} = AudioPlayer()
  const handleclick = ()=>{
    setModal(!modal)
    handlePlayAudio()
}
  return (
   <>
   <Carta modal={modal} setModal={setModal} handleclick={handleclick}/>
   <Card audioFile={audioFile} audioRef={audioRef} />
   </>
  )
}
