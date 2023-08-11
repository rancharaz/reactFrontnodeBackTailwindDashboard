import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'


const PrivateComponent = () => {
    const auth = localStorage.getItem('user');/* get user data by localstorage */
    return auth  ? <Outlet /> : <Navigate to="/sign-up"/>
    /* if data in localStorage go through the pages in oulet Private component in App.js else navigate to signup */
}

export default PrivateComponent