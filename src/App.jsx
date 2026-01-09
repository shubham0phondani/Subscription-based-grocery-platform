import { createBrowserRouter , RouterProvider } from "react-router-dom"
import Applayout from "./Pages/Applayout"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import ForgotPassword from "./Pages/ForgotPassword"
import Dashboard from "./Pages/Dashboard"
import Pricing from "./Pages/Pricing"

const router = createBrowserRouter([
  {
    path:"/",
    element: <Applayout/>,
    children: [
      {
        path:"",
        element: <Login/>
      },
      {
        path: "signup",
        element: <SignUp/>
      },
      {
        path: "forgotpassword",
        element: <ForgotPassword/>
      },
      {
        path: "pricing",
        element: <Pricing/>
      }
    ]
  },
  {
    path:"/dashboard",
    element: <Dashboard/>
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App;
