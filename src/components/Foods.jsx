import React, { useState } from 'react';
import { data } from './data/data';

const Foods = () => {
  // console.log(data);
  const [foods, setFoods] =
    useState(data);

  // Filter Type Category ex. burger/pizza/salad etc.
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return (
          item.category === category
        );
      }),
    );
  };
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      }),
    );
  };
  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-red-500 font-bold text-4xl text-center'>
        Top Rated Menu Items
      </h1>
      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Filter Type */}
        <div>
          <p className='font-bold text-gray-700 '>
            Filter Type
          </p>
          <div className='flex justify-between flex-wrap'>
            <button
              className='border-red-600 text-red-600 hover:bg-red-600 hover:text-white m-1 duration-500'
              onClick={() =>
                setFoods(data)
              }
            >
              All
            </button>
            <button
              className='border-red-600 text-red-600 hover:bg-red-600 hover:text-white m-1 duration-500'
              onClick={() =>
                filterType('burger')
              }
            >
              Burgers
            </button>
            <button
              className='border-red-600 text-red-600 hover:bg-red-600 hover:text-white m-1 duration-500'
              onClick={() =>
                filterType('pizza')
              }
            >
              Pizza
            </button>
            <button
              className='border-red-600 text-red-600 hover:bg-red-600 hover:text-white m-1 duration-500'
              onClick={() =>
                filterType('salad')
              }
            >
              Salads
            </button>
            <button
              className='border-red-600 text-red-600 hover:bg-red-600 hover:text-white m-1 duration-500'
              onClick={() =>
                filterType('chicken')
              }
            >
              Chicken
            </button>
          </div>
          {/* Filter Price */}
          <div>
            <p className='font-bold text-gray-700'>
              Filter Price
            </p>
            <div className='flex justify-between max-w-[390px] w-full'>
              <button
                className='border-red-600 text-red-600 hover:bg-red-600 hover:text-white m-1 duration-500'
                onClick={() =>
                  filterPrice('$')
                }
              >
                $
              </button>
              <button
                className='border-orange-600 text-red-600 hover:bg-red-600 hover:text-white m-1 duration-500'
                onClick={() =>
                  filterPrice('$$')
                }
              >
                $$
              </button>
              <button
                className='border-red-600 text-red-600 hover:bg-red-600 hover:text-white m-1 duration-500'
                onClick={() =>
                  filterPrice('$$$')
                }
              >
                $$$
              </button>
              <button
                className='border-red-600 text-red-600 hover:bg-red-600 hover:text-white m-1 duration-500'
                onClick={() =>
                  filterPrice('$$$$')
                }
              >
                $$$$
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Display Foods */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index) => (
          <div
            key={index}
            className='border shadow-lg hover:scale-105 duration-300 rounded-lg'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-4'>
              <p className='font-bold'>
                {item.name}
              </p>
              <p>
                <span className='bg-red-400 text-white p-1 rounded-lg'>
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Foods;
