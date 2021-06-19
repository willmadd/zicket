import React from 'react';
import Newsletter from './Newsletter.component';
import { useForm } from "react-hook-form";


const NewsletterContainer = (props) => {

    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    
    const containerProps = {
        onSubmit,
        register,
        handleSubmit,
        errors
    }

console.log('9999',handleSubmit);

    const onSubmit = (data) => console.log('123',data);

    return (
        <Newsletter {...containerProps} {...props}/>
    );
};

export default NewsletterContainer;