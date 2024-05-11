import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import AllJobs from "../Pages/AllJobs";

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
                path: '/alljobs',
                element: <AllJobs></AllJobs>
            },

        ]
    },
]);
export default router;