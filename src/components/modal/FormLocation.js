import React, { useState } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { MdSearch } from 'react-icons/md';
import { addStorage, getStorage } from '../../helpers/localStorage';
import getWoeidByLocation from '../../helpers/getWoeidByLocation';

const Form = styled.form`
    margin: 60px 12px 0 12px;
    display: flex;
    justify-content: space-between;    
    align-items: center;       
`
const WrapperInput = styled.div`   
    position: relative;
    display: flex;  
    align-items: center;
    color: ${({theme}) => theme.second};
`
const Input = styled.input`
    height: 48px;
    width: 252px;   
    border: 1px solid white; 
    color: ${({theme}) => theme.second};
    background-color: ${({theme}) => theme.first};
    padding-left: 50px; 
`
const Search = styled.input`
    height: 48px;
    width: 86px;
    color: white;
    background-color: ${({theme}) => theme.bgBtn};
    border: none;
    font-size: 16px;
    font-weight: 600;
`

const FormLocation = ({setStorage, setWoeid}) => {

    const [location, setLocation] = useState('')
    

    const handleLocation = (e) => {

        setLocation(e.target.value.trim())      
    }

    const handleSubmit = (e) =>{
 
        e.preventDefault()       

        if(location.length > 2){
            addStorage(location)
            setStorage(getStorage()) 
            getWoeidByLocation(location, setWoeid) 
            
            e.target.reset()
        }           
    }
    return (        
        <Form onSubmit={handleSubmit}>                    
            <WrapperInput>
                <MdSearch size="1.4em" style={{position: 'absolute', marginLeft: '10px'}}/>
                <Input                             
                    type='search' 
                    name="browser" 
                    placeholder='search location'
                    autoComplete="off"
                    onChange={handleLocation}
                />
            </WrapperInput>
            <Search type='submit' value='Search'/>
        </Form>
        
    )
}
FormLocation.propTypes = {
    setStorage: PropTypes.func.isRequired,
    setWoeid: PropTypes.func.isRequired
}

export default FormLocation