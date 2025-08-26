import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root  from './Components/Root/Root';
import Home from './Components/Home/Home';
import Error from './Components/ErrorPage/Error';
import Navbar from './Components/NavBar/Navbar';
import Newarrival from './Components/NewArrival/Newarrival';
import Statistics from './Components/Statistics/Statistics';
import Dashboard from './Components/Dashboard/Dashboard';
import ProductDetails from './Components/ProductDetails/ProductDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:() => fetch('./gadgets.json'),
      },
      {
        path:'navbar',
        element:<Navbar></Navbar>
      },
      {
        path:'statistics',
        element:<Statistics></Statistics>
      },
      {
        path:'dashboard',
        element:<Dashboard></Dashboard>
      },
      {
        path:'newArrival',
        element:<Newarrival></Newarrival>
      },
      {
        path:'products/:category/:product_id',
        element:<ProductDetails></ProductDetails>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
