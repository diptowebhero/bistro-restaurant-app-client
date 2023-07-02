import { Outlet } from "react-router-dom";
import Nav from "../components/Shared/Navbar/Nav.jsx";
// import Footer from "../components/Shared/Footer/Footer.jsx";

const FrontLayout = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
            {/* <Footer/> */}
        </div>
    );
};

export default FrontLayout;