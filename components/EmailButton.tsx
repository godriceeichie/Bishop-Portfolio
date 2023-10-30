import Link from 'next/link'
import React from 'react'
import { GrMail } from 'react-icons/gr'

const EmailButton = () => {
    const emailAddress = 'logospastor@yahoo.com';
  return (
    <Link href={`mailto:${emailAddress}`}>
        <GrMail size={"18px"} color={"#fff"} />
    </Link>
  )
}

export default EmailButton