import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../../layouts/Mainlayouts/MainLayouts";
import Home from "../../components/Home/Home";
import CardDetails from "../../components/CardDetails/CardDetails";

const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch("/data.json"),
            },
            {
                path: '/cardDetails/:id',
                element: <CardDetails></CardDetails>,
                loader: ()=> fetch("/data.json"),
            }
        ]
    }
])

export default myCreatedRoute;