import { Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/UI/Nav';
import ProductList from './components/pages/ProductList';
import AddProduct from './components/pages/AddProduct';
import UpdateProduct from './components/pages/UpdateProduct';
import Footer from './components/UI/Footer';
import SignUp from './components/pages/SignUp';
import PrivateComponent from './components/PrivateComponent/PrivateComponent';
import Login from './components/pages/Login';


function App() {
  return (
    <>
      <Nav />

      <Routes>
        {/* give access to other pages if login */}
        <Route element={<PrivateComponent />}>


          <Route path="/" element={<ProductList />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/update-product/:id" element={<UpdateProduct />} />
          <Route path="/logout" element={<UpdateProduct />} />
          <Route path="/profile" element={<UpdateProduct />} />

        </Route>
        {/*  */}
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
