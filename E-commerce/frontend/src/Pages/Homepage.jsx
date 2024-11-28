// import React from "react";
// import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
// import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
// import HomeProductSection from "../customer/Components/Home/HomeProductSection";
// import { sareePage1 } from "../Data/Saree/page1";
// import { dressPage1 } from "../Data/dress/page1";
// import { gounsPage1 } from "../Data/Gouns/gouns";
// import { kurtaPage1 } from "../Data/Kurta/kurta";
// import { mensShoesPage1 } from "../Data/shoes";
// import { mens_kurta } from "../Data/Men/men_kurta";
// import { lengha_page1 } from "../Data/Women/LenghaCholi";
// import { men_jeans } from "../Data/Men/men_jeans"; 
// import { men_shirts } from "../Data/Men/men_shirt";
// import { women_jeans } from "../Data/Women/women_jeans";
// import { women_tops } from "../Data/Women/women_top";
// import { mensPantsPage1 } from "../Data/pants/men_page1";
// import tops from './images/tops.png'
// import gouns from './images/goun1.jpg'
// import western from './images/western.jpg'
// import womenJeans from './images/jeans3.jpg'
// import men from './images/men.jpg'


// const Homepage = () => {
   

//   return (
//     <div className="font-serif  " >
    
//       <HomeCarousel images={homeCarouselData} />
      

   



// <div className="">


//       <HomeProductSection data={mens_kurta} section={"Men's Kurta"}  />
//       <HomeProductSection data={men_jeans} section={"Men's Jeans"} />
//       <HomeProductSection data={men_shirts} section={"Men's Shirt"} />
//       <HomeProductSection data={mensPantsPage1} section={"Men's Pants"} />


   
       
      
//         <HomeProductSection data={dressPage1} section={"Dress"} />
//         <HomeProductSection data={gounsPage1} section={"Women's Gouns"} />
//         <HomeProductSection data={kurtaPage1} section={"Women's Kurtas"} />
//         <HomeProductSection data={women_tops} section={"Women's Tops"} />

//         <HomeProductSection data={women_jeans} section={"Women Jeans"}/>
//         <HomeProductSection data={sareePage1} section={"Saree"} />
//         {/* <HomeProductSection data={mensPantsPage1} section={"Men's Pants"} /> */}
//         </div>
//       </div>


//   );
// };

// export default Homepage;

import React from "react";
import { useNavigate } from "react-router-dom";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { sareePage1 } from "../Data/Saree/page1";
import { dressPage1 } from "../Data/dress/page1";
import { gounsPage1 } from "../Data/Gouns/gouns";
import { lehngacholiPage2 } from "../Data/Saree/lenghaCholiPage2";
import { mens_kurta } from "../Data/Men/men_kurta";
import { men_jeans } from "../Data/Men/men_jeans"; 
import { men_shirts } from "../Data/Men/men_shirt";
import { women_jeans } from "../Data/Women/women_jeans";
import { women_tops } from "../Data/Women/women_top";
import { mensPantsPage1 } from "../Data/pants/men_page1";

const Homepage = () => {
  const navigate = useNavigate();

  // Function to handle navigation
  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="font-serif">
      <HomeCarousel images={homeCarouselData} />
      <div>
     
        <HomeProductSection 
          data={dressPage1} 
          section={"Dress"} 
          onClick={() => handleNavigation('/Women/Clothing/Dress')}
        />
          <HomeProductSection 
          data={women_tops} 
          section={"Women's Tops"} 
          onClick={() => handleNavigation('/Women/Clothing/top')}
        />
       

        <HomeProductSection 
          data={lehngacholiPage2} 
          section={"Women's LehengaCholi"} 
          onClick={() => handleNavigation('/Women/Clothing/lahengacholi')}
        />
      
        <HomeProductSection 
          data={women_jeans} 
          section={"Women Jeans"} 
          onClick={() => handleNavigation('/Women/Clothing/women_jeans')}
        />
         <HomeProductSection 
          data={gounsPage1} 
          section={"Women's Gouns"} 
          onClick={() => handleNavigation('/Women/Clothing/gouns')}
        />
        <HomeProductSection 
          data={sareePage1} 
          section={"Saree"} 
          onClick={() => handleNavigation('/Women/Clothing/saree')}
        />

        {/* // Men */}

        <HomeProductSection 
          data={mens_kurta} 
          section={"Men's Kurta"} 
          onClick={() => handleNavigation('/Men/Clothing/mens_kurta')}
        />
        <HomeProductSection 
          data={men_jeans} 
          section={"Men's Jeans"} 
          onClick={() => handleNavigation('/Men/Clothing/men_jeans')}
        />
        <HomeProductSection 
          data={men_shirts} 
          section={"Men's Shirt"} 
          onClick={() => handleNavigation('/Men/Clothing/shirt')}
        />
        <HomeProductSection 
          data={mensPantsPage1} 
          section={"Men's Pants"} 
          onClick={() => handleNavigation('/Men/Clothing/Pant')}
        />
      </div>
    </div>
  );
};

export default Homepage;

