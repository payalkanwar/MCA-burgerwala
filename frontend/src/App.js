 import { createBrowserRouter, RouterProvider } from "react-router-dom" 
import HomePage from "./pages/HomePage"
import AboutPage from "./pages/AboutPage"
import ContactPage from "./pages/ContactPage"
import MenuPage from "./pages/MenuPage";
import CartPage from "./pages/CartPage";
import ShippingPage from "./pages/ShippingPage";
import ConfirmOrderPage from "./pages/ConfirmOrderPage";
import PaymentSuccessPage from "./pages/PaymentSuccessPage";
import LoginPage from "./pages/LoginPage.jsx";
import ProfilePage from "./pages/ProfilePage";
import MyOrderPage from "./pages/MyOrderPage";
import OrderDetailPage from "./pages/OrderDetailPage";
import DashboardPage from "./pages/DashboardPage";


 import "./style/app.scss";
 import "./style/Header.scss";
 import "./style/Home.scss";
 import "./style/Founder.scss";
 import "./style/Menu.scss";
 import "./style/Footer.scss";
 import "./style/Contact.scss";
 import "./style/About.scss";
 import "./style/Cart.scss";
 import "./style/Shipping.scss";
 import "./style/ConfirmOrder.scss";
 import "./style/PaymentSuccess.scss";
 import "./style/Login.scss";
 import "./style/Profile.scss";
 import "./style/table.scss";
 import "./style/orderDetails.scss"; 
 import "./style/dashboard.scss"; 

 //routing 
  
 const router = createBrowserRouter(
  [ 
   { 
     path: "/", 
     element: <HomePage />, 
   }, 
   { 
     path: "/menu", 
     element: <MenuPage />, 
   }, 
   { 
     path: "/contact", 
     element: <ContactPage />, 
   }, 
   { 
    path: "/about", 
    element: <AboutPage />, 
  },
  { 
    path: "/cart", 
    element: <CartPage />, 
  }, 
  { 
    path: "/cart/Shipping", 
    element: <ShippingPage/>, 
  }, 
  { 
    path: "/cart/ConfirmOrder", 
    element: <ConfirmOrderPage/>, 
  }, 
  { 
    path: "/cart/PaymentSuccess", 
    element: <PaymentSuccessPage/>, 
  }, 
  { 
    path: "/login", 
    element: <LoginPage/>, 
  }, 
  { 
    path: "/me", 
    element: <ProfilePage/>, 
  }, 
  { 
    path: "/MyOrder", 
    element: <MyOrderPage/>, 
  }, 
  { 
    path: "/Orders/:id", 
    element: <OrderDetailPage/>, 
  }, 
  { 
    path: "/Dashboard", 
    element: <DashboardPage/>, 
  }, 
   ]) 
  
 const App = () => { 
   return ( 
       <RouterProvider router={router} /> 
   ) 
 } 
  
 export default App