import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import Footer from './components/footer';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './components/addProduct';
import Shop from './components/shop';
import EditProduct from './components/editProduct';
import Login from './components/login';
import Registration from './components/registration';
import { useState, useEffect } from 'react';
import About from './components/about';
import AdminPage from './components/adminPage';
import ViewProducts from './components/viewProducts';
import ExchangeRates from './components/exchangeRate';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("login = " + isLoggedIn)

 

  useEffect(() => {
    console.log("login = " + isLoggedIn);
  }, [isLoggedIn]);



  return (
    <BrowserRouter>
      <div className="App">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="/">Marks DR Kwiki-E-Mart</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>            
              <Nav.Link href="/shopproducts">Shop</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>          
              <Nav.Link href="/exchange">Rates</Nav.Link>          


            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/shop' element={<Shop></Shop>}></Route>
          <Route path='/shopproducts' element={<ViewProducts></ViewProducts>}></Route>
          <Route path='/create' element={<Create></Create>}></Route>
          <Route path='/edit/:id' element={<EditProduct></EditProduct>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/about' element={<About></About>}></Route>
          <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/adminpage' element={<AdminPage></AdminPage>} />
          <Route path='/registration' element={<Registration></Registration>}></Route>
          <Route path='/exchange' element={<ExchangeRates></ExchangeRates>}></Route>
        </Routes>

        
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
