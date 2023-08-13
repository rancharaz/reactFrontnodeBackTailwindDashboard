import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const AddProduct = () => {

    /* state as variable and function to manipulate */
    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    const [company, setCompany] = useState("")
    const [error, setError] = useState(false);


    /* useNavigate to go to pages */
    const navigate = useNavigate()


    /* add product function */
    const handleProduct = async () => {

        /* form validation before post */
        if (!name || !price || !category || !company) {
            setError(true)
            return false;
        }

        /* post data part of the function */
        const userId = JSON.parse(localStorage.getItem('user'))._id /* getting id from localstorage */
        let result = await fetch("http://localhost:8080/api/add-product", {
            method: "POST",
            headers: {
                "authorization": `brearer ${JSON.parse(localStorage.getItem("token"))}`,/* auth token */
                "Content-Type": "application/json"
              },
            body: JSON.stringify({ name, price, category, company, userId })/* pass data post to string */
        })
        result = await result.json();/* reset to json */
        
        /* once added go to homepage */
        if (result) {
            navigate("/")
        }
        
    }

    return (
        <div className='add-product '>
            <form >
                <h1>Add product</h1>
                <label className="form-input">
                    <input type="text" className='input' onChange={(e) => setName(e.target.value)} value={name} name="" id="" placeholder='Enter product name' />
                </label>

                {/* if error and name is false show error message  */}
                {error && !name && <span className='error'>Enter valid name</span>}

                <label className="form-input">
                    <input type="text" className='input' onChange={(e) => setPrice(e.target.value)} value={price} name="" id="" placeholder='Enter price' />
                </label>

                {/* if error and price is false show error message  */}
                {error && !price && <span className='error'>Enter valid price</span>}

                <label className="form-input">
                    <input type="text" className='input' onChange={(e) => setCategory(e.target.value)} value={category} name="" id="" placeholder='Enter Category' />
                </label>

                {/* if error and category is false show error message  */}
                {error && !category && <span className='error'>Enter valid category</span>}

                <label className="form-input">
                    <input type="text" className='input' onChange={(e) => setCompany(e.target.value)} value={company} name="" id="" placeholder='Enter company' />
                </label>

                {/* if error and company is false show error message  */}
                {error && !name && <span className='error '>Enter valid company</span>}

                <br></br>
                <button onClick={handleProduct} className='btn' type='button'>Add product</button>
            </form>

        </div>
    )
}

export default AddProduct