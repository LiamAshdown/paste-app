'use client'

import { useEffect, useState } from 'react'
import MemoryGame from 'react-card-memory-game'

const CardGame = () => {
  const [isIntialised, setIsInitialised] = useState(false)

  useEffect(() => {
    setIsInitialised(true)
  }, [])

  if (!isIntialised) {
    return null
  }

  return (
    <MemoryGame gridNumber={4}/>
  )
}

export default CardGame
