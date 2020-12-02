import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types';
import { getStorage } from '../../helpers/localStorage';
import { v4 as id } from 'uuid';
import LocationItem from './LocationItem';
import { MdClose } from 'react-icons/md';
import FormLocation from './FormLocation';

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
    z-index: 100;

    @media (min-width: 1024px) {
        width: 460px;         
    }
`;
const CloseModal = styled.p`
    position: absolute;
    top: -10px;
    right: 17px;    
    cursor: pointer;   
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

    const [storage, setStorage] = useState(getStorage())
    const handleModal = () => setModalShow(false)

    return (        
       <>
            <Modal modalShow={modalShow}>
                <CloseModal onClick={handleModal}><MdClose size="1.4em"/></CloseModal>
                
                <FormLocation 
                    setStorage={setStorage}
                    setWoeid={setWoeid}
                />

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

export default React.memo(ModalSearchCity)