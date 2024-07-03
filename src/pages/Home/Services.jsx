import { MdArrowOutward } from "react-icons/md";
import Container from "../../components/shared/Container";
import Adtech from '../../assets/Rectangle 27-2.png';
import ODoctor from '../../assets/Rectangle 27-1.png';
import Health from '../../assets/Rectangle 27.png';
const Services = () => {
    return (
        <Container>
            <div className="p-5 md:p-8 lg:p-10 bg-[#fffff5] rounded-lg">
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-5 md:gap-8 lg:gap-10">
                    <div className="space-y-3 md:space-y-5">
                        <button className="rounded-full px-4 py-2 border text-primary font-medium border-primary">Services</button>
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary w-full lg:w-2/3">Empowering Health, Enriching Lives</h1>
                        <p className="text-[#4D4C7B] max-w-lg">We are committed to providing high-quality, compassionate care to every patient we serve. Whatever your healthcare needs may be, you can trust us to be your partner in health and wellness.</p>
                        <button className='flex gap-2 items-center px-5 py-2 rounded-lg border-primary font-medium bg-[#FFC637] duration-300'>Appointment <MdArrowOutward size={18} /></button>
                    </div>
                    <div className="relative text-white">
                        <img className="rounded-lg" src={Adtech} alt="" />
                        <div className="block md:absolute mt-1 md:mt-0 bottom-5 left-8 bg-[#020043] opacity-60 p-3 max-w-xs rounded-lg">
                            <h1 className="text-lg md:text-xl font-semibold space-y-2 md:space-y-5">Advanced Technology</h1>
                            <p className="text-xs">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                            <div className="w-full flex justify-end">
                                <div className="rounded-full size-12 text-white font-bold flex justify-center items-center bg-[#FFC637]">
                                    <MdArrowOutward size={25} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative text-white">
                        <img className="rounded-lg" src={ODoctor} alt="" />
                        <div className="block md:absolute mt-1 md:mt-0 bottom-5 left-8 bg-[#020043] opacity-60 p-3 max-w-xs rounded-lg">
                            <h1 className="text-lg md:text-xl font-semibold space-y-2 md:space-y-5">Online Doctor Meet</h1>
                            <p className="text-xs">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                            <div className="w-full flex justify-end">
                                <div className="rounded-full size-12 text-white font-bold flex justify-center items-center bg-[#FFC637]">
                                    <MdArrowOutward size={25} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative text-white">
                        <img className="rounded-lg" src={Health} alt="" />
                        <div className="block md:absolute mt-1 md:mt-0 bottom-5 left-8 bg-[#020043] opacity-60 p-3 max-w-xs rounded-lg">
                            <h1 className="text-lg md:text-xl font-semibold space-y-2 md:space-y-5">Advanced Technology</h1>
                            <p className="text-xs">Our surgeons are trained in the latest robotic surgical techniques, which allow for greater precision</p>
                            <div className="w-full flex justify-end">
                                <div className="rounded-full size-12 text-white font-bold flex justify-center items-center bg-[#FFC637]">
                                    <MdArrowOutward size={25} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Services;