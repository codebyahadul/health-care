import Container from "../../components/shared/Container";
import Img from '../../assets/Rectangle 24.png';
import { MdArrowOutward } from "react-icons/md";
const AboutUs = () => {
    return (
        <Container>
            <div className="flex flex-col md:flex-row gap-5 md:gap-0 items-end">
                <div className="space-y-3 md:space-y-5 lg:space-y-10 flex-1">
                    <button className="rounded-full px-4 py-2 border text-primary font-medium border-primary">Who we are</button>
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary w-full lg:w-2/3">We Help To Get Soultions</h1>
                    <p className="text-[#4D4C7B] max-w-lg">We are proud to be a trusted healthcare provider in our community, and we look forward to serving you and your family with excellence, integrity, and compassion. Your health is our priority, and we are here for you every step of the way. We believe in treating each patient with dignity, respect, and empathy, ensuring that they receive the attention and care they deserve.</p>
                    <button className='flex gap-2 items-center px-5 py-2 rounded-lg border-primary font-medium bg-[#FFC637] duration-300'>Learn More <MdArrowOutward size={18} /></button>
                </div>
                <div className="relative mx-auto flex-1">
                    <div>
                        <img src={Img} alt="" />
                    </div>
                    <div className="bg-[#343268] rounded-2xl lg:h-[200px] lg:w-[350px] block lg:absolute -bottom-8 -left-24 text-white p-5 space-y-5">
                        <h1 className="text-lg md:text-xl lg:text-2xl font-medium">Our mission is simple</h1>
                        <p className="">To provide high-quality healthcare services that are accessible, personalized, and patient-centered.</p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default AboutUs;