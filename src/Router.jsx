import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./ErrorPage";
import Admin from "./Admin";


const Router = () => {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/admin",
      element: <Admin />,
      errorElement: <ErrorPage />,
    },

  ]);

  return <RouterProvider router={router} />;
};

export default Router;
