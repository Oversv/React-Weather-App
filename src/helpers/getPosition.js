import getWoeidByCoords from "./getWoeidByCoords";

/**
 * Set a state with the woeid, the woeid is from your current position
 * @param {state function} fnState 
 */
const getPosition =  (fnState) =>{

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
  
    const success = (pos) => {
      const crd = pos.coords;
      getWoeidByCoords(crd.latitude, crd.longitude, fnState)
    };
  
    const error = (err) => {     
      getWoeidByCoords(38.71667, -9.13333, fnState) //By Default
      console.warn('ERROR(' + err.code + '): ' + err.message);
    };
  
    navigator.geolocation.getCurrentPosition(success, error, options);
}

export default getPosition