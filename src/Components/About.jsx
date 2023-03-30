import React from 'react';
import { useParams } from 'react-router-dom';


const About = () => {
    const {user_id} = useParams();
    console.log(user_id, 'user_id');

    
    return (
        <div>
            <h1>About</h1>
        </div>
    );
}

export default About;