import React from "react"
import { Link } from "react-router-dom"
import './Header.css'

function Header() {
  
  return (
    <nav>
        <h1 id="h1">EventsG</h1>
        <main id="main">
            <Link to={"/"}>Home</Link>
            <Link to={"/"}>Contact</Link>
            <Link to={"/#about"}>About</Link>
            <Link to={"/#services"}>Services</Link>
        </main>
    </nav>
  )
}

export default Header