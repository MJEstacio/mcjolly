import React from 'react';
import { AiFillHeart } from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='flex bg-red-600 justify-center font-bold text-white py-5'>
      <span className='flex '>
        Made with
      </span>
      <AiFillHeart className='mx-2 text-yellow-300' />
      from the Philippines by MJ Dev
    </div>
  );
};

export default Footer;
