import React from 'react';
import logo from "../../assets/logo.png";
import { FaCaretDown } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import DarkMode from './DarkMode';


const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Seller",
    link: "/#services",
  },
];

const DropdownMenu = [
  {
    name: "Top Sellers",
    link: "/#",
  },
  {
    name: "New Arrivals",
    link: "/#",
  },
  {
    name: "Trending Now",
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <div className=" shadow-md w-full bg-white dark:bg-gray-900  duration-200 relative z-40">
      <div className="container py-3 md:py-0">
        <div className='flex justify-between items-center'>
            
          {/* Logo Section */}
          <div>
            <a href="#" className="flex items-center text-2xl sm:text-3xl gap-2">
              <img
                src={logo}
                alt="Logo"
                className="h-10 w-10 object-cover rounded-full"
              />
              <span className="font-bold">Watch</span> Store
            </a>
          </div>
        

        {/* Menu Section */}
        <div className="flex justify-between items-center gap-2 lg:gap-8">
          
          <div><DarkMode/></div>


          <ul className=" hidden md:flex gap-4 items-center">
            {Menu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.link}
                  className="inline-block py-4 px-4 hover:text-primary"
                >
                  {menu.name}
                </a>
              </li>
            ))}
            <li className="relative group cursor-pointer">
              <a
                href="#"
                className="flex h-[72px] items-center gap-[2px] hover:text-primary"
              >
                Quick Links
                <span>
                  <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                </span>
              </a>
              <div className="absolute -left-9 z-[9999] hidden w-[150px] group-hover:block bg-white  dark:bg-gray-800 dark:text-white p-2 shadow-md  rounded-md">
                <ul className='space-y-3'>
                  {DropdownMenu.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.link}
                        className="block w-full p-2 hover:bg-primary/20"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
          {/* cart section */}
          <button onClick={()=> alert("Cart is empty ")} className='
          hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:scale-105 duration-200 py-1 px-4 rounded-full
          '>
          <FaShoppingCart   className='text-xl text-black dark:text-white drop-shadow-sm cursor-pointer'/>
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Navbar;
