import { useContext, useState } from "react";
import { apiData } from "../Root/Root";
import Product from "../Product/Product";
const Products = () => {
    const {products} = useContext(apiData);
    const [activeBtn, setActiveBtn] = useState('All Products')
    const categories = [
        'All Products',
        'Smartphones',
        'Earbuds',
        'Tablets',
        'Portable Chargers'
    ]
    console.log(products)
    return (
        <div className="container mx-auto">
            <div className="mt-7 md:mt-[450px]">
                <h1 className="md:text-4xl text-center font-semibold mb-12">Explore Cutting-Edge Gadgets</h1>
                <div className="flex md:flex-row gap-3">
                    <div className="flex md:flex-col w-1/4 bg-white p-4 gap-4 rounded-lg">
                        {
                            categories?.map((category, index) => <button
                            key={index}
                            className={`btn bg-gray-100 text-black
                            rounded-3xl
                            capitalize hover:text-[#9538E2]
                            ${activeBtn === category ? 'bg-purple-500 text-white' : ''}
                            `}
                            onClick={() => setActiveBtn(category)}
                            >{category}</button>)
                        }
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-3/4 gap-2">
                        {
                            products?.map(product => <Product 
                                key={product.product_id}
                                product={product}
                                ></Product>)
                        }
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Products;