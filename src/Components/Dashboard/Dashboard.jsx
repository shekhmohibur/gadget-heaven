import { useState } from "react";
import { SlEqualizer } from "react-icons/sl";
const Dashboard = () => {
    const [switchCartWishlist, setSwitchCartWishlist] = useState('cart');
    return (
        <div>
            <div className="bg-[#9538E2] py-10 flex flex-col items-center gap-5">
                <h1 className="text-white text-2xl md:text-4xl font-semibold">Dashboard</h1>
                <p className="max-w-[796px] text-center text-gray-300">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="flex gap-4">
                    <button className={`btn hover:text-[#9538E2] bg-[#9538E2] capitalize px-10 rounded-3xl ${switchCartWishlist === 'cart' ? 'bg-white text-[#9538E2]' : 'text-white'}`} onClick={() => setSwitchCartWishlist('cart')}>Cart</button>
                    <button className={`btn hover:text-[#9538E2] bg-[#9538E2] capitalize px-10 rounded-3xl ${switchCartWishlist === 'wishlist' ? 'bg-white text-[#9538E2]' : 'text-white' }`} onClick={() => setSwitchCartWishlist('wishlist')}>Wishlist</button>
                </div>
            </div> 
            <div className="bg-gray-100">
                <div className={`flex justify-between px-6 items-center py-8 ${switchCartWishlist === 'wishlist' ? 'hidden' : ''}`}>
                    <h2 className="font-semibold">Cart</h2>
                    <div className="flex gap-2 items-center">
                        <p className="font-semibold">Total cost:</p>
                        <div className="badge gap-2 p-5 bg-transparent border-2 border-purple-600 text-[#9538E2] hover:bg-[#9538E2] hover:text-white cursor-pointer capitalize font-semibold"> sort by price <SlEqualizer /></div>
                        <button className="btn bg-[#9538E2]  text-white rounded-3xl capitalize px-8 py6 hover:text-[#9538E2]">Purchase</button>
                    </div>
                </div>
                <div className={`flex justify-between px-6 items-center py-8 ${switchCartWishlist === 'cart' ? 'hidden' : ''}`}>
                    <h2 className="font-semibold">WishList</h2>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;