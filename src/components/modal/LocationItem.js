import React from 'react'
import PropTypes from 'prop-types'
import getWoeidByLocation from '../../helpers/getWoeidByLocation'

const LocationItem = ({locationStorage, setWoeid}) => {
    
    const handleClick = () =>{
        
        getWoeidByLocation(locationStorage, setWoeid)
    }

    return (
        <li onClick={handleClick}>{locationStorage}</li>
    )
}

LocationItem.propTypes = {
    locationStorage: PropTypes.string.isRequired,
    setWoeid: PropTypes.func.isRequired
}

export default LocationItem
