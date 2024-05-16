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
import JobDetails from "../Pages/JobDetails";
import PrivateRoute from "./PrivateRoute";
import AllJobDetails from "../Pages/AllJobDetails";
import Blogs from "../Pages/Blogs";
import Access from "../DifferentText/Access";
import Refresh from "../DifferentText/Refresh";
import Express from "../DifferentText/Express";
import NextJs from "../DifferentText/NextJs";
import MyCode from "../DifferentText/MyCode";

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
                element: <AllJobs></AllJobs>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/jobs`)
            },
            {
                path: '/alljobsdetails/:id',
                element: <AllJobDetails></AllJobDetails>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/jobs`)
            },
            {
                path: '/appliedjobs',
                element: <PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>
            },
            {
                path: '/blogs',
                element: <PrivateRoute><Blogs></Blogs></PrivateRoute>
            },
            {
                path: '/addjobs',
                element: <PrivateRoute><AddJobs></AddJobs></PrivateRoute>
            },
            {
                path: '/myjobs',
                element: <PrivateRoute><MyJobs></MyJobs></PrivateRoute>
            },
            {
                path: '/updatejobs',
                element: <PrivateRoute><Update></Update></PrivateRoute>
            },
            {
                path: '/jobdetails/:id',
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/jobs`)
            },
            {
                path: '/access',
                element: <Access></Access>
            },
            {
                path: '/refresh',
                element: <Refresh></Refresh>
            },
            {
                path: '/express',
                element: <Express></Express>
            },
            {
                path: '/nextjs',
                element: <NextJs></NextJs>
            },
            {
                path: '/mycode',
                element: <MyCode></MyCode>
            },
        ]
    },
]);
export default router;