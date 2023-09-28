import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../../layouts/Mainlayouts/MainLayouts";
import Home from "../../components/Home/Home";
import CardDetails from "../../components/CardDetails/CardDetails";
import Donations from "../../pages/Donations/Donations";
import Statistics from "../../pages/Statistics/Statistics";
import Error from "../../components/Error/Error";

const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        errorElement: <Error></Error> ,
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
            },
            {
                path: '/donation',
                element: <Donations></Donations>
            },
            {
                path: '/statistics',
                element: <Statistics></Statistics>
            }
        ]
    }
])

export default myCreatedRoute;