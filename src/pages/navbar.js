
import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-around",
    }}>
<h4><Link to="/"> home</Link></h4>
<h4><Link to="/adduser"> Adduser</Link></h4>
<h4><Link to="/edituser"> edituser</Link></h4>

    </div>
  )
}

export default Navbar