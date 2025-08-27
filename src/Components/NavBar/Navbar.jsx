import { Link, NavLink, useLocation } from "react-router";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { useContext } from "react";
import { apiData } from "../Root/Root";
const Navbar = () => {
    const { link1, link2, link3, link4 } = {
        link1: 'Home',
        link2: 'Statistics',
        link3: 'Dashboard',
        link4: 'New Arrival'
    }
    const {cartInfo, wishListInfo} = useContext(apiData)
    const location = useLocation();
    return (
        <>
        <div className={`${location.pathname === '/' ? 'py-3' : ''}`}></div>
        <div className={`${location.pathname === '/' ? 'bg-[#9538E2]': 'bg-gray-50'} mx-7 rounded-tr-2xl rounded-tl-2xl`}>
            <div className="navbar container mx-auto py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${location.pathname === '/' ? 'text-white': 'text-[#9538E2]'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className={`menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow ${location.pathname === '/' ? 'text-black': 'text-black'}`}>
                            <NavLink className="text-base" to={'/'}>{link1}</NavLink>
                            <NavLink className="text-base" to={'/statistics'}>{link2}</NavLink>
                            <NavLink className="text-base" to={'/dashboard'}>{link3}</NavLink>
                            <NavLink className="text-base" to={'/newArrival'}>{link4}</NavLink>
                        </ul>
                    </div>
                    <Link to={'/'} className={`btn btn-ghost md:text-xl capitalize ${location.pathname === '/' ? 'text-white': 'text-[#9538E2]'}`}>Gadget Heaven</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className={`menu menu-horizontal px-1 gap-3 ${location.pathname === '/' ? 'text-white': 'text-black'}`}>
                        <NavLink className={`text-base ${location.pathname === '/' ? 'homeSpecial' :''}`} to={'/'}>{link1}</NavLink>
                        <NavLink className="text-base" to={'/statistics'}>{link2}</NavLink>
                        <NavLink className="text-base" to={'/dashboard'}>{link3}</NavLink>
                        <NavLink className="text-base" to={'/newArrival'}>{link4}</NavLink>
                    </ul>
                </div>
                <div className="navbar-end gap-3">
                    <button className="p-3 rounded-full text-xl bg-white text-purple-600 relative"><IoCartOutline />
                        <span className={`w-7 h-7 flex  justify-center items-center absolute text-purple-600 rounded-full p-1 text-sm ${location.pathname === '/' ? 'bg-white -top-3 -right-3': '-top-2 -right-1'}`}>{cartInfo}</span>
                    </button>
                    <button className="p-3 rounded-full text-xl bg-white text-purple-600 relative"><CiHeart className="stroke-1" />
                        <span className={`w-7 h-7 flex  justify-center items-center absolute text-purple-600 rounded-full p-1 text-sm ${location.pathname === '/' ? 'bg-white -top-3 -right-3': '-top-2 -right-1'}`}>{wishListInfo}</span>
                    </button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Navbar;