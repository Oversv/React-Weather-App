/**
 * Change the state for a woeid
 * @param {string} location 
 * @param {state function} fnState 
 */
const getWoeidByLocation = async (location, fnState) =>{
    
    if(location !== '') {

        fnState({
            isLoading: true,
            error: null,
            woeid: 0      
        })
    
        const url = `https://www.metaweather.com/api/location/search/?query=${location}` 
        const proxyurl ='https://cors-anywhere.herokuapp.com/'; 
    
        try {
            const resp = await fetch(proxyurl + url )
            const data = await resp.json()
            
            fnState({
                isLoading: false,
                error: null,
                woeid: data[0].woeid
            })       
            
        } catch (error) {                      
            fnState({
                isLoading: false,
                error: true,
                woeid: 0                
            })
            console.warn(`${error}: Location not found`)
        }
    }   
}

export default getWoeidByLocation

