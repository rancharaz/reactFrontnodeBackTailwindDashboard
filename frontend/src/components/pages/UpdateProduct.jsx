import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const UpdateProduct = () => {

  /* state as variable and function to manipulate */
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [category, setCategory] = useState("")
  const [company, setCompany] = useState("")

  /* get id by url by useParams */
  const params = useParams();

  /* useNavigate to go to pages */
  const navigate = useNavigate()

  /* lifecycle */
  useEffect(() => {
    getProductDetails();
  }, [])


  /* get product to show which one is being updated  */
  const getProductDetails = async () => {
    let result = await fetch(`http://localhost:8080/api/product/${params.id}`);
    result = await result.json(); /* data inside result variable */

    /* insert into var in useState hook part / note that it will be in the value part in form */
    setName(result.name);
    setPrice(result.price);
    setCategory(result.category);
    setCompany(result.company)
  }
  
  /* function to update products  */
  const handleupdate = async () => {
    /* get product by id */
    let result = await fetch(`http://localhost:8080/api/product/${params.id}`, {
      method: "PUT", /* put method for update */
      body: JSON.stringify({ name, price, category, company }), /* body for data */
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Access-Control-Allow-Headers, Content-Type, Authorization',
        'Access-Control-Allow-Methods': '*',
        "Content-Type": "application/json"
      }
    })
    result = await result.json();
    console.log(result);
    /* once update go to homepage */
    navigate("/")
  }



  return (
    <div>
      <div className='add-product'>
        <form >
          <h1>Update product</h1>

          <label className="form-input">
            <input type="text" className='input' onChange={(e) => setName(e.target.value)} value={name} name="" id="" placeholder='Enter product name' />
          </label>

          <label className="form-input">
            <input type="text" className='input' onChange={(e) => setPrice(e.target.value)} value={price} name="" id="" placeholder='Enter price' />
          </label>

          <label className="form-input">
            <input type="text" className='input' onChange={(e) => setCategory(e.target.value)} value={category} name="" id="" placeholder='Enter Category' />
          </label>

          <label className="form-input">
            <input type="text" className='input' onChange={(e) => setCompany(e.target.value)} value={company} name="" id="" placeholder='Enter company' />
          </label>

          <br></br>
          <button onClick={handleupdate} className='btn' type='button'>Update product</button>
        </form>

      </div>

    </div>
  )
}

export default UpdateProduct