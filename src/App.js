import { useEffect, useState } from "react";
import { Header } from "./components/header";
import { Card } from "./components/card";
import { Footer } from "./components/footer";
import api from './services/api'

import './App.css'

function App() {

  const [products, setProducts] = useState([])
  
  useEffect(()=>{
    getPodructs()
  },[])

  const getPodructs = async() => {
    let json = await api.getProducts()
    setProducts(json)
  }

  return (
    <div className="app-container">
      <Header/>
      <section className="products-area">
        {
          products.map((item, index) => (
            <Card key={index} item={item} />
          ))
        }
      </section>
      <Footer/>
    </div>
  );
}

export default App;
