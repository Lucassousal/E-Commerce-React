import { useEffect, useState } from "react";

import { Header } from "./components/header";
import { Card } from "./components/card";
import { Footer } from "./components/footer";
import Loading from "./components/loading/loading";

import { CartPorvider } from "./context/Cart-context";

import { getProducts } from "./services/api";

import './App.css'

function App() {

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(false)
  
  useEffect(()=>{
    getAllProducts()
  },[])

  const getAllProducts = async() => {
    try{
      setLoading(true)
      let json = await getProducts()
      setProducts(json)
    }
    catch (e){
      console.log(e)
    }
    finally{
      setLoading(false)
    }
  }

  return (
    <div className="app-container">
      <CartPorvider>
        <Header/>
      </CartPorvider>
      {
        loading
        ?
          <div className="loading-container">
            <Loading type='spin' color="#f80032" height='100px' width='100px' className='loading'/>
          </div>
        :
          <section className="products-area">
            {
              products.map((item, index) => (
                <Card key={index} item={item} />
              ))
            }
          </section>
      }
      <Footer/>
    </div>
  );
}

export default App;
