import React from 'react'
import logo from "../assets/Logo.JPG"

const Logo = ({width = '50px'}) => {
  return (
    <div>
      <img className="rounded-md" width= {width} src={logo}/>
    </div>
  )
}

export default Logo;