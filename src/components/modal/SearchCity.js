import React from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'

const Button = styled.button`
    background-color: ${({theme}) => theme.third};
    color: ${({theme}) => theme.fourth};
    font-weight: 500;
    font-size: 16px;
    padding: 11px 18px;
    
`

export const SearchCity = ({setModalShow}) => {

    const handleClick = () =>{
        setModalShow(true)
    }

    return (
        <Button onClick={handleClick}>Seach for places</Button>
    )
}

SearchCity.propTypes = {
    setModalShow: PropTypes.func.isRequired  
}
