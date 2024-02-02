import './App.css';
// import Header from './Components/Header';
// import Albums from './Components/Albums';
// import Cart from './Components/Cart'
// import CartProvider from './store/CartProvider';

import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Store from './pages/Store';
import About from './Components/About';
import Home from './pages/Home';
const router=createBrowserRouter([
  {path:'/',element:<Store></Store>},
  {path:'/about', element:<About></About>},
  {path:'/home', element:<Home></Home>}
])

function App() {
  
  return (
    <RouterProvider router={router}/>
  )
     
}

export default App;
