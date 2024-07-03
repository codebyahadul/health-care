import { Outlet } from "react-router-dom";
import Navbar from "./components/shared/Navbar";

const App = () => {
    return (
        <>
            <div className="bg-[#fbfbfb]">
                <div className="max-w-7xl mx-auto">
                    <Navbar />
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default App;