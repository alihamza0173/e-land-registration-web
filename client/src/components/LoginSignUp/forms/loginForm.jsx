import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  loginFormConstants,
  registrationFormConstants,
  TOKEN,
  collectionConstants,
  systemConstants,
} from "../../../constants";
import Spinner from "../../shared/Spinner";
import { getCollection } from "../../../config/firebaseOperations/getDocs";
import { showToast } from "../../shared/Toast";

function LoginForm(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [isSpinning, setIsSpinning] = useState(false);
  // // Handle form submission
  const onSubmit = async (data) => {
    setIsSpinning(() => true);
    const registeredUsers = await getCollection(collectionConstants.USERS);
    if (registeredUsers.length) {
      // check login info
      const regUser = registeredUsers.find((user) => {
        return user.data.email === data.email;
      });
      if (regUser) {
        if (regUser.data.password === data.password) {
          showToast("Logged in successfully", "success");
          localStorage.setItem(systemConstants.IS_USER_LOGGED_IN, true);
          navigate("/dashboard");
        } else {
          showToast("Username & Password is incorrect", "error");
        }
      } else {
        showToast("User does not exist.", "error");
      }
      setIsSpinning(false);
      return;
    }
    showToast("Something went wrong.", "error");
    setIsSpinning(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="login-fom-con">
        <h2 id="lf-title"> E Land Registration </h2>
        <label htmlFor={loginFormConstants.NAME}>User Name*</label>
        <input
          id={loginFormConstants.NAME}
          placeholder={loginFormConstants.NAME}
          {...register("email", { required: true, maxLength: 30 })}
          type="email"
          autoComplete
          className="w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
        />
        {errors.email && errors.email.type === "required" && (
          <span role="alert">This is required</span>
        )}
        {errors.email && errors.email.type === "maxLength" && (
          <span role="alert">Max length exceeded</span>
        )}
        <label htmlFor={registrationFormConstants.PASSWORD}>Password*</label>
        <input
          id={loginFormConstants.PASSWORD}
          placeholder={loginFormConstants.PASSWORD}
          {...register("password", { required: true, maxLength: 20 })}
          type="password"
          className="w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
        />
        {errors.password && errors.password.type === "required" && (
          <span role="alert">This is required</span>
        )}
        {errors.password && errors.password.type === "maxLength" && (
          <span role="alert">Max length exceeded</span>
        )}

        {isSpinning ? (
          <Spinner />
        ) : (
          <input
            name={loginFormConstants.SUBMIT_LOGIN}
            id={loginFormConstants.SUBMIT_LOGIN}
            value={loginFormConstants.SUBMIT_LOGIN}
            type="submit"
            className="w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
          />
        )}
        <p> Don't have an account ?</p>
      </form>
    </>
  );
}

export default LoginForm;
