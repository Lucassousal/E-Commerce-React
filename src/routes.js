import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { ProductDetails } from './pages/productDetails';
import { loadProduct } from './pages/productDetails';
import { Cart } from './pages/Cart/index.';
import { CartPorvider } from './context/Cart-context';

export const router = createBrowserRouter([
  {
    path:'/',
    element:<CartPorvider><App/></CartPorvider>,
    errorElement:<div>Criar pagina de Erro</div>,
  },
  {
    path:'/:Id',
    element:<CartPorvider><ProductDetails/></CartPorvider>,
    loader: loadProduct,
  },
  {
    path:'/cart',
    element:<CartPorvider><Cart/></CartPorvider>,
  }

])