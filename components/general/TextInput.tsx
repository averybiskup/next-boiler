const TextInput = ({ setValue,
                     placeholder,
                     value, }: { setValue: any,
                                 placeholder: string,
                                 value: string }) => {

  const handleChange = (e: any) => {
    setValue(e.target.value)
  }
  
  return (
    <input className="border-dark
                      border-2
                      rounded-xl
                      p-2
                      bg-transparent
                      focus:rounded-none
                      outline-0
                      dark:border-off-white
                      ease-out
                      duration-500
                      "
           value={value}
           onChange={handleChange}
           placeholder={placeholder}
           />
  )
}

export default TextInput
