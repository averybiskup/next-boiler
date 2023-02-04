import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DarkModeContext from '../contexts/DarkModeContext'
import { useState, useEffect } from 'react'

export default function App({ Component, pageProps }: AppProps) {

  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const darkMode = window.localStorage.getItem("next-boiler-dark")

    if (darkMode !== null && darkMode !== undefined)
      setDarkMode(darkMode === "true")

  }, [])

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <Component {...pageProps} />
    </DarkModeContext.Provider>
  )
}
