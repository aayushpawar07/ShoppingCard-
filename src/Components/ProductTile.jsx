import React from 'react';

import { useNavigate } from 'react-router-dom'

function ProductTile({ singleProductTile }) {

    const navigate = useNavigate();

    function hangleNavigation(getCurrentProductid){
  console.log( getCurrentProductid , navigate );
  navigate(`/productDetails/${getCurrentProductid}`);

  
    }


  return (
    <div className='relative group border border-cyan-700 p-6 cursor-pointer border-r-amber-200 rounded'>

      <div className='overflow-hidden aspect-w-1 aspect-h-1'>
        <img
          src={singleProductTile?.thumbnail}
          alt={singleProductTile?.title}
          className='object-cover w-full h-full transition-all duration-300 group-hover:scale-125'
        />
      </div>

      <div className='mt-4 space-y-4'>
        <div className='flex items-start justify-between space-x-4'>
          <div className='font-bold text-gray-900 sm:text-sm text-xs md:text-base'>
            <h3 className='w-[100px] overflow-hidden text-ellipsis whitespace-normal'>
              {singleProductTile?.title}
            </h3>
          </div>
          <div className='text-right'>
            <p className='text-xs font-bold text-gray-900 sm:text-sm md:text-[14px]'>
              ${singleProductTile?.price}
            </p>
          </div>
        </div>

        <button onClick={()=> hangleNavigation(singleProductTile?.id)} className='w-full px-5 py-2 mt-2 bg-black text-white font-bold text-lg'>
          View Details
        </button>
      </div>

    </div>
  );
}

export default ProductTile;
