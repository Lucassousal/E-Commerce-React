import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { ProductDetails } from './pages/productDetails';
import { loadProduct } from './pages/productDetails';

export const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    errorElement:<div>Criar pagina de Erro</div>,
  },
  {
    path:'/:Id',
    element:<ProductDetails/>,
    loader: loadProduct,
  }

])