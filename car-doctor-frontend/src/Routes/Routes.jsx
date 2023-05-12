import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login/Login";
import SignUp from "../Pages/Auth/SignUp/SignUp";

const router = createBrowserRouter([
    {
        path: `/`,
        element: <MainLayout />,
        children: [
            {
                path: `/`,
                element: <Home />,
            },
            {
                path: `/blog`,
                element: <h1>Blog</h1>
            },
            {
                path: `/login`,
                element: <Login />
            },
            {
                path: `SignUp`,
                element: <SignUp />
            }
        ]
    }
]);

export default router;
