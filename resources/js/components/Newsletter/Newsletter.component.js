import React from "react";
import PropTypes from "prop-types";

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
                className="flex justify-between items-center"
            >
                <div className="max-w-240px">
                    <h3 className="text-white mb-1">{title}</h3>
                    <p>{text}</p>
                </div>
                <div>
                    <input
                        className="w-60"
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
                <input type="submit" disabled={signUpSuccess} />
            </form>
        </section>
    );
};

export default Newsletter;

Newsletter.propTypes = {
    pageSection: PropTypes.shape({
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }),
    onSubmit: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    errors: PropTypes.object,
    signUpStatus: PropTypes.string,
    signUpSuccess: PropTypes.bool.isRequired,
};
