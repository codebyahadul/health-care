import { useState } from "react";
import Container from "../../components/shared/Container";
import { IoIosArrowDown } from "react-icons/io";

const Faq = () => {
    const [isOpen, setIsOpen] = useState(null);
    const dataArr = [{
        title: " What are your office hours?",
        description: 'Our office hours vary by location, but typically we are open Monday through Friday from 8:00 AM to 5:00 PM. Some locations may offer extended hours or weekend appointments. Please contact your nearest clinic for specific hours.',
    },
    { title: "How can I schedule an appointment?", description: "Our return policy allows you to return items within 30 days of purchase. Please visit our returns page for detailed instructions and to initiate a return.", },
    { title: "Do you accept insurance?", description: "Yes, you can change your shipping address before your order is shipped. Go to your account settings and update the shipping information accordingly.", },
    { title: "What should I bring to my appointment?", description: "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty program.", },
    { title: "Do you offer telemedicine appointments?", description: "We appreciate our loyal customers! Stay tuned for exclusive discounts, promotions, and special offers available to members of our loyalty.", },
    ];
    const toggle = (idx) => {
        setIsOpen((prevIdx) => (prevIdx === idx ? null : idx))
    };
    return (
        <Container>
            <div className="space-y-2 md:space-y-5">
                <button className="rounded-full px-4 py-2 border text-primary font-medium border-primary">Faq</button>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary">Frequently Asked Question</h1>
                <div className="px-2">
                    {dataArr.map((PerAccordion, idx) => (
                        <div key={idx} className="py-1">
                            <button onClick={() => toggle(idx)} className="flex h-full w-full justify-between font-medium outline-none bg-[#FFFFF5] p-5">
                                <span>{PerAccordion.title}</span>
                                <IoIosArrowDown size={20} />
                            </button>
                            <div className={`grid overflow-hidden transition-all duration-300 ease-in-out ${isOpen === idx ? 'grid-rows-[1fr] pb-1 pt-3 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="overflow-hidden pr-4 text-sm text-[#343268] pl-5 py-5">{PerAccordion.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Faq;