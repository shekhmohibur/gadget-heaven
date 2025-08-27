import { Outlet, useLoaderData } from "react-router";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import { createContext, useState } from "react";
import { ToastContainer } from "react-toastify";
const Root = () => {
    const ApiData = useLoaderData();
    const [cartInfo, setCartInfo] = useState(0);
    const [wishListInfo, setWishListInfo] = useState(0);
    return (
        <div>
            <apiData.Provider value={{ApiData, cartInfo, setCartInfo, setWishListInfo, wishListInfo}}>
                <ToastContainer /> 
                <Navbar></Navbar>
                <Outlet></Outlet>
                <Footer></Footer>
            </apiData.Provider>
        </div>
    );
};
export const apiData = createContext();
export default Root;