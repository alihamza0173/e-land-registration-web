import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import {
  loginFormConstants,
  registrationFormConstants,
  TOKEN,
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
    const dataServer = await getCollection("lands");
    if (dataServer.length) {
      showToast("Success");
    } else {
      console.log("server = ", dataServer, "user inp;ut = ", data);
      showToast("Failure", "error");
    }
    setTimeout(()=>{
      setIsSpinning(false);
    }, [5000]);
    // axios.post("https://unixforapi.hazelsoft.net/api/v1/login", {
    //     "userName": data.name,
    //     "password": data.password
    // })
    //     .then((response) => {
    //         props.showToast("welcome to unixfor");

    //         // storing token in local storage
    //         window.localStorage.setItem(TOKEN, response.data.payload.token);

    //         navigate("/adminpage");
    //         props.onLogIn();
    //     })
    //     .finally((err) => {
    //         setIsSpinning(() => false);
    //         console.log(err);
    //         props.showToast(loginFormConstants.WRONG_USER_ERROR);
    //     });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="login-fom-con">
        <h2 id="lf-title"> E Land Registration </h2>
        <label htmlFor={loginFormConstants.NAME}>User Name*</label>
        <input
          id={loginFormConstants.NAME}
          placeholder={loginFormConstants.NAME}
          {...register("name", { required: true, maxLength: 30 })}
          type="email"
          autoComplete
          className="w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
        />
        {errors.name && errors.name.type === "required" && (
          <span role="alert">This is required</span>
        )}
        {errors.name && errors.name.type === "maxLength" && (
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
