import React from "react";

import { useNavigate } from "react-router-dom";

const HomeProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      // onClick={() => navigate(`/men/clothing/mens_kurta`)}
      className="cursor-pointer flex flex-col items-center bg-[#E6E6FA] rounded-lg transition-shadow duration-300 ease-in-out overflow-hidden w-[15rem] mx-3 transform hover:scale-105 hover:opacity-90 animate-pulse"
    >
      <div className="h-[17rem] w-[12rem]">
        <img
          className="object-cover object-top w-full h-full"
          src={product?.image || product?.imageUrl}
          alt={product?.title}
        />
      </div>

      <div className="p-4 ">
        <h3 className="text-lg font-medium text-gray-900">
          {product?.brand || product?.title}
        </h3>
        <p className="mt-2 text-sm text-gray-500">{product?.title}</p>
      </div>
    </div>
  );
};

export default HomeProductCard;

// import React from "react";
// import { useNavigate } from "react-router-dom";

// const HomeProductCard = ({ product }) => {
//   const navigate = useNavigate();

//   // Mapping of product categories to paths
//   const categoryPaths = {
//     // Women's categories
//     "Women/Clothing/Tops": "Women/Clothing/tops",
//     "Women/Clothing/Jeans": "Women/Clothing/women_jeans",
//     "Women/Clothing/Lehenga Choli": "Women/Clothing/lehenga_choli",
//     "Women/Clothing/Dress": "Women/Clothing/dress",
//     "Women/Clothing/Gowns": "Women/Clothing/gowns",
//     "Women/Clothing/Top and Bottom Sets": "Women/Clothing/topand",
    
//     // Men's categories
//     "Men/Clothing/Kurta": "Men/Clothing/mens_kurta",
//     "Men/Clothing/Jeans": "Men/Clothing/men_jeans",
//     "Men/Clothing/Pants": "Men/Clothing/Pant"
//   };

//   // Determine the category path based on the product type
//   const categoryPath = categoryPaths[`${product?.category}/${product?.subcategory}`];

//   return (
//     <div
//       onClick={() => navigate(`/${categoryPath}`)}
//       className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3"
//     >
//       <div className="h-[13rem] w-[10rem]">
//         <img
//           className="object-cover object-top w-full h-full"
//           src={product?.image || product?.imageUrl}
//           alt={product?.title}
//         />
//       </div>

//       <div className="p-4 ">
//         <h3 className="text-lg font-medium text-gray-900">
//           {product?.brand || product?.title}
//         </h3>
//         <p className="mt-2 text-sm text-gray-500">{product?.title}</p>
//       </div>
//     </div>
//   );
// };

// export default HomeProductCard;
