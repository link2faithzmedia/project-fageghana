import Image from "next/image";
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Footer = () => {
    const quickLinks1 = [
        { name: "About", href: "#" },
        { name: "Services", href: "#" },
        { name: "Product", href: "#" },
    ];

    const quickLinks2 = [
        { name: "News", href: "#" },
        { name: "Activities", href: "#" },
        { name: "Careers", href: "#" },
    ];

    return (
        <footer className="bg-[#002817] text-white font-sans">
            <div className="container mx-auto px-4 py-20 lg:py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
                    {/* Column 1: Logo, Tagline, CTA */}
                    <div className="lg:col-span-4">
                        <a href="/" className="mb-8 inline-block">
                            <Image
                                src="/images/logos/fage-logo-footer.png"
                                alt="FAGE Logo"
                                width={189}
                                height={59}
                                className="h-auto"
                            />
                        </a>
                        <h2 className="text-3xl lg:text-4xl font-semibold leading-tight mb-8">
                            Exporting Quality And Authentic<br />
                            Ghanaian Products Globally.
                        </h2>
                        <a
                           href="#"
                           className="inline-flex items-center justify-between rounded-full bg-white text-[#002817] font-semibold text-base py-2 pl-6 pr-2 group transition-colors hover:bg-gray-100"
                        >
                            <span>Contact us now</span>
                            <span className="bg-primary rounded-full p-3 ml-4">
                                <ArrowRight className="h-5 w-5 text-white" />
                            </span>
                        </a>
                    </div>

                    {/* Column 2: Services */}
                    <div className="lg:col-span-2 pt-2">
                        <h5 className="font-semibold text-xl mb-6">Services</h5>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Policy & privacy</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms & conditions</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Quick Links */}
                    <div className="lg:col-span-3 pt-2">
                        <h5 className="font-semibold text-xl mb-6">Quick Links</h5>
                         <div className="grid grid-cols-2 gap-x-8">
                            <ul className="space-y-4">
                                {quickLinks1.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="text-gray-300 hover:text-white transition-colors">{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                            <ul className="space-y-4">
                                {quickLinks2.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href} className="text-gray-300 hover:text-white transition-colors">{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Column 4: Our Office */}
                    <div className="lg:col-span-3 pt-2">
                        <h5 className="font-semibold text-xl mb-6">Our office</h5>
                        <p className="text-gray-300 leading-relaxed mb-4">
                            AESL / Ghana Highway Authority Building 2nd floor Ministries, Accra / Ghana
                        </p>
                        <a href="tel:+2330535170780" className="text-gray-300 hover:text-white transition-colors">
                            +233 (0) 53 517 0780
                        </a>
                    </div>
                </div>
            </div>

            <div className="bg-[#00844A]">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex flex-col md:flex-row justify-between items-center text-white text-[15px]">
                        <div className="flex items-center gap-2 mb-2 md:mb-0">
                            <CheckCircle2 className="h-4 w-4" />
                            <span>Promoting non traditional effort</span>
                        </div>
                        <p>© 2025 FAGE All right reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;