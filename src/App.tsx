import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../src/components/conteiners/Layout'
import Home from '../src/components/pages/Home'
// import Login from './components/pages/Login'
// import RegisterForm from './components/pages/RegisterForm'
import Catalog from './components/pages/Catalog'
import ProductDetail from './components/pages/ProductDetail'
import About from './components/pages/About'
import Contacts from './components/pages/Contacts'

function App() {
  const router = createBrowserRouter([{
    path:'/',
    element: <Layout/>,
    children:[
      {path:'/',
        element: <Home/>
      },
      { 
        path: "/catalog", 
        element: <Catalog /> 
      },
      {
        path:"/Home",
        element: <Home/>
      },
      // {
      //   path:"/login",
      //   element: <Login/>
      // },
      // { 
      //   path: "/register", 
      //   element: <RegisterForm /> 
      // },
      {
        path:"/product/:id",
        element: <ProductDetail/>
      },
      {
        path:"/about",
        element: <About/>
      },
      {
        path:"/contacts",
        element: <Contacts/>
      }
    ]
  }])
  return (
    <RouterProvider router={router}/>
  )
}

export default App
