import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Section = styled.section`
  display: flex;
  justify-content: flex-end;
  width: 704px; 
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 66px;
`
const Button = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-weight: 700;
    margin-left: 12px;    
    color: ${props => props.active ? ({theme}) => theme.tempBtnText : ({theme}) => theme.fourth};
    background-color: ${props => props.active ? ({theme}) => theme.fourth : ({theme}) => theme.tempBtn};;
    border: none;
    cursor: pointer;
`

export const ConvertTemperature = ({setTemperatureUnits}) => {
    
    const buttons = [{title: 'ºC', default: true}, {title: 'ºF', default: false}]  
    const [active, setActive] = useState(buttons[0])

    const handleClick = (e) =>{

        if(e.target.value === 'ºC'){
            setTemperatureUnits('celsius')
            setActive(buttons[0])

        }else{
            setTemperatureUnits('fahrenheit')
            setActive(buttons[1])
        }
    }

    return (
        <Section>
            {
                buttons.map(btn =>(                
                    <Button
                        key={btn.title}
                        active={active.default === btn.default}
                        value={btn.title}
                        onClick={handleClick}
                    >{btn.title}</Button>)
                
                ) 
            }

        </Section>
    )
}

ConvertTemperature.propTypes = {
    setTemperatureUnits: PropTypes.func.isRequired
}
