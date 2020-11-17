/**
 * Set a state with the weather of woeid
 * @param {number} woeid 
 * @param {state function} fnState 
 */
const getWeather = async (woeid, fnState) =>{
    
    if(woeid === 0) {
        fnState('')
    }else{
       
        const url = `https://www.metaweather.com/api/location/${woeid}/` 
        const proxyurl ='https://cors-anywhere.herokuapp.com/'; 
    
        try {
            const resp = await fetch(proxyurl + url )
            const data = await resp.json()
       
            fnState(data)
            
        } catch (error) {
            console.warn(error)
        }
    }   
}

export default getWeather