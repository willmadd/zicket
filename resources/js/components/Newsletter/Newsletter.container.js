import React, { useState } from "react";
import Newsletter from "./Newsletter.component";
import { useForm } from "react-hook-form";
import * as api from "../../api";

const NewsletterContainer = (props) => {

    const [signUpStatus, setSignUpStatus] = useState("");

    const [signUpSuccess, setSignUpSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const containerState = {
        signUpStatus,
        signUpSuccess
    };

    const onSubmit = (data) => {
        api.submitNewsletterSignUp(data).then((res) => {
            const { message } = res.data;
            setSignUpStatus(message);
            setSignUpSuccess(true);
        })
        .catch(e=>{
            setSignUpStatus(e.message)
        });
    };

    const containerProps = {
        onSubmit,
        register,
        handleSubmit,
        errors,
    };

    return <Newsletter {...containerProps} {...props} {...containerState} />;
};

export default NewsletterContainer;
