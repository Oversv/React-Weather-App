import React from 'react'
import PropTypes from 'prop-types'
import getPosition from '../helpers/getPosition'
import { MdMyLocation } from "react-icons/md";
import styled from 'styled-components'

const Icon = styled.i`
    background-color: ${({theme}) => theme.third};
    color: ${({theme}) => theme.fourth};
    border-radius: 50%;
    height: 40px;
    width: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 22px;
`

export const CurrentLocation = ({setWoeid}) => {
    
    const handleClick = () =>{
        getPosition(setWoeid)
    }
    
    return (
        <Icon onClick={handleClick}>
          <MdMyLocation /> 
        </Icon>
    )
}

CurrentLocation.propTypes = {
    setWoeid: PropTypes.func.isRequired
}
