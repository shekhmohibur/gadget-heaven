import { useParams } from "react-router";

const ProductDetails = () => {
    const productParams = useParams();
    console.log(productParams)
    return (
        <div>
            <div className="bg-[#9538E2] md:pb-96 relative">
                <div className=" flex flex-col mx-auto text-center max-w-3xl gap-3 py-8">
                    <h1 className="text-white text-2xl font-semibold">Product Details</h1>
                    <p className="text-gray-100">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                </div>
                <div>
                    <div className="card card-side bg-base-100 shadow-sm container mx-auto p-5">
                        <figure className="w-1/2">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                                alt="Movie" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">New movie is released!</h2>
                            <p>Click the button to watch on Jetflix app.</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Watch</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;