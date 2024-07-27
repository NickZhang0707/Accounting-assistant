import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import App from './App';
import BillsPage from './Pages/BillsPage';
import WaterPage from './Pages/WaterBillPage';
import PowerPage from './Pages/PowerBillPage';
import TransportPage from './Pages/TransportBillPage';
import GasPage from './Pages/GasPage'
import MainPage from './Pages/MainPage';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/pages/mainpage",
    element: <MainPage />,
  },
  {
    path: "/pages/billspage",
    element: <BillsPage />,
  },
  {
    path: "/pages/waterpage",
    element: <WaterPage />,
  },
  {
    path: "/pages/powerpage",
    element: <PowerPage />,
  },
  {
    path: "/pages/transportpage",
    element: <TransportPage />,
  },
  {
    path: "/pages/gaspage",
    element: <GasPage />,
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />    
  </React.StrictMode>,
)
