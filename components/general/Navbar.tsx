import ABLink from '../elements/ABLink'
import Link from 'next/link'
import { useState, useEffect, useContext } from 'react'
import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5'
import DarkModeContext from '../../contexts/darkModeContext'
import { TbAsterisk } from 'react-icons/tb'
import { SlSocialSpotify } from 'react-icons/sl'
import IconButton from './IconButton'

const Navbar = () => {

  const { darkMode, setDarkMode } = useContext(DarkModeContext)

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      console.log("SETTING DARK")
      setDarkMode(true)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem("theme", (darkMode) ? "dark" : "light")
  }, [darkMode])

  return (
    <nav className="fixed flex justify-center w-full z-50">
      <div className="flex
                      h-12 
                      justify-between
                      items-center
                      sm:w-9/12
                      w-11/12
                      max-w-phone
                      bg-off-white
                      dark:bg-dark
                      sm:max-w-desktop
                      ml-5
                      pt-5
                      mr-5">
          <div className="flex items-center space-x-2 text-5xl">
            <Link href="/">
              <div className="cursor-link">
                next-boiler
              </div>
            </Link> 
          </div>
          <div className="flex space-x-4 text-2xl">
            <IconButton onClick={() => setDarkMode(!darkMode)}>
              {
                (darkMode)
                  ? <IoSunnyOutline />
                  : <IoMoonOutline />
              }
            </IconButton>
          </div>
      </div>
    </nav>
  )
}

export default Navbar
