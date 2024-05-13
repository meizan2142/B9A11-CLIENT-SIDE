import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import AllJobs from "../Pages/AllJobs";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import AddJobs from "../Pages/AddJobs";
import MyJobs from "../Pages/MyJobs";
import Update from "../Pages/Update";
import AppliedJobs from "../Pages/AppliedJobs";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                errorElement: <ErrorPage></ErrorPage>,
                loader: () => fetch('/team.json')
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
            {
                path: '/appliedjobs',
                element: <AppliedJobs></AppliedJobs>
            },
            {
                path: '/addjobs',
                element: <AddJobs></AddJobs>
            },
            {
                path: '/myjobs',
                element: <MyJobs></MyJobs>
            },
            {
                path: '/updatejobs',
                element: <Update></Update>
            },
        ]
    },
]);
export default router;