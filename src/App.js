import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Aboutus from "./components/About"
import Products from "./components/Product"
import Search from "./components/Search"

function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Search></Search>
            <Products></Products>
            <Aboutus></Aboutus>
            <Footer></Footer>
        </div>
    )
}
export default App