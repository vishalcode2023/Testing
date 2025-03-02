import { Route, Routes } from "react-router-dom";
import LandingPage from "../Components/LandingPage";
import SolutionPage from "../Components/NavPages/SolutionPage";
import Services from "../Components/NavPages/Services";
import Aboutus from "../Components/NavPages/Aboutus";
import ContactUs from "../Components/NavPages/ContactUs";

const NavRouter = () => {
    return ( 
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/solution" element={<SolutionPage/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/about' element={<Aboutus/>}/>
            <Route path='/Contact' element={<ContactUs/>}/>
        </Routes>
    );
}

export default NavRouter;