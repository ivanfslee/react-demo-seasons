import { useState, useEffect } from 'react';

export default () => {
    //declare 2 pieces of state using useState
    const [lat, setLat] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    //useEffect 
    useEffect(() => {
        window.navigator.geolocation.getCurrentPosition(
            position => setLat(position.coords.latitude),
            err => setErrorMessage(err.message)
        );
    }, []); //empty array arg means run function only one time in total for the entire lifecycle of the component

    
    //return { lat: lat, errorMessage: errorMessage } - we can return an obj
    return [lat, errorMessage] //but community convention is returning an array
};