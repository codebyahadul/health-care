import Logo from '../assets/logo light.png';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className="bg-primary text-white">
            <div className="max-w-7xl mx-auto p-10 md:p-20 space-y-5 md:space-y-8">
                <div>
                    <img src={Logo} alt="" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-between gap-5 *:mx-auto text-center md:text-start'>
                    <div className='text-xs md:text-sm lg:text-lg text-start'>
                        <p className='mb-2 lg:mb-5'>123 Main Street Anytown, USAPostal Code: 12345</p>
                        <p>Support: support@oyolloo.com</p>
                        <p>(Available : 10:00am to 07:00pm)</p>
                    </div>
                    <div className='flex flex-col gap-3 md:gap-5 *:cursor-pointer'>
                        <a to='#'>Home</a>
                        <a to='#'>About us</a >
                        <a to='#'>Success Page</a >
                        <a to='#'>Terms & Conditions</a >
                    </div>
                    <div className='flex flex-col gap-3 md:gap-5 *:cursor-pointer'>
                        <a to='#'>Services</a>
                        <a to='#'>Scheduling</a >
                        <a to='#'>Contact Us</a >
                        <a to='#'>Patient Portal</a >
                    </div>
                    <div>
                        <div className='space-y-2'>
                            <p className='text-sm md:text-lg'>Follow us:</p>
                            <div className='flex gap-2 md:gap-5 items-center cursor-pointer'>
                                <FaFacebook className='hover:text-blue-600' size={20} />
                                <FaInstagram className='hover:text-red-400' size={20} />
                                <FaLinkedin className='hover:text-blue-400' size={20} />
                                <FaYoutube className='hover:text-red-400' size={20} />
                            </div>
                        </div>
                        <p className='text-xs md:text-sm mt-5 md:mt-8'>@Docplus 2024</p>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;