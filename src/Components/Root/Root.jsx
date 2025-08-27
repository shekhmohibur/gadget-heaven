import { Outlet, useLoaderData } from "react-router";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";
import { createContext } from "react";
import { ToastContainer } from "react-toastify";
const Root = () => {
    const ApiData = useLoaderData();
    return (
        <div>
            <apiData.Provider value={ApiData}>
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