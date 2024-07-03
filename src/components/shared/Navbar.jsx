import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo dark.png';
import { MdArrowOutward } from "react-icons/md";
import { useRef, useState } from 'react';
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
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();
    return (
        <div className="pt-2 md:pt-3 lg:pt-6">
            <nav className="flex items-center justify-between px-4 py-2 mb-24">
                <div className='cursor-pointer'>
                    <img src={Logo} alt="" />
                </div>
                <ul className="hidden items-center justify-between gap-10 md:flex">
                    {links}
                </ul>
                <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer" > <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /> </svg>
                    {dropDownState && (
                        <ul className="  z-10  gap-2 absolute right-0 top-11 flex w-[200px] flex-col justify-center items-center rounded-lg text-base bg-gray-100 p2">
                            {links}
                        </ul>
                    )}
                </div>
                <div className='text-primary hidden lg:block'>
                    <button className='flex gap-2 items-center px-5 py-2 border rounded-lg border-primary font-medium hover:bg-[#FFC637] duration-300'>Appointment <MdArrowOutward size={18} /></button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;