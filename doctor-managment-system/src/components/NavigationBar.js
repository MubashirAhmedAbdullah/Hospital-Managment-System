"use client"

import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export default function NavigationBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="mt-2">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-44">
                        <div className="flex-shrink-0">
                            <Image src={"/system-logo.jpg"} height={100} width={190} alt="logo image" />
                        </div>
                        <div className="hidden md:block">
                            <div className="flex items-baseline space-x-4">
                                <Link href="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font">Home</Link>
                                <Link href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font">Doctors</Link>
                                <Link href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font">Articles</Link>
                                <Link href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font">Appointments</Link>
                                <Link href="#" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font">About Us</Link>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <Button
                            variant="outline"
                            className="text-white w-24 h-10 bg-blue-600 hover:bg-blue-500 hover:text-white transition-transform duration-300 transform hover:scale-95"
                        >
                            Login
                        </Button>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
                        >
                            <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <a href="#" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Home</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Doctors</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Articles</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">Appointments</a>
                    <a href="#" className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium">About Us</a>
                    <Button
                        variant="outline"
                        className="text-white w-full h-10 bg-blue-600 hover:bg-blue-500 hover:text-white transition-transform duration-300 transform hover:scale-110 mt-2"
                    >
                        Login
                    </Button>
                </div>
            </div>
        </nav>
    );
}
