import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
import Course from "../Components/Course/Course";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import FAQ from "../Components/FAQ/FAQ";
import Signin from "../Components/Signin/Signin";
import Signup from "../Components/Signup/Signup";
import Main from "../Layout/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Course></Course>
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/signin',
                element: <Signin></Signin>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            }
        ]
    }
])