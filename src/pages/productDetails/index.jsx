import { getProduct } from "../../services/api"
import { useLoaderData } from "react-router-dom"
import { Header } from "../../components/header"
import { Footer } from "../../components/footer"
import { Carousel } from "react-responsive-carousel"

import './styles.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"

export const loadProduct = async ({params}) => {
  try{
    const  product  = await getProduct(params.Id)
    return product
  }catch (e){
    console.log(e)
  }
}

export const ProductDetails = () => {

  const product = useLoaderData()
  console.log(product)
  
  return(
    <div>
      <Header/>
      <div className="product-container">
        <div className="product-images">
          <Carousel showStatus={false}>
            {
              product?.images?.map((item, index) => {
                return (
                  <div key={index}>
                    <img src={item} alt="" />
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <div className="product-infos">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <span>R$ {product.price},00</span>
          <div className="cep-container">
            <div>
              <label htmlFor="cep">encontre a loja mais próxima</label>
            </div>
            <div>
              <input type="text" id="cep" placeholder="Digite seu CEP"/>
              <button>ok</button>
            </div>
          </div>

        </div>
      </div>
      <Footer/>
    </div>
  )
}