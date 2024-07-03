import AboutUs from "./AboutUs";
import Banner from "./Banner";
import Faq from "./Faq";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
    return (
        <div>
            <Banner />
            <AboutUs />
            <Services />
            <Testimonial />
            <Faq />
        </div>
    );
};

export default Home;