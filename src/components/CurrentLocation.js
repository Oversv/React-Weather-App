import React from 'react'
import PropTypes from 'prop-types'
import getPosition from '../helpers/getPosition'

export const CurrentLocation = ({setWoeid}) => {
    
    const handleClick = () =>{
        getPosition(setWoeid)
    }
    
    return (
        <p onClick={handleClick}>
          ICONO  
        </p>
    )
}

CurrentLocation.propTypes = {
    setWoeid: PropTypes.func.isRequired
}
