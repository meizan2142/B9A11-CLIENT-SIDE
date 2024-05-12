import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import AllJobs from "../Pages/AllJobs";
import Register from "../Pages/Register";
import Login from "../Pages/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                errorElement: <ErrorPage></ErrorPage>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/alljobs',
                element: <AllJobs></AllJobs>
            },

        ]
    },
]);
export default router;