import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Store from './pages/Store';
import About from './Components/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Login from './pages/Login'
import AuthProvider from './store/AuthProvider';
import Authenticate from './Components/Authenticate';
const router=createBrowserRouter([
  {path:'/store',element:<Authenticate><Store></Store></Authenticate>},
  {path:'/about', element:<About></About>},
  {path:'/home', element:<Home></Home>},
  {path:'/contact', element:<Contact></Contact>},
  {path:'/login', element:<Authenticate reverse={true}><Login></Login></Authenticate>},
  {path:'/product/:productId', element:<Authenticate><Product></Product></Authenticate>}
])

function App() {
  
  return (
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  )
     
}

export default App;
