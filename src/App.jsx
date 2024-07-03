import { Outlet } from "react-router-dom";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <div className="bg-[#fbfbfb]">
                <div className="max-w-7xl mx-auto">
                    <Navbar />
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default App;