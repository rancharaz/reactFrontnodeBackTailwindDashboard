import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

const ProductList = () => {


  const [products, setProduct] = useState("");

/* calling function in lifecyle componentDidMount */
  useEffect(() => {
    getProducts();
  }, [])

  /* create function get all products show it useEffect */
  const getProducts = async () => {
    const result = await fetch("http://localhost:8080/api/product");
    const allProducts = await result.json();
    setProduct(allProducts); /* all product in products useState variable */
    
  }

  /* delete product function */
  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:8080/api/product/${id}`,{
      method: "delete"
    });
    result = await result.json();
    if(result){
      /* once deleted new record will be shown */
      alert("Record is deleted");
      getProducts(); /* this will show new record on load */
    }
  }
  /* search function */
  const searchHandle = async (e) => {
    let key =  e.target.value; /* keyword is the value on input */
    /* if there is value inside the input field show data being search else show all data */
    if (key) {
      let result = await fetch(`http://localhost:8080/api/search/${key}`); /* search keyword */
      result = await result.json();
      /* if result show */
      if(result){
        setProduct(result)
      }
    } else {
      /* else show all data */
      getProducts()
    }

  }

  /*  */
  return (
    <div className='text-center'>
      <h1 className='m-8'>Product list</h1>
      
    {/* Search input */}
    <label htmlFor="default-search" className="label-search ">Search</label>
    <div className="search-bar ">
        <div className="search-bar-head">
            <svg className="search-bar-icon " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="search-bar-input" onChange={searchHandle}   required />
         
    </div>
       
    {/* Search input */}

      {/* table */}
      <div className="relative overflow-x-auto p-2">
        <table className="w-full text-sm text-left text-white dark:text-white">

          {/* header of table */}
          <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-white">
            <tr>
              <th scope="col" className="px-6 py-3  ">
                Number
              </th>
              <th scope="col" className="px-6 py-3  ">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Product price
              </th>
              <th scope="col" className="px-6 py-3  ">
                Product category
              </th>
              <th scope="col" className="px-6 py-3  ">
                Product company
              </th>
              <th scope="col" className="px-6 py-3  ">
                Actions
              </th>
            </tr>
          </thead>

          {/* loop into products and show the results else no products found */}
          {
            products.length > 0 ? products && products.map((product, index) => {
              return (
                <tbody key={product._id} >
                  <tr className="bg-white dark:bg-blue-900">
                    <td key={product._id} className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4  ">
                      {product.name}
                    </td>
                    <td className="px-6 py-4">
                      {product.price}
                    </td>
                    <td className="px-6 py-4">
                      {product.category}
                    </td>
                    <td className="px-6 py-4">
                      {product.company}
                    </td>
                    <td className="px-6 py-4">

                     <button className='btn-delete' onClick={() => deleteProduct(product._id)}>Delete</button> {/* delete button */}
                     {/* update button link to id which is in the loop itself */}
                     <button className='btn-update bg-yellow-600 p-2 rounded-md hover:bg-yellow-700 duration-300'>
                      <Link to={`/update-product/${product._id}`}>Update</Link>
                     </button>
                    </td>
                    
                  </tr>
                </tbody>
              )
            }) :
              <thead className=' text-center justify-center items-center w-full'>
                <tr className=' text-center justify-center items-center w-full'>
                  <th>
                    <h1 className='text-2xl   text-red-500 w-full text-center'> No products found</h1>
                  </th>
                </tr>

              </thead>
          }


        </table>
      </div>


    </div>
  )
}

export default ProductList