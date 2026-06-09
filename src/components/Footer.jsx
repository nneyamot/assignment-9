import Link from "next/link";

const Footer = () => {
    return (

        <footer className="bg-gray-900 text-gray-300 mt-20 container mx-auto rounded">
            <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

                {/* Logo + About */}
                <div>
                    <h1 className="text-2xl font-bold text-white">MediQueue</h1>
                    <p className="mt-3 text-sm text-gray-400">
                        A smart tutor booking platform where students can easily find,
                        schedule, and manage learning sessions without conflicts.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
                        <li><Link href="/tutors" className="hover:text-blue-400">Tutors</Link></li>
                        <li><Link href="/login" className="hover:text-blue-400">Login</Link></li>
                        <li><Link href="/register" className="hover:text-blue-400">Register</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h2 className="text-lg font-semibold text-white mb-4">Services</h2>
                    <ul className="space-y-2 text-sm">
                        <li>Online Tutoring</li>
                        <li>Session Booking</li>
                        <li>Schedule Management</li>
                        <li>Private Learning</li>
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h2 className="text-lg font-semibold text-white mb-4">Contact</h2>
                    <p className="text-sm">📍 Chattogram, Bangladesh</p>
                    <p className="text-sm mt-2">📧 support@mediqueue.com</p>
                    <p className="text-sm mt-2">📞 +880 1234 567890</p>

                    {/* Social */}
                    <div className="flex gap-3 mt-4">
                        <a className="hover:text-blue-400">Facebook</a>
                        <a className="hover:text-blue-400">Twitter</a>
                        <a className="hover:text-blue-400">LinkedIn</a>
                    </div>
                </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-800 py-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} MediQueue. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;