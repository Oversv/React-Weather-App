import React from 'react'
import styled from 'styled-components'
import { CurrentLocation } from './CurrentLocation'
import SearchCity from './SearchCity'
import PropTypes from 'prop-types'

const Bar = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 18px 12px; 

    @media (min-width: 1024px) {
        padding: 42px 46px;         
    } 
`
export const TopBar = ({setModalShow, setWoeid}) => {
    return (
        <Bar>
            <SearchCity setModalShow={setModalShow}/>
            <CurrentLocation setWoeid={setWoeid}/>
      </Bar>
    )
}

TopBar.propTypes = {
    setModalShow: PropTypes.func.isRequired,
    setWoeid: PropTypes.func.isRequired
}

export default React.memo(TopBar)