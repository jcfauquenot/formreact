import React from "react"
//import { ReactComponent } from "*.svg"

const Header = ({name, city, status}) => {

//class Headers extends ReactComponent {}

    return ( 
    <p>name: {name} city:{city} status:{status}</p>
    )
}

export default Header