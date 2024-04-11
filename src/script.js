import React from "react";
import ReactDom from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";


const App =()=>{
    return(
        <>
            <RouterProvider router={Approutes}/>
        </>
    )
}
const Approutes=createBrowserRouter([{
    path:'/',
    element:<Body/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
            path:'/About',
            element:<About/>
        },
        {
            path:'/Projects',
            element:<Projects/>
        },
        {
            path:"/Resume",
            element:<Resume/>
        }
    ]
}])
const root=ReactDom.createRoot(document.querySelector(".root"))
root.render(<App/>)