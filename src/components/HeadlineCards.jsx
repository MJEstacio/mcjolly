import React from 'react';

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>
            Burgers
          </p>
          <p className='px-2'>
            Lorem ipsum dolor sit amet
            consectetur, adipisicing
            elit. Cupiditate,
            perspiciatis.
          </p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
            Order Now
          </button>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.pexels.com/photos/3219547/pexels-photo-3219547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt='/'
        />
      </div>
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>
            Fries
          </p>
          <p className='px-2'>
            Lorem ipsum dolor sit amet
            consectetur adipisicing
            elit. Iusto earum ipsum
            molestias facere. Rerum?
          </p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
            Order Now
          </button>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.pexels.com/photos/1583891/pexels-photo-1583891.jpeg?auto=compress&cs=tinysrgb&w=1600'
          alt='/'
        />
      </div>
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>
            Beverages
          </p>
          <p className='px-2'>
            Lorem ipsum dolor sit amet,
            consectetur adipisicing
            elit. Corporis sit deleniti
            consequuntur iure accusamus
            error.
          </p>
          <button className='border-white bg-white text-black mx-2 absolute bottom-4'>
            Order Now
          </button>
        </div>
        <img
          className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src='https://images.pexels.com/photos/5946966/pexels-photo-5946966.jpeg?auto=compress&cs=tinysrgb&w=1600'
          alt='/'
        />
      </div>
    </div>
  );
};

export default HeadlineCards;
