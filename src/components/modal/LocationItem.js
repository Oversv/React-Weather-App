import React from 'react'
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

    &:hover{
        border: 1px solid #616475;
        cursor: pointer;
    }
`
//TODO Hacer lo del active



const LocationItem = ({locationStorage, setWoeid}) => {
    
    const handleClick = () =>{
        
        getWoeidByLocation(locationStorage, setWoeid)
    }

    return (
        <Item onClick={handleClick}>{locationStorage} <MdNavigateNext /></Item>
    )
}

LocationItem.propTypes = {
    locationStorage: PropTypes.string.isRequired,
    setWoeid: PropTypes.func.isRequired
}

export default LocationItem
