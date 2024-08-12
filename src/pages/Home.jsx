import React, { useState } from 'react';
import Nav from '../Nav';

import pngwing1 from '../assets/DisplayB.png';
import pngwing2 from '../assets/DisplayR.png';
import pngwing3 from '../assets/DisplayW.png';
import pngwing4 from '../assets/DisplayO.png';
import price from '../assets/$125.00.png';

function Home() {
  const shoeObj = [
    { src: pngwing1, color: "orange"},
    { src: pngwing2, color: "red" },
    { src: pngwing3, color: "white" },
    { src: pngwing4, color: "brown" }
  ];

  const [imgSrc, setImageSrc] = useState(shoeObj[0]);

  const handleImageClick = (index) => {
    setImageSrc(shoeObj[index]);
  };

  return (
    <div>
      <Nav />
      <div>
        <div className="absolute md:z-30 top-24 right-6">
          <img src={imgSrc.src} alt={`Shoe in ${imgSrc.color}`} className="h-[500px]" />
        </div>
        <div className="absolute md:z-10 top-52 left-8">
          <img src={price} alt="Price" className="w-auto h-auto" />
        </div>
        <h3 className="absolute md:z-20 top-[350px] left-10 font-semibold text-2xl">
          AIR JORDAN 1 MID
        </h3>
        <p className="absolute md:z-20 left-10 top-[380px] opacity-50 text-xl font-semibold">
          4 Colors
        </p>
        <div className="absolute md:z-20 top-[410px] left-10 w-96 font-semibold">
          Inspired by the original AJ1, this mid-top edition maintains the iconic look you love while choice colors and crisp leather give it a distinct identity.
        </div>
        <button className="bg-black rounded-full absolute md:z-20 top-[500px] w-28 text-white h-9 left-10">
          Buy Now
        </button>
      </div>
      <div className="flex relative top-28 h-20">
        {shoeObj.map((shoe, index) => (
          <img
            key={index}
            src={shoe.src}
            alt={`Shoe color ${shoe.color}`}
            className="h-20 cursor-pointer"
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
