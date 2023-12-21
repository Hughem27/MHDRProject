import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import Footer from './components/footer';
import Header from './components/header';
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
            <Navbar.Brand href="/">Marks DR Kwiki Mart</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/create">Add Products</Nav.Link>
              <Nav.Link href="/shop">Shop</Nav.Link>
              <Nav.Link href="/registration">Reg</Nav.Link>
              {isLoggedIn === false && <Nav.Link href="/registration">Reg</Nav.Link>}

            </Nav>
          </Container>
        </Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/shop' element={<Shop></Shop>}></Route>
          <Route path='/create' element={<Create></Create>}></Route>
          <Route path='/edit/:id' element={<EditProduct></EditProduct>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path='/registration' element={<Registration></Registration>}></Route>
        </Routes>
        {/* <Header></Header>
      <Content></Content>
      <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
