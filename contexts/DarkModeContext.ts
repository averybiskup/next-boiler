import { createContext } from 'react'

const DarkModeContext = createContext({
  darkMode: false,
  setDarkMode: null
})

export default DarkModeContext
