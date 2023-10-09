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
        <Hero
        title="Jadi expert bersama edspert.id"
        desc="Tingkatkan skill dan pengetahuan bersama para mentor terbaik di bidangnya, untuk siapkan karir impian anda."
        />
        <Cards />
        <Footer />
        </>
    )
}

export default HomePage;