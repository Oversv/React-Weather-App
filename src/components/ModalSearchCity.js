import React, { useState } from 'react'
import styled from 'styled-components'
import getWoeidByLocation from '../helpers/getWoeidByLocation';
import PropTypes from 'prop-types';
import { getStorage, addStorage } from '../helpers/localStorage';
import { v4 as id } from 'uuid';
import LocationItem from './LocationItem';

const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;     
    width: 100vw;
    height: 100vh;
    background-color: #1E213A;
    color: #E7E7EB;
    transform: ${({modalShow}) => modalShow ? 'scale(1)' : 'scale(0)'};  
    transition: transform .3s;
`;

export const ModalSearchCity = ({modalShow, setModalShow, setWoeid}) => {  
    
    const [location, setLocation] = useState('')
    const [storage, setStorage] = useState(getStorage())

    const handleModal = () => setModalShow(false)
    
    const handleLocation = (e) => {

        setLocation(e.target.value.trim())
    }
    
    const handleSubmit = (e) =>{
 
        e.preventDefault()       

        if(location.length > 2){
            addStorage(location)
            setStorage(getStorage()) 
            getWoeidByLocation(location, setWoeid)
        }           
    }    

    return (        
       <>
            <Modal modalShow={modalShow}>
                <p onClick={handleModal}>+</p>
                <form onSubmit={handleSubmit}>
                    <input 
                        type='search' 
                        name="browser" 
                        placeholder='search location'
                        onChange={handleLocation}
                    />
                    <input type='submit' value='Search'/>
                </form>

                <ul>
                    {
                        storage.map(locationStorage =>                   
                            <LocationItem 
                                key={id()}
                                locationStorage={locationStorage}
                                setWoeid={setWoeid}
                            />
                        )
                    }
                </ul>

            </Modal>
        </>
    )
}

ModalSearchCity.propTypes = {
    modalShow: PropTypes.bool.isRequired,
    setModalShow: PropTypes.func.isRequired,
    setWoeid: PropTypes.func.isRequired
}