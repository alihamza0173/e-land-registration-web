import React, { useState, useEffect } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


import LoginForm from './forms/loginForm.jsx';
import RegistrationForm from './forms/registrationForm.jsx';
import { loginPageConstants } from '../../constants/index.js';
import { useNavigate } from 'react-router';



function LoginScreen(props) {
    // const nevigate = useNavigate();
    const [formEnabler, setFromEnabler] = useState(false);
    // // deleting session storage just so user cannot access this once logged in and if he does, will have to relogin
    // useEffect(() => {
    //     const isLoggedIn = localStorage.getItem(TOKEN);
    //     if (isLoggedIn && props.isLoggedIn) {
    //         nevigate('/adminpage');
    //     }
    //     else {
    //         localStorage.clear();
    //         props.onLogOut();
    //     }
    // }, [])

    // to show toast on screen
    // const showToast = (msg) => {
    //     toast(msg, {
    //         position: "top-right",
    //         autoClose: 5000,
    //         hideProgressBar: false,
    //         closeOnClick: true,
    //         pauseOnHover: true,
    //         draggable: true,
    //         progress: undefined,
    //         theme: "light",
    //     });
    // }

    // setting form switch should work or not
    const handleFormChange = (e) => {
        if (e === loginPageConstants.SIGN_UP && !formEnabler) {
            setFromEnabler(true);
        }
        if (e === loginPageConstants.LOG_IN && formEnabler) {
            setFromEnabler(false);
        }
    }



    return (
        <div className="row gradient-bg-welcome" style={{ "width": "100%", fontSize: "1.3rem", height: "100vh" }}>
            <section id="form-con" className='col-11 col-lg-3 col-md-6 col-sm-8'>
                {formEnabler ?
                    (<RegistrationForm
                        setFromEnabler={setFromEnabler}
                        // showToast={showToast}
                    />

                    ) :
                    (<LoginForm
                        // showToast={showToast}
                    />)
                }
                <span>
                    <input
                        onClick={(e) => handleFormChange(e.target.name)}
                        className={formEnabler ? 'd-none' : 'w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism'}
                        type="button"
                        name={loginPageConstants.SIGN_UP}
                        id={loginPageConstants.SIGN_UP}
                        value={loginPageConstants.SIGN_UP}
                    />

                    <input
                        onClick={(e) => handleFormChange(e.target.name)}
                        className={formEnabler ? 'w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism' : 'd-none'}
                        type="button"
                        name={loginPageConstants.LOG_IN}
                        id={loginPageConstants.LOG_IN}
                        value={loginPageConstants.LOG_IN}
                    />
                </span>
            </section>
            {/* <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
           
            <ToastContainer /> */}
        </div>
    )
}

export default LoginScreen;