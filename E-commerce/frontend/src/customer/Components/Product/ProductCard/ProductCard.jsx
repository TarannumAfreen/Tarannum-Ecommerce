import React from 'react';
import "./ProductCard.css";
import{useLocation, useNavigate} from "react-router-dom";

const ProductCard = ({ product }) => {
  const { title, brand, imageUrl, price ,discountedPrice,color,discountPersent} = product;
  const navigate= useNavigate();
  

  const handleNavigate=()=>{
    navigate(`/product/${product?._id}`)
  }

  return (
   <div onClick={handleNavigate} className='productCard w-[15rem] border m-3  cursor-pointer   bg-pink-100 rounded-lg shadow-lg shadow-indigo-400/50 hover:shadow-2xl hover:shadow-indigo-500/70 transition-shadow duration-300 ease-in-out overflow-hidden animate-pulse '>
    <div className='h-[20rem] '>
        <img className='h-full w-full object-cover object-left-top  ' src={imageUrl} alt="" />
    </div>
    <div className='textPart bg-pink-100 p-3 '>
        <div>
        <p  className='font-bold opacity-60'>{brand}</p>
            <p className=''>{title}</p>
        
        <p className='font-semibold opacity-50'>{color}</p>
        </div>
        
        <div className='flex space-x-2 items-center'>
            <p className='font-semibold'>₹{discountedPrice}</p>
            <p className='opacity-50 line-through'>₹{price}</p>
            <p className='text-green-600 font-semibold'>{discountPersent}% off</p>
        </div>
        
    </div>
   </div>
  );
};

export default ProductCard;
