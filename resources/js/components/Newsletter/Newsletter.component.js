import React from "react";

const Newsletter = ({
    pageSection,
    onSubmit,
    register,
    handleSubmit,
    errors = {},
    signUpStatus,
    signUpSuccess,
}) => {
    const { title, text } = pageSection;

    return (
        <section className="p-32 bg-blue-1">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex justify-between"
            >
                <div className="max-w-240px">
                    <h3 className="text-white">{title}</h3>
                    <p>{text}</p>
                </div>
                <div>
                    <input
                        type="text"
                        placeholder="jane.smith@example.com"
                        {...register("email", {
                            required: true,
                            pattern: /^\S+@\S+$/i,
                        })}
                    />
                    {signUpStatus ? (
                        <span>{signUpStatus}</span>
                    ) : (
                        errors.email && (
                            <span>Please enter a valid email address</span>
                        )
                    )}
                </div>
                <input type="submit" disabled={signUpSuccess}/>
            </form>
        </section>
    );
};

export default Newsletter;
