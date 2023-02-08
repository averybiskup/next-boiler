const IconButton = ({ children, onClick }: 
                    { children: any, onClick: any }) => {

  return (
    <button className="cursor-crosshair" onClick={onClick}>
      {children}
    </button>
  )

}

export default IconButton
