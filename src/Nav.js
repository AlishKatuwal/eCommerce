import React from "react";
import nike from "./assets/Nike Logo.png";

function Nav() {
  return (
    
   <div className="relative overflow-hidden h-[800px]">
    <div class="w-custom-1 h-custom-1 top-2 right-28 rounded-full bg-orange-600 absolute"></div>
    <div className="rounded-full bg-custom-orange h-custom-2 z w-custom-2 absolute -top-12 -right-96"></div>
     <div className="flex justify-between items-center p-4">
      <img src={nike} alt="Nike" className="h-20" />
      <div className="flex font-bold text-sm">
        <div className="m-3">HOME</div>
        <div className="m-3">CATEGORIES</div>
        <div className="m-3">ABOUT</div>
        <div className="m-3">CONTACT</div>
      </div>
      <div></div>
      <div></div>
    </div>
   </div>
  );
}

export default Nav;
