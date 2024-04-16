import React from "react";
import ReactDom from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Body from "./components/Body";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import store from "./utils/store";
import {Provider} from 'react-redux'

const App =()=>{
    return(
        <Provider store={store}>
            <RouterProvider router={Approutes}/>
        </Provider>
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