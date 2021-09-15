import React, { useState, useEffect}  from 'react';
const Capsule = props => {
    var id = props.match.params.id
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [capsule, setCapsule] = useState([]);
    
    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/capsules/" + id)
            .then(res => res.json())
            .then(
                (data) => {
                    console.log(data);
                    setCapsule(data);
                    setIsLoaded(true);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
    if (error) {
        return <div>Error: {error.message}</div>;
    }
    if (!isLoaded) {
        return <div>Loading...</div>;
    }  
    
    if (capsule) {
        return (
            <div>
                <h1>{capsule.capsule_serial}</h1>
                <div>
                    ID: {capsule.capsule_id}
                </div>
                <div>
                    Status: {capsule.status}
                </div>
                <div>
                    Original Lunch: {capsule.original_launch}
                </div>
                <div>
                    Details : {capsule.details}
                </div>
            </div>
        );
    }
}
export default Capsule;