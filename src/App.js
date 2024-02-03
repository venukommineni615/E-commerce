import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Store from './pages/Store';
import About from './Components/About';
import Home from './pages/Home';
import Contact from './pages/Contact';
const router=createBrowserRouter([
  {path:'/',element:<Store></Store>},
  {path:'/about', element:<About></About>},
  {path:'/home', element:<Home></Home>},
  {path:'/contact', element:<Contact></Contact>}
])

function App() {
  
  return (
    <RouterProvider router={router}/>
  )
     
}

export default App;
