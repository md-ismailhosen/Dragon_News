import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import AuthLayOut from "../Layout/AuthLayOut";
import NewsDetails from "../Pages/NewsDetails";
import About from "../About/About";
import Care from "../Care/Care";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      
      {
        path: "category/:id",
        element: <CategoryNews />,
        loader: async () => {
          const res = await fetch("/news.json");
          return res.json();
        },
      },
      
    ],
  },
  {
    path:"/about",
    element: <About />,
  },
  {
    path:"/care",
    element:<Care/>
  },

  // News Details Separate Page
  {
    path: "/news-details/:id",
    element: <PrivateRoute>
      <NewsDetails />
    </PrivateRoute>,
    loader: async () => {
      const res = await fetch("/news.json");
      return res.json();
    },
  },

  // Auth routes
  {
    path: "/auth",
    element: <AuthLayOut />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  //404 not found
  {
    path: "*",
    element: <h1>404  Not Found</h1>,
  },
]);

export default router;