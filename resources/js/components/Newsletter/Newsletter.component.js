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
        <section className="p-4 py-16 md:p-28 bg-blue-1">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex justify-between items-center flex-col md:flex-row"
            >
                <div className="md:max-w-240px mb-6 md:mb-0">
                    <h3 className="text-white mb-1">{title}</h3>
                    <p>{text}</p>
                </div>
                <div className="w-full md:w-60 flex flex-col">
                    <input
                        className="w-full md:w-60 mb-6 md:mb-0 bg-blue-1 focus:outline-none md:flex md:justify-center border-b border-purple-1 pb-4 text-white"
                        type="text"
                        placeholder="e.g. jane.smith@example.com"
                        {...register("email", {
                            required: true,
                            pattern: /^\S+@\S+$/i,
                        })}
                    />
                    {signUpStatus ? (
                        <span className={`mb-6 md:mb-0 text-red-500 ${signUpSuccess?'text-green-400':'text-red-500'}`}>
                            {signUpStatus}
                        </span>
                    ) : (
                        errors.email && (
                            <span className="mb-6 md:mb-0 text-red-500">
                                Please enter a valid email address
                            </span>
                        )
                    )}
                </div>
                <div className="w-full border-2 border-blue-2 border-solid rounded-full p-1 md:max-w-xs">
                    <input className="bg-blue-2 w-full rounded-full text-white p-2" type="submit" disabled={signUpSuccess} />
                </div>
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
