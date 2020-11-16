/**
 * Change the state for a woeid
 * @param {number} latitude 
 * @param {number} longitude 
 * @param {state function} fnState 
 */
const getWoeidByCoords = async (latitude, longitude, fnState) =>{
   
    if(latitude !== null || longitude !== null){
    
        const url = `https://www.metaweather.com/api/location/search/?lattlong=${latitude},${longitude}` 
        const proxyurl = 'https://cors-anywhere.herokuapp.com/'; 
    
        try {
            const resp = await fetch(proxyurl + url )
            const data = await resp.json()
       
            fnState(data[0].woeid)
            
        } catch (error) {
            console.warn(error)
        }
    }   
}

export default getWoeidByCoords