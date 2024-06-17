import './App.css'

import NavBar from './components/layout/navBar/navBar';
import Footer from './components/layout/footer/footer';

import Home from './components/sections/home/home';
import Products from './components/sections/products/products';
import About from './components/sections/about/about';

function App() {
  
  return (
    <>
      <NavBar />

      <Home />
      <Products />
      <About />

      <Footer />
    </>
  )
}

export default App;
