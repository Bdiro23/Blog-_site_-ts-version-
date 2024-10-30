import Navbar from "./components/Navbar/Navbar.tsx";
import Aside from "./components/Aside/Aside.tsx"
import Footer from "./components/Footer/Footer.tsx"
 function Home():React.ReactElement{
    return (
        <>
            <Navbar/>
            <Aside/>
            <Footer/>
        </>

    )
}
export default Home;