import Container from "../../components/shared/Container";
import BG from '../../assets/Rectangle 32.png';
import Logo from '../../assets/logo light.png';
import { MdArrowOutward } from "react-icons/md";
const Offer = () => {
    return (
        <Container>
            <div className="relative">
                <img className="w-full rounded-2xl" src={BG} alt="" />
                <div className="absolute bg-gradient-to-r from-primary to-[rgba(2, 0, 67, 0.30)] w-full h-full rounded-2xl top-0">
                    <div className="w-full relative">
                        <img className="absolute mt-5 md:mt-20 right-3 md:right-10 w-10 md:w-36 " src={Logo} alt="" />
                    </div>
                    <div className=" w-full flex items-center h-full ml-0 md:ml-20">
                        <div className="w-full md:w-1/2 space-y-1 md:space-y-5">
                            <div className="text-lg md:text-2xl lg:text-4xl text-white font-semibold space-y-1 md:space-y-3">
                                <h1>Get Your</h1>
                                <h1>First Appointment</h1>
                                <h1>at 50%</h1>
                            </div>
                            <div className="flex items-center gap-2 md:gap-5">
                                <button className='flex gap-2  text-xs md:text-lg items-center px-2 py-1 md:px-5 md:py-2 rounded-lg font-medium bg-[#FFC637] duration-300'>Appointment <MdArrowOutward size={18} /></button>
                                <button className='flex gap-2 text-xs md:text-lg items-center px-2 py-1 md:px-5 md:py-2 border rounded-lg border-white font-medium hover:bg-[#FFC637] duration-300 text-white'>Learn More <MdArrowOutward size={18} /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Offer;