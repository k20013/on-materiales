import './App.css'

// import NavBar from './components/layout/navBar/navBar';
import Footer from './components/layout/footer/footer';

import Home from './components/sections/home/home';
import Products from './components/sections/products/products';
import About from './components/sections/about/about';

function App() {

  return (
    <>
      {/* <NavBar /> */}

      <Home />

      <div className='message'>
        <p>Somos On Materiales, 
          una empresa con más de 10 años en la distribución de materiales de construcción de alta calidad. 
          Nos dedicamos a brindar a nuestros clientes soluciones integrales para sus proyectos de construcción, 
          desde la obra más pequeña hasta la más grande.
        </p>
      </div>

      <Products />
      {/* <About /> */}

      <Footer />
    </>
  )
}

export default App;
