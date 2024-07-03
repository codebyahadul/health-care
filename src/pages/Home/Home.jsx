import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Faq from "./Faq";
import Offer from "./Offer";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div className="px-3 md:px-5">
            <Banner />
            <AboutUs />
            <Services />
            <Testimonial />
            <Faq />
            <Offer />
        </div>
    );
};

export default Home;