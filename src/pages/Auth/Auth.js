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

    const authHandler = async (e) => {
        e.preventDefault()
        let response = await axios.post(
            "http://localhost:8000/auth/login", authData
        )
        const responseData = response.data
        console.log(responseData)
        if (responseData.success === true) {

            dispatch({
                type: "LOGIN",
                payload: {
                    userId: responseData.content._id,
                    token: responseData.content.token,
                }
            })
        }
        else
        console.log(responseData)
        localStorage.setItem("authData", JSON.stringify({ userId: responseData.content._id, token: responseData.content.token }))
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