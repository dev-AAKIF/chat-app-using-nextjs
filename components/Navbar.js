"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
// import { useUser } from "@clerk/nextjs";

export default function Navbar() {
  // const user = useUser();
  // console.log(user?.user?.id);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md relative w-full z-10">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-indigo-600">FasChat</Link>

        {/* Desktop Links */}
        <ul className="flex space-x-4 justify-center items-center">
          {/* <div className="hidden md:flex space-x-8"> */}
          <li>
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
          </li>
          <li>
            <Link href="/forums" className="text-gray-600 hover:text-gray-900">
              Forums
            </Link>
          </li>
          <li>
            <Link href="/chat" className="text-gray-600 hover:text-gray-900">
              UserChat
            </Link>
          </li>
          <li className="flex justify-center items-center">
            <UserButton />
          </li>
        </ul>
        </div>


      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 py-2 space-y-2">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block text-gray-600 hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              href="/forums"
              onClick={() => setIsOpen(false)}
              className="block text-gray-600 hover:text-gray-900"
            >
              Forums
            </Link>
            <Link
              href="/chat"
              onClick={() => setIsOpen(false)}
              className="block text-gray-600 hover:text-gray-900"
            >
              UserChat
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
