import { useContext } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';
import { apiData } from '../Root/Root';
const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 },];
const Statistics = () => {
    const {ApiData} = useContext(apiData);
    const {products} = ApiData;
    return (
        <div>
            <div className="bg-[#9538E2] py-10 flex flex-col items-center gap-5">
                <h1 className="text-white text-2xl md:text-4xl font-semibold">Statistics</h1>
                <p className="max-w-[796px] text-center text-gray-300">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
            </div>
            <div className={`flex justify-between px-6 items-center py-8`}>
                <h2 className="font-semibold">Statistics</h2>
            </div>
            <div className='h-[450px] container mx-auto bg-white p-4'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={products}>
                    <XAxis dataKey="rating" stroke="#9538E2" />
                    <YAxis />
                    <Tooltip />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <Bar dataKey="price" fill="#9538E2" barSize={25} />
                </BarChart>
                </ResponsiveContainer>
                <div className='flex justify-center gap-6 bg-white pb-3'>
                        <div className='flex gap-2 items-center'>
                            <div className='w-4 h-4 bg-[#9538E2]'></div>
                            <p>Price</p>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <div className='w-4 h-4 bg-[#b26bec]'></div>
                            <p>Rating</p>
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;