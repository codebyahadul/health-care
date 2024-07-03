import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo dark.png';
import { MdArrowOutward } from "react-icons/md";
const Navbar = () => {
    const links =
        <>
            <li>
                <NavLink to='/' className={({ isActive }) =>
                    isActive
                        ? "text-primary pb-1 border-b-0 lg:border-b-2 font-medium border-[#FFC637]"
                        : "font-medium text-primary "
                }>
                    Home</NavLink>
            </li>
            <li>
                <NavLink to='/services' className={({ isActive }) =>
                    isActive
                        ? "text-primary pb-1 border-b-0 lg:border-b-2 font-medium border-[#FFC637]"
                        : "font-medium text-primary "
                }>
                    Services</NavLink>
            </li>
            <li>
                <NavLink to='/blogs' className={({ isActive }) =>
                    isActive
                        ? "text-primary pb-1 border-b-0 lg:border-b-2 font-medium border-[#FFC637]"
                        : "font-medium text-primary "
                }>
                    Blogs</NavLink>
            </li>
            <li>
                <NavLink to='/about-us' className={({ isActive }) =>
                    isActive
                        ? "text-primary pb-1 border-b-0 lg:border-b-2 font-medium border-[#FFC637]"
                        : "font-medium text-primary "
                }>
                    About Us</NavLink>
            </li>
        </>
    return (
        <div className="my-2 md:my-3 lg:my-6">
            <nav className='flex items-center justify-between'>
                <div className='cursor-pointer'>
                    <img src={Logo} alt="" />
                </div>
                <ul className='flex items-center justify-between gap-6'>
                    {links}
                </ul>
                <div className='text-primary'>
                    <button className='flex gap-2 items-center px-5 py-2 border rounded-lg border-primary font-medium hover:bg-[#FFC637] duration-300'>Appointment <MdArrowOutward size={18} /></button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;