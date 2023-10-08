// import { useNavigate } from "react-router-dom";
import Cards from "../components/cards";
import Footer from "../components/footer";
import Hero from "../components/hero";
import Navbar from "../components/navbar";

function HomePage () {
    // const  navigasi = useNavigate();
    return(
        <>
        <Navbar/>
        <Hero/>
        <Cards />
        <Footer />
        </>
    )
}

export default HomePage;