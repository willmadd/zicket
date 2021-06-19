import React, { useState } from "react";

const Newsletter = ({ pageSection, index, onSubmit, register, handleSubmit, errors={} }) => {
console.log(handleSubmit, onSubmit);
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input
                type="text"
                placeholder="Email"
                {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                })}
            />
            {errors.email && <span>Please enter a valid email address</span>}
            <input type="submit" />
        </form>
    );
};

export default Newsletter;
