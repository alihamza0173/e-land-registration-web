import { useRouteError } from "react-router-dom";

import errorImg from "../assets/images/error.jpg"

export default function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div id="error-page" className="d-flex flex-column justify-content-center align-items-center text-white">
            {/* <img width="150" className="my-2" src={errorImg} alt="" style={{borderRadius: "30%"}} /> */}
            <h1>Oops! </h1>
            <pre> Sorry, an unexpected error has occurred.</pre>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}