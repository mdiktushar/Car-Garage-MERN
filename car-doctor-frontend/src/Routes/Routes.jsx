import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Auth/Login/Login";
import SignUp from "../Pages/Auth/SignUp/SignUp";
import Checkout from "../Pages/Checkout/CheckOut";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

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
        element: <h1>Blog</h1>,
      },
      {
        path: `/login`,
        element: <Login />,
      },
      {
        path: `/signup`,
        element: <SignUp />,
      },
      {
        path: `/checkout/:id`,
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
        loader: async ({ params }) =>
          await fetch(`http://localhost:5000/service/${params.id}`),
      },
      {
        path: `/Bookings`,
        element: (
          <PrivateRoute>
            <Bookings />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
