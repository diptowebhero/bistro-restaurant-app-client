import { Outlet } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer.jsx";
import Nav from "../components/Shared/Navbar/Nav.jsx";

const FrontLayout = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default FrontLayout;