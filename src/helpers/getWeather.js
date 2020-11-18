/**
 * Set a state with the weather of woeid
 * @param {number} woeid 
 * @param {state function} fnState 
 */
const getWeather = async (woeid, fnState) =>{    
  
    fnState({
        isLoading: true,
        error: null,
        data: null,
    })

    if(woeid !== 0){
       
        const url = `https://www.metaweather.com/api/location/${woeid}/` 
        const proxyurl ='https://cors-anywhere.herokuapp.com/'; 
    
        try {
            const resp = await fetch(proxyurl + url )
            const data = await resp.json()

            fnState({
                isLoading: false,
                error: null,
                data
            })
            
        } catch (error) {
            fnState({
                isLoading: false,
                error,
                data: null,
            })
            console.warn(error)
        }
    }   
}

export default getWeather