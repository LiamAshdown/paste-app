'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

const DarkLightToggle = () => {
  const { theme, setTheme } = useTheme()
  const [hasMounted, setHasMounted] = useState(false)

  useEffect(() => {
    setHasMounted(true)
  }, [])

  if (!hasMounted) {
    return null
  }

  console.log(theme)

  return (
    <>
      { theme === 'dark' && (
        <SunIcon
          className="h-10 w-10 hover:bg-gray-700 rounded-full p-2 cursor-pointer"
          onClick={() => setTheme('light')}
        />
      )}
      { theme === 'light' && (
        <MoonIcon
          className="h-10 w-10 hover:bg-gray-100 rounded-full p-2 cursor-pointer"
          onClick={() => setTheme('dark')}
        />
      )}
    </>
  )
}

export default DarkLightToggle
