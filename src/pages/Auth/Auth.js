import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import logo from './logo.svg';
import { LockClosedIcon } from '@heroicons/react/solid'
import { ExclamationCircleIcon, XIcon } from '@heroicons/react/outline'

function Auth() {
    /* State */
    const [authData, setAuthData] = useState({
        email: "",
        password: ""
    })
    const [errorState, setErrorState] = useState(false);
    const dispatch = useDispatch();

    /* Handler */
    const handleInputChange = (e) => {
        setAuthData({
            ...authData,
            [e.target.name]: e.target.value
        });
    }

    const authHandler = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8000/auth/login", authData);
            dispatch({
                type: "LOGIN",
                payload: {
                    userId:response.data.content._id,
                    token: response.data.content.token
                }
            })
            localStorage.setItem("authData", JSON.stringify({
                userId: response.data.content._id,
                token: response.data.content.token
            }))
        } catch (err) {
            setErrorState(true);
        }
    }

    return (
        <>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <img
                            className="mx-auto h-24 w-auto"
                            src={logo}
                            alt="Logo"
                        />
                        <h2 className="text-center text-3xl font-bold text-gray-900 pt-2">Sign in to your account</h2>
                    </div>
                    <div className="w-full bg-white p-8 border border-gray-200 rounded-lg shadow-md">
                        <form className="space-y-6" method="POST">
                            <div className="rounded-lg shadow-sm">
                                <div>
                                    <label htmlFor="email-address">
                                        Email address
                                    </label>
                                    <input 
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        value={authData.email}
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 mt-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-green-800 focus:border-green-800 focus:z-10 sm:text-sm"
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div className="mt-4">
                                    <label htmlFor="password">
                                        Password
                                    </label>
                                    <input 
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        value={authData.password}
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 mt-1 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-green-800 focus:border-green-800 focus:z-10 sm:text-sm"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input 
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                                        Remember me
                                    </label>
                                </div>
                                <div className="text-sm">
                                    <a href="#" className="font-medium text-green-600 hover:text-green-700">
                                        Forgot your password?
                                    </a>
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-700 shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
                                    onClick={authHandler}
                                >
                                    <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                        <LockClosedIcon className="h-5 w-5 text-green-600 group-hover:text-green-900" aria-hidden="true"/>
                                    </span>
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div role="alert" className={`mt-16 sm:mt-6 mb-6 sm:mb-0 absolute left-0 sm:left-auto right-0 sm:top-0 flex items-center justify-between bg-white dark:bg-gray-800 shadow-lg rounded transition ease-in-out ${errorState ? 'p-4 mx-auto sm:mr-6 xl:w-1/4 sm:w-2/5 md:w-1/2 w-11/12 translate-show' : 'translate-hide w-0 overflow-hidden'}`}>
                <div className="sm:px-2 p-1 mt-1 sm:mt-0 ml-2 sm:ml-0 flex items-center h-5 sm:h-auto text-red-500">
                    <ExclamationCircleIcon className="w-5 h-5 mr-1"/>
                    Wrong Email or Password
                </div>
                <button 
                    onClick={() => setErrorState(false)}
                >
                    <XIcon className="w-5 h-5"/>
                </button>
            </div>

            <style>
                {`
                    .translate-show {
                        transform: translateX(0%);
                    }
                    .translate-hide {
                        transform: translateX(120%);
                    }
                `}
            </style>
        </>
    )
}

export default Auth;