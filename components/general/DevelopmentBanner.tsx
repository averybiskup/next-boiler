import { RxCross2 } from 'react-icons/rx'
import { useState } from 'react'

const DevelopmentBanner = () => {

  const [show, setShow] = useState(true)

  if (!show)
    return <></>

  return (
    <div className="w-screen bg-yeller flex justify-between items-center pl-5 pr-5">
      <div>
        This project is still in development.
      </div>
      <button onClick={() => setShow(false)}>
        <RxCross2 />
      </button>
    </div>
  )
}

export default DevelopmentBanner
