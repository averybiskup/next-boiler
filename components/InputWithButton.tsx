import { useState } from 'react'

const InputWithButton = ({ placeholder,
                           buttonBody,
                           onClick }: { placeholder: string,
                                        buttonBody: string,
                                        onClick: any }) => {

  const [value, setValue] = useState("")

  const handleChange = (e: any) => {

    setValue(e.target.value)
    if (e.target.value.length > 0) {
      (document.getElementById(placeholder) as HTMLInputElement).setCustomValidity("")
    }
  }

  const handleClick = () => {
    if (value.length === 0) {
      (document.getElementById(placeholder) as HTMLInputElement).setCustomValidity("invalid input")
    } else {
      onClick(value)
      setValue("")
    }
  }

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
      handleClick()
    }
  }

  return (
    <div className="flex h-16">
      <input className="border-dark
                        border-l-2
                        border-t-2
                        border-b-2
                        rounded-bl-3xl
                        p-2
                        bg-transparent
                        focus:rounded-bl-none
                        focus:rounded-tl-3xl
                        outline-0
                        dark:border-off-white
                        ease-out
                        duration-500
                        invalid:border-red-600
                        "
             value={value}
             id={placeholder}
             onChange={handleChange}
             placeholder={placeholder}
             onKeyPress={handleKeyPress}
             type="text"
             />
      <button className="bg-dark
                         text-off-white
                         dark:bg-off-white
                         dark:border-off-white
                         dark:active:bg-dark
                         dark:active:text-off-white
                         dark:text-dark
                         border-black
                         border-2
                         h-100
                         rounded-tr-3xl
                         cursor-light
                         dark:cursor-dark
                         p-2
                         pr-3
                         active:bg-transparent
                         active:text-dark
                         ease-out
                         duration-500
                         hover:rounded-br-3xl
                         hover:rounded-tr-none
                         "
              type="button"
              onClick={handleClick}
              >
        {buttonBody}
      </button>
    </div>
  )
}

export default InputWithButton
