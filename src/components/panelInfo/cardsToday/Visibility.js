import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';

const CardTitle = styled.h2`
    font-size: 16px;
    font-weight: 500;
    margin-top: 22px;
    margin-bottom: 0%;
`
const CardValue = styled.p`
    font-size: 64px;
    font-weight: 700;
    margin-top: 6px;
    margin-bottom: 12px;
`
const CardUnits = styled.span`
    font-size: 36px;
    font-weight: 500;    
`

export const Visibility = ({visibility}) => {
    return (
        <>
            <CardTitle>Visibility</CardTitle>
            <CardValue>{visibility.toFixed(1).replace(/\./g, ',')}<CardUnits> miles</CardUnits></CardValue>            
        </>
    )
}

Visibility.propTypes = {
    visibility: PropTypes.number.isRequired
}