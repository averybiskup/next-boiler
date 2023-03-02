import '../styles/globals.css'
import type { AppProps } from 'next/app'
import DarkModeContext from '../contexts/darkModeContext'
import { useState, useEffect } from 'react'
import Navbar from '../components/general/Navbar'

export default function App({ Component, pageProps }: AppProps) {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <div className={(darkMode) ? "dark" : ""}>
      <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
        <div className="bg-off-white
                        text-dark
                        font-serif
                        dark:text-off-white
                        h-screen
                        scrollbar
                        scrollbar-thumb-dark
                        scrollbar-track-off-white
                        dark:scrollbar-thumb-off-white
                        dark:scrollbar-track-dark
                        dark:bg-dark">
          <Navbar />
          <Component {...pageProps} />
        </div>
      </DarkModeContext.Provider>
    </div>
  )
}
