import { Link } from "react-router";

const Error = () => {
    return (
        <div className="flex justify-center items-center min-h-screen flex-col">
            <h1 className="text-4xl font-bold uppercase">Error 404</h1>
            <Link to={'/'} className="text-lg bg-purple-700 text-white bg-purple-600 btn hover:text-black">Go Home</Link>
        </div>
    );
};

export default Error;