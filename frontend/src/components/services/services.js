export  const HandleInput  = async ({ name, email, password }) =>  {
    
    let result = await fetch('http://localhost:5000/register', { /* api url */
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
   
}