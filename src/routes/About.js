import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import AboutImg from "../assets/machine.jpg"
function About(){
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="About us"
        btnClass="hide"
        
    
        />
        </>
    );


}
export default About;