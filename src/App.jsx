import { useState } from 'react';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Navbar from './components/navbar/navbar';
import Hero from './components/Hero/Hero';
import Category from './components/Category/category'
import Feature from './components/Feature/feature'
import Product from'./components/Products//products'
import Footer from './components/Footer/Footer'
import News from './components/News/New'
function App() {


  return (
    <div>
   <Navbar/>
   <Hero/>
   <Category/>
   <Feature/>
   <Product/>
   <News/>
   <Footer/>
  </div>
  );
}

export default App;
