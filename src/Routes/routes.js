import { createBrowserRouter } from "react-router-dom";
import Blog from "../Components/Blog/Blog";
// import Course from "../Components/Course/Course";
import CourseDetails from "../Components/CourseDetails/CourseDetails";
import Details from "../Components/Details/Details";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import { Faq } from "../Components/FAQ/FAQ";
import Home from "../Components/Home/Home";
import Premium from "../Components/Premium/Premium";
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
                element: <Home></Home>,
                loader: () => fetch(`https://web-course-server.vercel.app/details`)
            },
            {
                path: '/course/:id',
                element: <Details></Details>,
                loader: ({params}) => fetch(`https://web-course-server.vercel.app/course/${params.id}`)
            },
            {
                path: '/details/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({params}) => fetch(`https://web-course-server.vercel.app/details/${params.id}`)
            },
            {
                path: '/detail/:id',
                element: <Premium></Premium>,
                loader: ({params}) => fetch(`https://web-course-server.vercel.app/details/${params.id}`)
            },
            {
                path: '/faq',
                element: <Faq></Faq>
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