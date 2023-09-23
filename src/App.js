import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginHandler from "./Auth/LoginHandler";
import Root from "./Components/Root";
import Product from "./Components/Product";
import User from "./Components/User";
function App() {
  const router = createBrowserRouter([
     { 
      path:"/",
      element:<Root></Root>,
       children: [
        {
          path: "/users/products",
          element: <Product></Product>,
        },
        {
          path:'/users/me',
          element:<User></User>
            
        },
        {
          path:'/users/login',
          element:<LoginHandler></LoginHandler>
        }
      ],
     },
    
  ]);

  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
