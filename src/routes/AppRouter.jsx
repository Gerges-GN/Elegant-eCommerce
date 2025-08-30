import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import Products from "../pages/Products";
import ContactUs from "../pages/ContactUs";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error from "../pages/Error";

const routes =
  createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      // errorElement: <Home />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "shop",
          element: <Shop />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "contact-us",
          element: <ContactUs />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "register",
          element: <Register />,
        },
      ],
    }
  ])

// AppRouter.jsx (near top)
console.log("router value:", routes);
console.log("createBrowserRouter type:", typeof createBrowserRouter);

const AppRouter = () => {
  return <RouterProvider router={routes} />;
};


export default AppRouter;
