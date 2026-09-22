import Logo from "../assets/logo-text.png";


const Footer = () => {
    return (
        <footer className="bg-white border-t border-slate-200 mt-20">
            <div className="container mx-auto px-4 py-16">

                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

                    {/* Brand */}
                    <div>
                        <div className="mb-4">
                            <img
                                src={Logo}
                                alt="Dev Stack"
                                className="w-36"
                            />
                        </div>

                        <p className="text-slate-500 leading-6 max-w-sm">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>

                        <div className="flex gap-5 mt-6 text-slate-700 font-medium">
                            <a href="#">GitHub</a>
                            <a href="#">Twitter</a>
                            <a href="#">LinkedIn</a>
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4 uppercase tracking-wide">
                            Product
                        </h3>

                        <ul className="space-y-3 text-slate-500">
                            <li>
                                <a href="#" className="hover:text-pink-500">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-pink-500">
                                    Technologies
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-pink-500">
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4 uppercase tracking-wide">
                            Company
                        </h3>

                        <ul className="space-y-3 text-slate-500">
                            <li>
                                <a href="#" className="hover:text-pink-500">
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-pink-500">
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-pink-500">
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="font-semibold text-slate-900 mb-4 uppercase tracking-wide">
                            Legal
                        </h3>

                        <ul className="space-y-3 text-slate-500">
                            <li>
                                <a href="#" className="hover:text-pink-500">
                                    Privacy Policy
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-pink-500">
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-slate-200 mt-14 pt-8">

                    {/* Bottom Section */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400">

                        <p>
                            © 2026 Dev Stack. All rights reserved.
                        </p>

                        <div className="flex gap-6">
                            <a href="#" className="hover:text-pink-500">
                                Privacy
                            </a>

                            <a href="#" className="hover:text-pink-500">
                                Terms
                            </a>
                        </div>

                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;