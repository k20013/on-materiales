import './App.css'

// import NavBar from './components/layout/navBar/navBar';
import Footer from './components/layout/footer/footer';

import Home from './components/sections/home/home';
import Products from './components/sections/products/products';
import Competencies from './components/sections/competencies/competencies';

function App() {

  return (
    <>
      {/* <NavBar /> */}

      <Home />

      {/* <div className='message'>
        <p>
          Nos dedicamos a brindar a soluciones integrales para tus proyectos,
          desde la obra más pequeña hasta la más grande.
        </p>
      </div> */}

      <Competencies />

      <Products />

      <Footer />
    </>
  )
}

export default App;
