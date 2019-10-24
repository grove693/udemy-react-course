import { useState, useEffect } from 'react';



export default () => {



    const [lat, setLat] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        console.log('My component was rendered to the screen');
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //we called setState to update the state
                setLat(position.coords.latitude)
            },
            (err) => {
                setErrorMessage(err.message);
            }
        );
    }, []);

    return [lat,errorMessage];
}