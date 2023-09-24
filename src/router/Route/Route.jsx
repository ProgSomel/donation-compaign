import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../../layouts/Mainlayouts/MainLayouts";
import Home from "../../components/Home/Home";

const myCreatedRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts></MainLayouts>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default myCreatedRoute;