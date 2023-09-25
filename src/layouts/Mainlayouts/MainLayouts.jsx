import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

const MainLayouts = () => {
    return (
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;