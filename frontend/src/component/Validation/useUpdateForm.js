import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

const useUpdateForm = (submitForm, validate2) => {
    let history = useHistory();
    const { id } = useParams();
    const [user, setUser] = useState({
        empid: "",
        name: "",
        claimno: "",
        claimtype: "",
        claimprogram: "",
        startdate: "",
        enddate: ""
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errorMsg, setErrors2] = useState({});

    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value })
    };

    const onSubmit = async e => {
        e.preventDefault();
        setIsSubmitted(true);
        setErrors2(validate2(user));
        // console.log("handle2 Submit method executed in useUpadteForm");
        if (Object.keys(errorMsg).length === 0 && isSubmitted) {
            await axios.put(`http://localhost:4000/postMessages/${id}`, user);
            history.push("/viewclaim");
        }
    };
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async e => {
        const result = await axios.get(`http://localhost:4000/postMessages/${id}`);
        setUser(result.data);
    };
    return { onSubmit, onInputChange, errorMsg, user }
};

export default useUpdateForm;