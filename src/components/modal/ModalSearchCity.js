import React, { useState } from 'react'
import styled from 'styled-components'
import getWoeidByLocation from '../../helpers/getWoeidByLocation';
import PropTypes from 'prop-types';
import { getStorage, addStorage } from '../../helpers/localStorage';
import { v4 as id } from 'uuid';
import LocationItem from './LocationItem';
import { MdClose, MdSearch } from 'react-icons/md';


const Modal = styled.div`
    position: fixed;
    top: 0;
    left: 0;     
    width: 100vw;
    height: 100vh;
    background-color: ${({theme}) =>theme.first};
    color: #E7E7EB;
    transform: ${({modalShow}) => modalShow ? 'scale(1)' : 'scale(0)'};  
    transition: transform .3s;  
`;

const CloseModal = styled.p`
    position: absolute;
    top: -10px;
    right: 17px;    
    cursor: pointer;   
`
const Form = styled.form`
    margin-top: 60px;
    display: flex;
    justify-content: space-evenly;
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
const List = styled.ul`
    width: 94%; 
    list-style: none;
    text-transform: capitalize;
    padding: 0;
    margin: 5px auto;
    color: ${({theme}) => theme.fourth};
`

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
                <CloseModal onClick={handleModal}><MdClose size="1.4em"/></CloseModal>
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

                <List>
                    {
                        storage.map(locationStorage =>                   
                            <LocationItem 
                                key={id()}
                                locationStorage={locationStorage}
                                setWoeid={setWoeid}
                            />
                        )
                    }
                </List>

            </Modal>
        </>
    )
}

ModalSearchCity.propTypes = {
    modalShow: PropTypes.bool.isRequired,
    setModalShow: PropTypes.func.isRequired,
    setWoeid: PropTypes.func.isRequired
}