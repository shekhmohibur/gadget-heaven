import banner from '../../assets/images/banner.jpg'
import Products from '../Products/Products';
import { useLoaderData } from 'react-router';
const Home = () => {
    const products = useLoaderData();
    return (
        <div>
            <div className="bg-[#9538E2] mx-7 rounded-br-xl rounded-bl-xl md:relative flex items-center flex-col md:pb-72">
                <div className="text-center">
                    <div className="max-w-[1120px] mx-auto py-7">
                        <h1 className="text-4xl lg:text-[56px] font-bold leading-normal text-white">Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className="py-6 max-w-3xl mx-auto text-gray-100">
                            Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
                        </p>
                        <button className="btn text-[#9538E2] normal-case rounded-3xl px-6 text-xl">Shop Now</button>
                    </div>
                </div>
                    <div className='md:p-5 md:border-2 w-fit mx-auto md:bg-[#ffffff20] rounded-2xl md:absolute top-2/3 flex justify-center items-center'>
                        <img src={banner} alt="Banner Image" className='rounded-2xl md:h-[564px] object-contain'/>
                    </div>
            </div>
            <Products></Products>
        </div>
    );
};
export default Home;