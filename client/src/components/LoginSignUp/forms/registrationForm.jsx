import React from 'react';
import { useForm } from "react-hook-form";
import { loginPageConstants, registrationFormConstants } from '../../../constants';

function RegistrationForm({ setFromEnabler, showToast }) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {

        const userData = JSON.stringify({
            "name": data.name,
            "password": data.password
        })
        sessionStorage.setItem(loginPageConstants.USER_INFO_SS, userData);
        setFromEnabler(false);
        // showToast(registrationFormConstants.USER_REGISTERED_MSG);

    };


    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="login-fom-con"
        >
            <h2 id="lf-title"> E Land Registration </h2>
            <label
                htmlFor={registrationFormConstants.NAME}
            >
                User Name*
            </label>
            <input
                {...register('name', { required: true, maxLength: 30 })}
                type="text"
                id={registrationFormConstants.NAME}
                placeholder={"Enter " + registrationFormConstants.NAME}
                autoComplete="off"
                className='w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism'
            />
            {errors.name && errors.name.type === "required" && <span>This is required</span>}
            {errors.name && errors.name.type === "maxLength" && <span>Max length exceeded</span>}
            <label
                htmlFor={registrationFormConstants.EMAIL}
            >
                Email Name*
            </label>
            <input
                {...register('email', { required: true, maxLength: 30 })}
                type="text"
                id={registrationFormConstants.EMAIL}
                placeholder={"Enter " + registrationFormConstants.EMAIL}
                autoComplete="off"
                className='w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism'
            />
            {errors.email && errors.name.type === "required" && <span>This is required</span>}
            {errors.email && errors.name.type === "maxLength" && <span>Max length exceeded</span>}
            <label
                htmlFor={registrationFormConstants.PASSWORD}
            >
                Password*
            </label>
            <input
                {...register('password', { required: true, maxLength: 30 })}
                type="password"
                id={registrationFormConstants.PASSWORD}
                placeholder={"Enter " + registrationFormConstants.PASSWORD}
                className='w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism'
            />
            {errors.password && errors.password.type === "required" && <span>This is required</span>}
            {errors.password && errors.password.type === "maxLength" && <span>Max length exceeded</span>}
            <input
                type="submit"
                name="submit"
                id="submit"
                value={"Sign Up"}
                className='w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism'
            />
            <p> Already have an account ?</p>
        </form >
    )
}

export default RegistrationForm