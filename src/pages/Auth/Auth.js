import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

function Auth() {
    const [authData, setAuthData] = useState({
        email: "",
        password: "",
    })

    const dispatch = useDispatch()

    const handleInputChange = (e) => {
        setAuthData({ ...authData, [e.target.name]: e.target.value })
    }

    function testRequest() {
        return  new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve({
                    content: {
                        _id: "123",
                        role: "admin",
                        email: "1",
                        password: "123",
                        token: "1234"
                    },
                });
            }, 2000);
        });
    } 


    const authHandler = async (e) => {
        e.preventDefault()
        let responseData = await testRequest()
        console.log(responseData)
        dispatch({
            type: "LOGIN",
            payload: responseData.content
        })

        // send request here
        localStorage.setItem("authData", JSON.stringify({ userId: 1, token: '2' }))
    }
    return (
        <div>
            <h2> Log In</h2>
            <form>
                <input type="text" name="email" placeholder="Email..." onChange={handleInputChange} />
                <input type="text" name="password" placeholder="Password..." onChange={handleInputChange} />
                <button type="button" onClick={authHandler}>Login</button>
            </form>

        </div>
    )

}

export default Auth