import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [capsules, setCapsules] = useState([]);
    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/capsules/")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setCapsules(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [])
if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <ul>
                {capsules.map(capsule => (
                <li key={capsule.id}>
                    <Link to={`capsule/${capsule.capsule_serial}`}>{capsule.capsule_serial}</Link>
                </li>
                ))}
            </ul>
        );
    }
}
export default Home;