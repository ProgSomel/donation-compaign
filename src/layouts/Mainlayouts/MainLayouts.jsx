import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";

const MainLayouts = () => {
  return (
    <div>
        <div className="">
      <Header></Header>
      <Outlet></Outlet>
    </div>
    </div>
  );
};

export default MainLayouts;
