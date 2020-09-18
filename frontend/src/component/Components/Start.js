import React, { useState } from 'react';
import Login from '../Components/login';
import ViewClaim from '../Components/view_claim';
const Start = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm(){
        setIsSubmitted(true);
    }
    return (
        <div>
            {isSubmitted?(<ViewClaim/>):(<Login submitForm={submitForm}/>)}
        </div>
    );
};

export default Start;