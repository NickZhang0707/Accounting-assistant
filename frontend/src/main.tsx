import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  
} from "react-router-dom";
import App from './App';
import MainPageComponents from './Components/MainPageComponents';
import BillsPageComponents from './Components/BillsPageComponents';
import GasPageComponents from './Components/GasPageComponents';
import WaterPageComponents from './Components/WaterPageComponents';
import TransportPageComponents from './Components/TransportPageComponents';
import PowerPageComponents from './Components/PowerPageComponents';
import AddBillsPageComponents from './Components/AddBillsPageComponents';
import EditDetailsPageComponents from './Components/EditDetailsPageComponents';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <MainPageComponents />,
      },
      {
        path: "Bills",
        element: <BillsPageComponents />,
      },
      {
        path: "Water",
        element: <WaterPageComponents />,
      },
      {
        path: "Gas",
        element: <GasPageComponents />,
      },
      {
        path: "Transport",
        element: <TransportPageComponents />,
      },
      {
        path: "Power",
        element: <PowerPageComponents />,
      },
      {
        path: "AddBills",
        element: <AddBillsPageComponents />,
      },
      {
        path: "EditDetails",
        element: <EditDetailsPageComponents />,
      }
    ],
  }
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />    
  </React.StrictMode>,
)
