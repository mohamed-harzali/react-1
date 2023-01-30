import React from 'react'
import './footer.css'
function Footer() {
    const foo = "welcome to my web site!"
  return (
    <div className='lastPart'>
        <button className='btn'>{foo}</button>
    </div>
  )
}

export default Footer