import './App.css'

import NavBar from './components/layout/navBar/navBar';
import Footer from './components/layout/footer/footer';
import Brands from './components/layout/brands/brands';

import Home from './components/sections/home/home';
import Products from './components/sections/products/products';
import Competencies from './components/sections/competencies/competencies';

function App() {

  return (
    <>
      <NavBar />

      <Home />

      <Competencies />

      <Products />

      <Brands />

      <Footer />
    </>
  )
}

export default App;
