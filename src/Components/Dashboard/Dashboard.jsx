import { useContext, useEffect, useState } from "react";
import { SlEqualizer } from "react-icons/sl";
import { addToLocalStorageCart, checkLsCart, checkLsWishlist, removeCart, removeItem } from "../../utility/localstorage";
import { apiData } from "../Root/Root";
import { RxCrossCircled } from "react-icons/rx";
import modalIcon from  '../../assets/images/Group.png';
const Dashboard = () => {
    const [switchCartWishlist, setSwitchCartWishlist] = useState('cart');
    const [cartItems, setCartItems] = useState([]);
    const [wishlistItems, setWishListItems] = useState([]);
    const [cartPrice, setItemPrice] = useState(0);
    const {ApiData, setCartInfo, setWishListInfo} = useContext(apiData);
    const {products, newArrival }= ApiData;
    const allProducts = [...products, ...newArrival]
    useEffect(() => {
        const storedIdCart = checkLsCart();
        const cartItem = allProducts.filter(product => storedIdCart.includes(product.product_id));
        setCartItems(cartItem);
        const cartItemsPrice = cartItem.reduce((acc, item) => acc + item.price, 0)
        setItemPrice(cartItemsPrice)
        const storedIdWishlist = checkLsWishlist();
        const wishListItem = allProducts.filter(product => storedIdWishlist.includes(product.product_id));
        setWishListItems(wishListItem)
        setCartInfo(storedIdCart.length)
        setWishListInfo(storedIdWishlist.length)
    }, [])
const removeCarts = () => {
  const modal = document.getElementById('my_modal_5');
  modal.showModal();
  const handleClose = () => {
    setItemPrice(0);
    removeCart();
    setCartItems([]);
    modal.removeEventListener('close', handleClose);
  };

  modal.addEventListener('close', handleClose);
};
    const removeLsItem = id => {
        const removeFromUi = [...cartItems].filter(item => item.product_id !== id);
        setCartItems(removeFromUi)
        removeItem(id);
    }
    const handleCart = id => {
        addToLocalStorageCart(id)
    }
    const SortCartByPrice = () => {
        const sorted = [...cartItems].sort((a, b) => a.price - b.price);
        setCartItems(sorted)
    }
    return (
        <div>
            <div className="bg-[#9538E2] py-10 flex flex-col items-center gap-5">
                <h1 className="text-white text-2xl md:text-4xl font-semibold">Dashboard</h1>
                <p className="max-w-[796px] text-center text-gray-300">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                <div className="flex gap-4">
                    <button className={`btn hover:text-[#9538E2] bg-[#9538E2] capitalize px-10 rounded-3xl ${switchCartWishlist === 'cart' ? 'bg-white text-[#9538E2]' : 'text-white'}`} onClick={() => setSwitchCartWishlist('cart')}>Cart</button>
                    <button className={`btn hover:text-[#9538E2] bg-[#9538E2] capitalize px-10 rounded-3xl ${switchCartWishlist === 'wishlist' ? 'bg-white text-[#9538E2]' : 'text-white'}`} onClick={() => setSwitchCartWishlist('wishlist')}>Wishlist</button>
                </div>
            </div>
            <div className="bg-gray-100">
                <div className={`${switchCartWishlist === 'wishlist' ? 'hidden' : ''}`}>
                    <div className="flex justify-between px-6 items-center py-8">
                        <h2 className="font-semibold">Cart</h2>
                        <div className="flex gap-2 items-center flex-col md:flex-row">
                            <p className="font-semibold">Total cost: ${cartPrice}</p>
                            <div className="badge gap-2 p-5 bg-transparent border-2 border-purple-600 text-[#9538E2] hover:bg-[#9538E2] hover:text-white cursor-pointer capitalize font-semibold" onClick={SortCartByPrice}> sort by price <SlEqualizer /></div>
                            <button onClick={removeCarts} className="btn bg-[#9538E2]  text-white rounded-3xl capitalize px-8 py6 hover:bg-gray-300 hover:text-[#9538E2]">Purchase</button>
                        </div>
                    </div>
                </div>
                <div className={`flex justify-between px-6 items-center py-8 ${switchCartWishlist === 'cart' ? 'hidden' : ''}`}>
                    <h2 className="font-semibold">WishList</h2>
                </div>
                <div className="container mx-auto flex flex-col gap-4">
                    {
                        (switchCartWishlist === 'cart' ? cartItems : wishlistItems)?.map(item => <div key={item.product_id} className="bg-base-100 shadow-sm items-center p-3 rounded-lg md:flex">
                            <figure className="h-36 w-52 rounded-lg overflow-hidden flex-shrink-0">
                                <img
                                    src={item.product_image}
                                    alt={item.product_title}
                                    className="h-full w-full object-cover"
                                />
                            </figure>
                            <div className="flex gap-5 ml-3">
                                <div className="flex flex-col gap-3">
                                    <h2 className="md:text-2xl font-semibold">{item.product_title}</h2>
                                    <p className="line-clamp-1 text-sm md:text-base">{item.description}</p>
                                    <p className="font-semibold">Price: ${item.price}</p>
                                    <button onClick={() => handleCart(item.product_id)} className={`btn bg-purple-600 text-white capitalize rounded-3xl hover:bg-white hover:text-purple-600 w-fit ${switchCartWishlist === 'cart' ? 'hidden' : ''}`}>Add To Cart</button>
                                </div>
                                <div className="flex justify-center">
                                    <button onClick={() => removeLsItem(item.product_id)} className={`text-red-500 text-3xl ${switchCartWishlist === 'wishlist' ? 'hidden' : ''}`}><RxCrossCircled /></button>
                                </div>
                            </div>

                        </div>)
                    }
                </div>
                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                    <div className="modal-box flex flex-col justify-center items-center gap-1">
                        <img src={modalIcon}/>
                        <h1 className="md:text-2xl font-semibold">Payment Successfull</h1> 
                        <hr />
                        <p>Thanks for Purchasing</p>                   
                        <p>Total Price: ${cartPrice}</p>
                        <div className="modal-action">
                            <form method="dialog">
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default Dashboard;