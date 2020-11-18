const getStorage = () =>{

    const data = JSON.parse(localStorage.getItem('location'))   
    
    if(data === null){
        localStorage.setItem('location', JSON.stringify([]))
        
        return JSON.parse(localStorage.getItem('location'))   
    }

    return data.reverse()
}

const addStorage = (newElement) =>{

    let data = getStorage().reverse()  

    data = [...data, newElement]

    if(data.length > 5){
        data = data.slice(-5)
    }

    localStorage.setItem('location', JSON.stringify(data))
}


export {
    getStorage,
    addStorage
}