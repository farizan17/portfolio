import { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion";

//
function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0  duration-200  backdrop-blur-xl w-full border-b border-gray-300 md:border-0 z-30">
      <div className="max-w-3xl mx-auto text-sm items-center flex justify-between py-4 font-normal px-4 md:px-2">
        {/* <img
          src="/profilepic.jpeg"
          className="w-8 h-8 mr-4 object-cover rounded-full bg-gray-800 flex items-center justify-center"
        /> */}
        <div
          className={
            menu
              ? "md:mt-0 flex-1 fixed top-0 right-0 z-10 sm:static w-full h-screen bg-white flex items-center justify-center sm:h-auto sm:flex-row sm:bg-transparent sm:inline "
              : "md:mt-0 flex-1 fixed top-0 right-0 z-10 sm:static w-full h-screen bg-white hidden items-center justify-center sm:h-auto sm:flex-row sm:bg-transparent sm:inline "
          }
        >
          <button
            onClick={() => setMenu(false)}
            className="p-2 border-none duration-150 bg-gray-100 sm:hidden absolute top-0 right-0 m-6 rounded-md active:bg-gray-300"
          >
            <AiOutlineClose />
          </button>
          <div className="text-md flex items-center sm:space-x-2 space-y-4 sm:space-y-0 flex-col sm:flex-row">
            <Link href="/" passHref>
              <div className="py-1 cursor-pointer px-3 bg-none duration-150 rounded-md hover:bg-gray-200">
                Home
              </div>
            </Link>
            <Link href="/about" passHref>
              <div className="py-1 cursor-pointer px-3 bg-none duration-150 text-gray-500 rounded-md hover:bg-gray-200">
                Dashboard
              </div>
            </Link>

            <div className="py-1 cursor-pointer px-3 bg-none duration-150 text-gray-500 rounded-md hover:bg-gray-200">
              Project
            </div>
            <div className="py-1 cursor-pointer px-3 bg-none duration-150 text-gray-500 rounded-md hover:bg-gray-200">
              Link
            </div>
          </div>
        </div>
        <button
          className="p-2 bg-gray-200 sm:hidden rounded-md border-none text-xl active:bg-gray-300 duration-150"
          onClick={() => setMenu(true)}
        >
          <HiMenuAlt3 />
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
