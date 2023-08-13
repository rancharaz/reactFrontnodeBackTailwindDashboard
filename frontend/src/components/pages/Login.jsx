import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    useEffect(() => {
        const auth = localStorage.getItem('user');/* get user data by localstorage */
        if(auth ) {
            navigate("/")
        }
    })

    /* login function */
    const handleLogin = async () => {
        let result = await fetch("http://localhost:8080/api/login", {
            method: "POST",
            body: JSON.stringify({email, password }),/* data to string */
            headers: {
                "Content-Type": "application/json"
            }
        })
        result = await result.json();/* get data to json */
        console.warn(result);
        /* if data true */
        if(result.auth){
            localStorage.setItem("user", JSON.stringify(result.user)); /* user is in result */
            localStorage.setItem("token", JSON.stringify(result.auth)); /* getting the token from backend */

            navigate("/")
        } else {
            alert("Please enter correct details")
        }
    }


    return (
        <div className='login'>
            <form>
                <h1>Login</h1>

                <label className="form-input">
                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} className='input' name="name" id="name" placeholder='Enter Email' />
                </label>
                <label className="form-input">
                    <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className='input' name="name" id="password" placeholder='Enter Password' />
                </label>
                <button onClick={handleLogin} className='btn' type='button'>Login</button>


            </form>
        </div>
    )
}

export default Login