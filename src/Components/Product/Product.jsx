const Product = ({product}) => {
    const {product_image, product_title, price} = product;
    return (
        <div>
            <div className="card p-2 bg-white">
                <figure className="h-44">
                    <img src={product_image} alt={`image of ${product_title}`} className="max-h-44 w-full object-cover rounded-xl"/>
                </figure>
                <div className="flex flex-col justify-start gap-3">
                    <h2 className="line-clamp-1">{product_title}</h2>
                    <p>Price: <span className="text-purple-500 font-semibold">${price}</span></p>
                    <button className="btn capitalize bg-white border-2 border-purple-500 rounded-3xl hover:bg-[#9538E2] hover:text-white text-[#9538E2] w-fit">View Details</button>
                </div>
            </div>
        </div>
    );
};
export default Product;