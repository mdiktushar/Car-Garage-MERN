import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";

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
            }
        ]
    }
]);

export default router;
