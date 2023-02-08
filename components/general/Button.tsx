const Button = (props: any) => {
  return (
    <button onClick={props.onClick}
            className="bg-dark
                       text-off-white
                       dark:text-dark
                       dark:bg-off-white
                       dark:border-off-white
                       min-h-button
                       h-fit
                       p-3
                       font-normal
                       active:bg-white
                       active:text-dark
                       dark:active:bg-dark
                       dark:active:text-off-white
                       rounded-tr-3xl
                       rounded-bl-3xl
                       hover:rounded-br-3xl
                       hover:rounded-tl-3xl
                       hover:rounded-tr-none
                       hover:rounded-bl-none
                       border-dark
                       border-2
                       group
                       duration-300
                       ease-out
                       dark:cursor-dark
                       cursor-light
                       shadow-sm
                       shadow-dark
                       dark:shadow-off-white
                       ">
      {props.body}
    </button>
  )
}

export default Button
