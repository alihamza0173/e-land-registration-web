import React, { useState } from "react";
import { useForm } from "react-hook-form";

import {
  loginPageConstants,
  registrationFormConstants,
} from "../../../constants";
import { showToast } from "../../shared/Toast";
import Spinner from "../../shared/spinner";

function RegistrationForm({ setFromEnabler }) {
  const [isSpinning, setIsSpinning] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    setIsSpinning(true);
    const userData = JSON.stringify({
      name: data.name,
      password: data.password,
    });
    sessionStorage.setItem(loginPageConstants.USER_INFO_SS, userData);

    setTimeout(() => {
      showToast(registrationFormConstants.USER_REGISTERED_MSG, "success");
      setFromEnabler(false);
      setIsSpinning(false);
    }, 5000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="login-fom-con">
      <h2 id="lf-title"> E Land Registration </h2>
      <label htmlFor={registrationFormConstants.NAME}>User Name*</label>
      <input
        {...register("name", { required: true, maxLength: 30 })}
        type="text"
        id={registrationFormConstants.NAME}
        placeholder={"Enter " + registrationFormConstants.NAME}
        autoComplete
        className="w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
      />
      {errors.name && errors.name.type === "required" && (
        <span>This is required</span>
      )}
      {errors.name && errors.name.type === "maxLength" && (
        <span>Max length exceeded</span>
      )}
      <label htmlFor={registrationFormConstants.EMAIL}>Email Name*</label>
      <input
        {...register("email", { required: true, maxLength: 30 })}
        type="email"
        id={registrationFormConstants.EMAIL}
        placeholder={"Enter " + registrationFormConstants.EMAIL}
        autoComplete
        className="w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
      />
      {errors.email && errors.name.type === "required" && (
        <span>This is required</span>
      )}
      {errors.email && errors.name.type === "maxLength" && (
        <span>Max length exceeded</span>
      )}
      <label htmlFor={registrationFormConstants.PASSWORD}>Password*</label>
      <input
        {...register("password", { required: true, maxLength: 30 })}
        type="password"
        autoComplete="off"
        id={registrationFormConstants.PASSWORD}
        placeholder={"Enter " + registrationFormConstants.PASSWORD}
        className="w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
      />
      {errors.password && errors.password.type === "required" && (
        <span>This is required</span>
      )}
      {errors.password && errors.password.type === "maxLength" && (
        <span>Max length exceeded</span>
      )}
      {isSpinning ? (
        <Spinner />
      ) : (
        <input
          type="submit"
          name="submit"
          id="submit"
          value={"Sign Up"}
          className="w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
        />
      )}
      <p> Already have an account ?</p>
    </form>
  );
}

export default RegistrationForm;
