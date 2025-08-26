import { useContext } from "react";
import { useParams } from "react-router";
import { apiData } from "../Root/Root";
import { Rating } from "@mui/material";
import { IoCartOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
const ProductDetails = () => {
    const { product_id } = useParams();
    const { products = [], newArrival = [] } = useContext(apiData);
    const aProduct = [...products, ...newArrival]?.find(product => product.product_id === product_id);
    const { product_image, product_title, price, category, availability, description, specification, rating} = aProduct;
    console.log(aProduct)
    return (
        <div className="relative">
            <div className="bg-[#9538E2] md:pb-96 relative">
                <div className=" flex flex-col mx-auto text-center max-w-3xl gap-3 py-8">
                    <h1 className="text-white text-2xl font-semibold">Product Details</h1>
                    <p className="text-gray-100">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
                <div className="container mx-auto">
                    <div className="card card-side bg-base-100 shadow-sm container p-5 absolute flex-col md:flex-row">
                        <figure className="max-w-[424px]">
                            <img
                                src={product_image}
                                className="rounded-2xl max-w-[424px]"
                            />
                        </figure>
                        <div className="md:card-body md:w-1/2 ">
                            <div className="flex flex-col gap-3">
                                <h2 className="card-title">{product_title}</h2>
                                <p className="font-semibold">Price: ${price}</p>
                                <div className={`${availability === true ? 'bg-[#309C081A] badge border-2 p-4 text-[#2f9c08] border-[#2f9c084f]' : 'bg-[#9c08081a] badge border-2 p-4 text-[#9c0808] border-[#9c08084f]'}`}>{availability === true ? 'In Stock' : 'Out of Stock'}</div>
                                <p className="text-sm text-justify">{description}</p>
                                <div>
                                    <h1 className="font-semibold">Specification:</h1>
                                    <ol className="list-decimal pl-4">
                                        {
                                        specification?.map((spec, index) => <li key={index}>{spec}</li>)
                                    }
                                    </ol>
                                </div>
                                <div>
                                    <h2 className="font-semibold">Rating</h2>
                                    <div className="item-center flex gap-3">
                                        <Rating name="half-rating-read" defaultValue={rating} precision={0.5} readOnly />
                                    <span className="block bg-gray-300 py-1 px-2 rounded-xl">{rating}</span>
                                    </div>
                                </div> 
                            </div>
                            <div className="card-actions mt-4 items-center">
                                <button className="btn bg-purple-600 text-white capitalize rounded-3xl hover:text-purple-600">Add To Cart <IoCartOutline className="text-2xl" /></button>
                                <button className="p-2 bg-white border-2 border-gray-300 rounded-full text-3xl"><CiHeart /></button>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;