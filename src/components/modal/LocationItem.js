import React, { useState } from 'react'
import PropTypes from 'prop-types'
import getWoeidByLocation from '../../helpers/getWoeidByLocation'
import styled from 'styled-components'
import { MdNavigateNext } from 'react-icons/md';

const Item = styled.li`
    height: 64px;
    padding: 21px 12px;
    margin: 25px 0px;
    display: flex;
    justify-content: space-between;
    color: ${({theme}) => theme.second};

    &:hover{
        border: 1px solid #616475;
        cursor: pointer;
    }    
`

const LocationItem = ({locationStorage, setWoeid}) => {
    
    const [hover, setHover] = useState(false)

    const handleClick = () =>{        
        getWoeidByLocation(locationStorage, setWoeid)
    }
    
    const handleMouseEnter = () =>{
        setHover(true)
    }

    const handleMouseLeave = () =>{
        setHover(false)
    }

    return (
        <Item             
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >{locationStorage}{hover && <MdNavigateNext />}</Item>
    )
}

LocationItem.propTypes = {
    locationStorage: PropTypes.string.isRequired,
    setWoeid: PropTypes.func.isRequired
}

export default LocationItem
