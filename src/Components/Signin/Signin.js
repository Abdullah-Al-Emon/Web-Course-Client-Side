import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa'
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth'

const Signin = () =>
{
    const googleProvider = new GoogleAuthProvider()
    const githubProvider = new GithubAuthProvider();
    const [error, setError] = useState('')
    const { signIn, googleLogIn } = useContext(AuthContext)


    const handleSubmit = (e) =>
    {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result =>
            {
                const user = result.user;
                console.log(user)
                form.reset()
                if (user.emailVerified) {
                    toast.success('Your email is Sign In')
                }

            })
            .catch(error =>
            {
                console.error(error)
                setError(error.message)
            })
        // .finally(() =>
        // {
        //     setLoading(false)
        // })
    }

    const handleGoogleSignIn = () =>
    {
        googleLogIn(googleProvider)
            .then((result) =>
            {
                const user = result.user;

                console.log(user)
            }).catch((error) =>
            {
                console.log(error);
            })
    }

    const handleGithubSignIn = () =>
    {
        googleLogIn(githubProvider)
            .then((result) =>
            {
                const user = result.user;

                console.log(user)
            }).catch((error) =>
            {
                console.log(error);
            })
    }

    return (
        <div className="bg-opacity-75">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col items-center justify-center xl:flex-row">
                    <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
                        <div className="bg-white rounded shadow-2xl md:mb-40 mb-10 p-7 sm:p-10">
                            <h3 className="mb-4 text-gray-900 text-xl font-semibold sm:text-center sm:mb-6 sm:text-3xl">
                                Sign In
                            </h3>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-1 sm:mb-2">
                                    <label
                                        htmlFor="email"
                                        className="inline-block text-gray-900 mb-1 font-medium"
                                    >
                                        E-mail
                                    </label>
                                    <input
                                        placeholder="Enter Your E-mail"
                                        required
                                        type="text"
                                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 text-black bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                        id="email"
                                        name="email"
                                    />
                                </div>
                                <div className="mb-1 sm:mb-2">
                                    <label
                                        htmlFor="password"
                                        className="inline-block text-gray-900 mb-1 font-medium"
                                    >
                                        Password
                                    </label>
                                    <input
                                        placeholder="Enter Your Password"
                                        required
                                        type="password"
                                        className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 text-black bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                                        id="password"
                                        name="password"
                                    />
                                </div>
                                <div className='text-red-500'>
                                    {error}
                                </div>
                                <div className="mt-4 mb-2 sm:mb-4">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                    >
                                        Sign In
                                    </button>
                                </div>
                                <div className="mt-4 mb-2 sm:mb-4">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium text-black tracking-wide border bg-slate-50 transition duration-200 rounded shadow-md hover:bg-purple-400 focus:shadow-outline focus:outline-none"
                                        onClick={handleGoogleSignIn}
                                    >
                                        <FaGoogle className='mr-2'></FaGoogle>
                                        Google Sign In
                                    </button>
                                </div>
                                <div className="mt-4 mb-2 sm:mb-4">
                                    <button
                                        type="submit"
                                        className="inline-flex items-center justify-center w-full h-12 px-6 font-medium text-black tracking-wide border bg-slate-50 transition duration-200 rounded shadow-md hover:bg-purple-400 focus:shadow-outline focus:outline-none"
                                        onClick={handleGithubSignIn}
                                    >
                                        <FaGithub className='mr-2'></FaGithub>
                                        Github Sign In
                                    </button>
                                </div>
                                <p className="text-gray-900">
                                    New to Web Courses <Link to='/signup' className='underline underline-offset-1 '>Create a New Account</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;