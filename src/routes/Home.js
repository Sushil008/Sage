import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

function Home() {
    return(
        <>
        <Navbar/>
        <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1615906655593-ad0386982a0f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Drive with confidence, repair with excellence – your car's journey in good hands"
        text="Drive assured, repair with us"
        buttonText="Contact Us"
        url="/"
        btnClass="show"
        
        
        />
        </>
    )


}
export default Home;