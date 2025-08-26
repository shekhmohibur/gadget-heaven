const Footer = () => {
    return (
        <footer className="bg-white pt-3 mt-20">
            <div className="flex flex-col items-center pt-16">
                <h1 className="md:text-3xl font-semibold text-black">Gadget Heaven</h1>
                <p className="text-gray-500 text-center">Leading the way in cutting-edge technology and innovation.</p>
            </div>
            <div className="footer sm:footer-horizontal bg-white text-neutral-content p-10">
                <nav className="text-gray-500">
                    <h6 className="font-semibold text-black capitalize">Services</h6>
                    <a className="link link-hover">Product Support</a>
                    <a className="link link-hover">Order Tracking</a>
                    <a className="link link-hover">Shipping & Delivery</a>
                    <a className="link link-hover">Returns</a>
                </nav>
                <nav className="text-gray-500">
                    <h6 className="font-semibold text-black capitalize">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav className="text-gray-500">
                    <h6 className="font-semibold text-black capitalize">Legal</h6>
                    <a className="link link-hover">Terms of Services</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;