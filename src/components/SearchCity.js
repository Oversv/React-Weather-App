import React from 'react'
import PropTypes from 'prop-types';

export const SearchCity = ({setModalShow}) => {

    const handleClick = () =>{
        setModalShow(true)
    }

    return (
        <button onClick={handleClick}>Seach for places</button>
    )
}

SearchCity.propTypes = {
    setModalShow: PropTypes.func.isRequired  
}
