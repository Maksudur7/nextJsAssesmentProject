"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CiSearch } from "react-icons/ci";
import './Navbar.css'

const Navbar = () => {
    const pathname = usePathname()
    return (
        <div>
            <div className="navbar bg-[#26235B] px-10">
                <div className="navbar-start text-white">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm text-white dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>  <Link className={`link ${pathname === '/' ? 'activeNav' : 'unactive'}`} href="/">
                                Home
                            </Link> </li>
                            <li>  <Link className={`link ${pathname === '/about' ? 'activeNav' : 'unactive'}`} href="/about">
                                ABOUT
                            </Link> </li>
                            <li>  <Link className={`link ${pathname === '/courses' ? 'activeNav' : 'unactive'}`} href="/courses">
                                COURSES
                            </Link> </li>
                            <li>  <Link className={`link ${pathname === '/shop' ? 'activeNav' : 'unactive'}`} href="/shop">
                                SHOP
                            </Link> </li>
                            <li>  <Link className={`link ${pathname === '/events' ? 'activeNav' : 'unactive'}`} href="/events">
                                EVENTS
                            </Link> </li>
                            <li>  <Link className={`link ${pathname === '/contact' ? 'activeNav' : 'unactive'}`} href="/contact">
                                CONTACT
                            </Link> </li>
                        </ul>
                    </div>
                    <img className="h-12 rounded-3xl" src="https://i.ibb.co/fXGtQCN/assesment-Logo.png" alt="logo" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu text-white menu-horizontal px-1">
                        <li>  <Link className={`link ${pathname === '/' ? 'activeNav' : 'unactive'}`} href="/">
                            Home
                        </Link> </li>
                        <li>  <Link className={`link ${pathname === '/about' ? 'activeNav' : 'unactive'}`} href="/about">
                            ABOUT
                        </Link> </li>
                        <li>  <Link className={`link ${pathname === '/courses' ? 'activeNav' : 'unactive'}`} href="/courses">
                            COURSES
                        </Link> </li>
                        <li>  <Link className={`link ${pathname === '/shop' ? 'activeNav' : 'unactive'}`} href="/shop">
                            SHOP
                        </Link> </li>
                        <li>  <Link className={`link ${pathname === '/events' ? 'activeNav' : 'unactive'}`} href="/events">
                            EVENTS
                        </Link> </li>
                        <li>  <Link className={`link ${pathname === '/contact' ? 'activeNav' : 'unactive'}`} href="/contact">
                            CONTACT
                        </Link> </li>
                    </ul>
                </div>
                <div className="navbar-end text-white gap-5">
                    <CiSearch size={30} />
                    <img className="h-12 w-12 rounded-full" src="https://i.ibb.co/yPbW03q/emily-rodriguez.jpg" alt="profile" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;