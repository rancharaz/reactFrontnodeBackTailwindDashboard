import React, { } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Nav = () => {

    const auth = localStorage.getItem('user');/* get user data by localstorage */
    const navigate = useNavigate();/* navigate from page to page hook */
    const logout = () => {
        localStorage.clear();
        navigate("/sign-up")
    }
    return (
        <>
        {/* if user true show first part if user not true show signup and login menu */}
            <nav className='menuTop'>
                <div className="logo">
{/*                 Username: {JSON.parse(auth).name}
 */}                </div>
                {auth ? <ul className='flex'>
                    <Link to="/">Product</Link>
                    <Link to="/add-product">Add Product</Link>
                    <Link to="/update-product">Update Product</Link>
                    <Link to="/profile">Profile</Link>
                    <Link onClick={logout} to="/sign-up">Logout | Username: {JSON.parse(auth).name} </Link>
                    <li className='text-white ml-6'></li>
                    

                </ul> :
                    <ul>
                        <Link to="/sign-up">Sign up</Link>
                        <Link to="/login">Login</Link>

                    </ul>
                }
            </nav>
        </>
    )
}

export default Nav