import { useContext } from "react";
import { apiData } from "../Root/Root";
import { Link } from "react-router";
const Newarrival = () => {
    const {ApiData} = useContext(apiData);
    const {newArrival} = ApiData;
    return (
        <div>
            <div className="bg-[#9538E2] py-10 flex flex-col items-center gap-5">
                <h1 className="text-white text-2xl md:text-4xl font-semibold">New Arrival</h1>
                <p className="max-w-[796px] text-center text-gray-300">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-3/4 gap-2 mx-auto pt-9">
                {
                    newArrival?.map(product => <div key={product.product_id} className="card p-2 bg-white">
                <figure className="h-44">
                    <img alt={`image of ${product.product_title}`} className="max-h-44 w-full object-cover rounded-xl" />
                </figure>
                <div className="flex flex-col justify-start gap-3">
                    <h2 className="line-clamp-1">{product.product_title}</h2>
                    <p>Price: <span className="text-purple-500 font-semibold">${product.price}</span></p>
                    <Link to={`/products/${product.category}/${product.product_id}`}>
                        <button className="btn capitalize bg-white border-2 border-purple-500 rounded-3xl hover:bg-[#9538E2] hover:text-white text-[#9538E2] w-fit">View Details</button>
                    </Link>
                </div>
            </div>)
                }
            </div>
        </div>
    );
};

export default Newarrival;