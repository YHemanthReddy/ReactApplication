import React  from "react";
import ReactDOM  from "react-dom/client";
import Header from "./src/components/Header"; 
import Body from "./src/components/Body";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/ErrorPage";
import Footer from "./src/components/Footer";
import ResturantMenu from "./src/components/ResturantMenu";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Shimmer from "./src/components/Shimmer1";
import {lazy, Suspense , useState} from "react";
import Instamart from "./src/components/Instamart";
import UserContext from "./src/utils/UserContext";

const About = lazy(() => import("./src/components/About"));

const AppLayout = () =>{
    const [userDetails, setUserDetails] = useState({
        name : "hemanth",
        role : "Developer"
    });
    
    return (
        <UserContext.Provider value = {
            {user : userDetails,
            setUser : setUserDetails}
        }>
        <div className= "appLayout">
            <Header />
            <Outlet/>
            <Footer />
        </div>
        </UserContext.Provider>
       
    )
};

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout />,
        errorElement : <Error />,
        children : [
            {
                path : "/",
                element : <Body />
            },
            {
                path : "/about",
                element : <Suspense fallback= {<p>Hello...</p>}>
                    <About />
                </Suspense>
            },
            {
                path : "/contact",
                element : <Contact />
            },
            {
                 path : "resturant/:resId",
                 element : <ResturantMenu />
             },
             {
                path : "/shimmer",
                element : <Shimmer />
             },
             {
                path : "/instamart",
                element: <Instamart />
             }
        ]
    }
]);
    
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);