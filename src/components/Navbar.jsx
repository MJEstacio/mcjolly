import React, { useState } from 'react';
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from 'react-icons/ai';
import {
  BsFillCartFill,
  BsFillSaveFill,
} from 'react-icons/bs';
import { TbTruckDelivery } from 'react-icons/tb';
import {
  MdFavorite,
  MdHelp,
} from 'react-icons/md';
import {
  FaWallet,
  FaUserFriends,
} from 'react-icons/fa';
const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className='max-w-[1640px] mx-auto flex justify-between p-4 items-center  '>
      {/* Left side */}
      <div className='flex items-center '>
        <div className='cursor-pointer'>
          <AiOutlineMenu
            size={30}
            onClick={() => setNav(!nav)}
          />
        </div>
        <h1 className='text-2xl sm:text-3xl lg:text-4xl text-yellow-300 bg-red-600 px-3 py-2  rounded-xl mr-2'>
          Mc
          <span className='font-bold text-white'>
            Jolly
          </span>
        </h1>
        <div className='hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]'>
          <p className='bg-black text-white rounded-full p-2'>
            Delivery
          </p>
          <p className='p-2'>PickUp</p>
        </div>
      </div>
      {/* Search Input */}
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={20} />
        <input
          type='search'
          placeholder='Search'
          className='bg-transparent p-2 focus:outline-none w-full '
        />
      </div>
      {/* Cart button */}
      <button className='bg-black text-white hidden md:flex items-center py-2 rounded-full'>
        <BsFillCartFill
          size={20}
          className='mr-2'
        />{' '}
        Cart
      </button>
      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>
      ) : (
        ''
      )}

      {/* SideBar Menu */}

      <div
        className={
          nav
            ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-500'
            : 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300'
        }
      >
        <AiOutlineClose
          size={30}
          className='absolute right-4 top-4 cursor-pointer'
          onClick={() => setNav(!nav)}
        />
        <h2 className='text-2xl p-4'>
          Food
          <span className='font-bold'>
            Trip
          </span>
        </h2>
        <nav>
          <ul className='flex flex-col p-4 text-gray-800'>
            <li className='text-xl py-4 flex'>
              <TbTruckDelivery
                size={30}
                className='mr-4'
              />
              Orders
            </li>
            <li className='text-xl py-4 flex'>
              <MdFavorite
                size={30}
                className='mr-4'
              />
              Favorites
            </li>
            <li className='text-xl py-4 flex'>
              <FaWallet
                size={30}
                className='mr-4'
              />
              Wallet
            </li>
            <li className='text-xl py-4 flex'>
              <MdHelp
                size={30}
                className='mr-4'
              />
              Help
            </li>
            <li className='text-xl py-4 flex'>
              <AiFillTag
                size={30}
                className='mr-4'
              />
              Promotions
            </li>
            <li className='text-xl py-4 flex'>
              <BsFillSaveFill
                className='mr-4'
                size={30}
              />
              Best Foods
            </li>
            <li className='text-xl py-4 flex'>
              <FaUserFriends
                className='mr-4'
                size={30}
              />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
