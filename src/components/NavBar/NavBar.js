import React , { Wrapper } from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return(
       <div>
            <Link to = "/"> Home </Link>
            <Link to = "/backlog"> Backlog </Link>
            <Link to = "/user-story"> User Story </Link>
            <Link to = "/sprint" > Sprint </Link>
       </div>
    )
}

export default NavBar ;