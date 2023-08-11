import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';/* hook to navigate to pages */



const SignUp = () => {

    /* getting data and manipulate it */
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const navigate = useNavigate();/* navigate from page to page hook */

    useEffect(() => {
        const auth = localStorage.getItem('user');/* get user data by localstorage */
        /* if user true navigate to homepage */
        if(auth ) {
            navigate("/")
        }
    })
/* signup function */
    const signup = async () => {
        let result = await fetch('http://localhost:8080/api/register/', { /* api url */
            method: "POST", 
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Content-Type, Authorization',
                'Access-Control-Allow-Methods': '*',
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, password }),/* data to string */
        })
        result = await result.json();/* return to json */
        console.log(result);
        localStorage.setItem("user", JSON.stringify(result))/* pass data to localstorage */
        /* navigate to homepage once done signup */
        if(result){
            navigate("/")
        }
    }
    
    return (
        /* register form */
        <div className='register '>
            <form>
                <h1>Register</h1>

                <label className="form-input">
                    <input type="text" className='input' onChange={(e) => setName(e.target.value)} value={name} name="name" id="name" placeholder='Enter Name' />
                </label>

                <label className="form-input ">
                    <input type="text" className='input' onChange={(e) => setEmail(e.target.value)} value={email} name="email" id="email" placeholder='Enter Email' required  />
                </label>

                <label className="form-input ">
                    <input type="password" className='input' onChange={(e) => setPassword(e.target.value)} value={password} name="password" id="password" placeholder='Enter Password' required />
                </label>
                     
                <button onClick={signup } className='btn' type='button'>Sign up</button>
              
            </form>
        </div>
    )
}

export default SignUp