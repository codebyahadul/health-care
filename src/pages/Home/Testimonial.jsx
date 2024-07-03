import Container from "../../components/shared/Container";
import Person1 from '../../assets/person1.png';
import Person2 from '../../assets/person2.png';
import Person3 from '../../assets/person3.png';
import { FaStar } from "react-icons/fa";
const Testimonial = () => {
    return (
        <Container>
            <div className="space-y-2 md:space-y-5">
                <button className="rounded-full px-4 py-2 border text-primary font-medium border-primary">Testimonial</button>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary">What they say about us</h1>
                <div className="flex flex-col md:flex-row  gap-5 items-center justify-center">
                    <div className="p-5 space-y-4 bg-[#FFFFF5]">
                        <h1 className="text-lg md:text-xl font-semibold text-primary w-full md:w-3/4">Expertise and Compassion Combined</h1>
                        <p className="text-xs md:text-sm font-medium text-[#4D4C7B] max-w-md">I can't thank enough for their exceptional care. The doctors and staff showed incredible expertise and compassion throughout my treatment journey. I felt truly cared for every step of the way.</p>
                        <div className="flex gap-5 items-center">
                            <img className="rounded-full" src={Person1} alt="" />
                            <div>
                                <h3 className="text-lg font-semibold text-primary">Sarah D, <span className="opacity-60">IT Professional</span></h3>
                                <div className="flex items-center gap-2 *:text-[#FFE03D]">
                                    <FaStar size={20}/>
                                    <FaStar size={20}/>
                                    <FaStar size={20}/>
                                    <FaStar size={20}/>
                                    <FaStar size={20}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 space-y-4 bg-[#FFFFF5]">
                        <h1 className="text-lg md:text-xl font-semibold text-primary w-full md:w-3/4">Life-Saving Care, Life-Changing Experience</h1>
                        <p className="text-xs md:text-sm font-medium text-[#4D4C7B] max-w-md">My experience at [Healthcare Provider Name] was life-changing. The prompt and accurate diagnosis, coupled with the advanced treatments they provided, saved my life.</p>
                        <div className="flex gap-5 items-center">
                            <img className="rounded-full" src={Person2} alt="" />
                            <div>
                                <h3 className="text-lg font-semibold text-primary">Michael R, <span className="opacity-60">Business Executive</span></h3>
                                <div className="flex items-center gap-2 *:text-[#FFE03D]">
                                    <FaStar size={20}/>
                                    <FaStar size={20}/>
                                    <FaStar size={20}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-5 space-y-4 bg-[#FFFFF5]">
                        <h1 className="text-lg md:text-xl font-semibold text-primary w-full md:w-3/4">A Partner in Health and
                        Wellness</h1>
                        <p className="text-xs md:text-sm font-medium text-[#4D4C7B] max-w-md">As a busy professional, I appreciate the convenience and quality of care I receive at [Healthcare Provider Name]. From telemedicine consultations to routine check-ups, they've become.</p>
                        <div className="flex gap-5 items-center">
                            <img className="rounded-full" src={Person3} alt="" />
                            <div>
                                <h3 className="text-lg font-semibold text-primary">David D, <span className="opacity-60">Lawyer</span></h3>
                                <div className="flex items-center gap-2 *:text-[#FFE03D]">
                                    <FaStar size={20}/>
                                    <FaStar size={20}/>
                                    <FaStar size={20}/>
                                    <FaStar size={20}/>
                                    <FaStar size={20}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default Testimonial;