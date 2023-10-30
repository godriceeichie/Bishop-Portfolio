
import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'

const CallButton = () => {
    const phoneNumber = "+2348033125477"
    const handleCallClick = () => {
        window.location.href = `tel:${phoneNumber}`
    }
  return (
    <button onClick={handleCallClick}>
        <BsFillTelephoneFill color={"#fff"} />
    </button>
  )
}

export default CallButton