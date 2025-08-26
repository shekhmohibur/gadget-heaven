import { useContext, useState } from "react";
import Product from "../Product/Product";
import { apiData } from "../Root/Root";
const Products = () => {
    const { products } = useContext(apiData);
    const [productByCate, setProductByCate] = useState([]);
    const [activeBtn, setActiveBtn] = useState('All Products')
    const categories = [
        'All Products',
        'Smartphones',
        'Earbuds',
        'Tablets',
        'Portable Chargers'
    ]
    const handleCateProduct = category => {
        const filteredProducts = products.filter(product => product.category === category)
        setProductByCate(filteredProducts)
        setActiveBtn(category)
    }
    console.log(activeBtn)
    return (
        <div className="container mx-auto">
            <div className="mt-7 md:mt-[450px]">
                <h1 className="md:text-4xl text-center font-semibold mb-12">Explore Cutting-Edge Gadgets</h1>
                <div className="flex flex-col md:flex-row gap-3">
                    <div className="grid grid-cols-2 md:grid-cols-1 h-fit md:w-1/4 bg-white p-4 gap-4 rounded-lg">
                        {
                            categories?.map((category, index) => <button
                                key={index}
                                className={`btn bg-gray-100 
                            rounded-3xl
                            capitalize 
                            ${activeBtn === category ? 'bg-purple-500 text-white' : 'text-black'}
                            `}
                                onClick={() => handleCateProduct(category)}
                            >{category}</button>)
                        }
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-3/4 gap-2 mx-auto">
                        {
                            (productByCate?.length > 0 ? productByCate : products)?.map(product => <Product
                                key={product.product_id}
                                product={product}
                                productByCate={productByCate}
                            ></Product>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Products;