'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {

    const pathname = usePathname();
    return (
        <div className="flex justify-between items-center bg-white p-5 container mx-auto max-w-7xl shadow mt-5 rounded-2xl mb-10">

            <h1 className="font-bold text-xl ">TutorsFind</h1>
            <ul className="flex items-center gap-3 text-xl ">

                <Link href={'/'}
                    className={pathname === '/' ? "border-b-2 border-blue-600" : " "} >
                    <li>Home</li>
                </Link>
                <Link href={'/tutors'}
                    className={pathname === '/tutors' ? "border-b-2 border-blue-600" : " "} >
                    <li>Tutors</li>
                </Link>

            </ul>

            <ul className="font-bold text-xl ">
                <li>login</li>
            </ul>

        </div>
    );
};

export default Navbar;