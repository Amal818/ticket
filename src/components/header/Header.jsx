import React, { useState } from "react"
import "./header.css";



const Header = () => {
  const [Mobile, setMobile] = useState(false)
  return (
    <>
 
      <header>
        <div className='container flexSB'>
          <nav className='flexSB'>
            <div className='logo'>
              <h1>MiTicket</h1>
            </div>
            <ul className={Mobile ? "navMenu-list" : "flexSB"} onClick={() => setMobile(false)}>
              <li>
                <a href='/'>Home</a>
              </li>
              <li>
              <a href='/'>Concert</a>
              </li>
              <li>
                <a href='/'>Cinema</a>
              </li>
              <li>
                <a href='/'>theater</a>
              </li>
            </ul>
            
          </nav>
          <div className='account flexSB'>
                            <button>
                                Subscribe Now
                            </button>
    
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
