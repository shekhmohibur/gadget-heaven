import { toast } from "react-toastify";
const checkLsCart = () => {
    const checkCart = localStorage.getItem('cart');
    if (checkCart) {
        const availableItems = JSON.parse(checkCart);
        return availableItems;
    } else {
        return [];
    }
}
const checkLsWishlist = () => {
    const checkWishlist = localStorage.getItem('wishlist');
    if (checkWishlist) {
        const availableItems = JSON.parse(checkWishlist);
        return availableItems;
    } else {
        return [];
    }
}
const addToLocalStorageCart = id => {
    const availableItems = checkLsCart();
    if (availableItems.includes(id)) {
        toast.warn(`You've already added to cart`, {
            position: "top-center",
            autoClose: 3000, // 
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "colored",
        });
    } else {
        availableItems.push(id);
        const addItem = JSON.stringify(availableItems);
        localStorage.setItem('cart', addItem);
        toast.success(`Product added to cart`, {
            position: "top-center",
            autoClose: 3000, // closes after 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "colored", // "light", "dark", "colored"
        });
    }
}
const addToLocalStorageWishlist = id => {
    const availableItems = checkLsWishlist();
    if (availableItems.includes(id)) {
        toast.warn(`You've already added to wishlist`, {
            position: "top-center",
            autoClose: 3000, // 
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "colored",
        });
    } else {
        availableItems.push(id);
        const addItem = JSON.stringify(availableItems);
        localStorage.setItem('wishlist', addItem);
        toast.success(`Product added to wishlist`, {
            position: "top-center",
            autoClose: 3000, // closes after 3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: "colored", // "light", "dark", "colored"
        });
    }
}
const removeCart = () => {
    localStorage.removeItem('cart');
}
const removeItem = id => {
    const lsItems = localStorage.getItem('cart')
    const parsedItems = JSON.parse(lsItems)
    const removeditem = parsedItems.filter(item => item !== id)
    localStorage.setItem('cart', JSON.stringify(removeditem))
    console.log(lsItems)
}

export { addToLocalStorageCart, checkLsCart, removeCart, removeItem, addToLocalStorageWishlist, checkLsWishlist }