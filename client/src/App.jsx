import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Toast from "./components/shared/Toast";
import Routes from "./Routes";

const App = () => {
  console.log("router", <Routes/>)
  const router = createBrowserRouter(Routes());

  return (
    <>
      <RouterProvider router={router} />
      <Toast />
    </>
  );
};

export default App;
