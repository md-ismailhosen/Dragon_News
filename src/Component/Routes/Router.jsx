import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../Layout/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

const router=createBrowserRouter(
    [
        {
            path:"/",
            element: <HomeLayout></HomeLayout>,
            children:[
                {
                    path:"",
                    element:<Home></Home>,
                },
                {
                    path: "/category/:id",
                    element: <CategoryNews></CategoryNews>,
                    loader: async () => {
                        const res = await fetch("/news.json");
                        return res.json();
                    }
                }
                   
                
            ]
            
        },
        
    ] 
)
export default router;