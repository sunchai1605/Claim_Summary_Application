import { useState, useEffect } from 'react';

const useForm = (submitForm,validate) => {
    
    const[user, setuser] = useState({
        username:'',
        password:''
    })
    const[isSubmitted, setIsSubmitted] = useState(false);
    const[errors, setErrors] = useState({});

    const handleChange = (e) => {
        console.log("handle change executed in use form")
        const {name, value}=e.target;
        setuser({
            ...user,
            [name]:value
        })
    }
    const handleSubmit = (e)=>{
        
         e.preventDefault();
         console.log(user);
         //validations
         setIsSubmitted(true);
         setErrors(validate(user));
         console.log("handle Submit method executed in use Form");
    }
    useEffect(() => {
        console.log("UseEffect executed", isSubmitted);
        if( Object.keys(errors).length===0 && isSubmitted){

            submitForm();

        }
       
    },[errors, isSubmitted, submitForm])
    return {handleSubmit, handleChange, user, errors}
    
};

export default useForm;