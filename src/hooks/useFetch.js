import { useState, useEffect, useRef } from 'react';

export const useFetch = ( url ) => {
    
    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect( () => {      
        return () => {
            isMounted.current = false;            
        }
    }, [])
    

    useEffect( () => {

        setState({ data: null, loading: true, error: null });
        //!Eliminar al subir
        //const proxyurl = "https://cors-anywhere.herokuapp.com/";
        
        fetch( url )
            .then( resp => resp.json())
            
            .then( data => {
                console.log(isMounted.current)
                if ( isMounted.current ) {
                  
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                }

            });

    },[url])

    return state;
}