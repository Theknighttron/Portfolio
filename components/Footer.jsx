import Link from "next/link";

function Footer() {
    return (
        <footer className="bg-black text-white shadow">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8 text-white">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <span
                            className="self-center animate-typing text-2xl text-white font-semibold whitespace-nowrap overflow-hidden">
                            Eat.Sleep.Code.Repeat
                        </span>
                    </div>
                    <ul className="flex flex-wrap items-center mb-6 text-md font-medium sm:mb-0 text-white">
                        <li>
                            <Link href="#" className="hover:underline me-4 md:me-6 text-white"> LinkedIn </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline me-4 md:me-6 text-white"> Github </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline me-4 md:me-6 text-white"> Resume </Link>
                        </li>
                        <li>
                            <Link href="#" className="hover:underline text-white"> Gmail </Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-white sm:text-center">
                    © 2024 made with love by <Link href="#" className="hover:underline"> chrisspaul </Link>
                    . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
}

export default Footer;
