import React from 'react'
import NavBar from './NavBar'

const HomePage = ({handleLogOut}) => {
    return (
        <div>
            <NavBar handleLogOut={handleLogOut}/>
    </div>
    )
}

export default HomePage
