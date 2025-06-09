import React from "react";

const Hero = () => {
  return (
    <div className="flex items-center justify-center py-40 bg-gray-900">
      <div className="text-white flex flex-col items-center text-center w-11/12 md:w-[1024px] lg:w-[933px">
    
        <h1 className="text-3xl font-bold text-center text-[#ffffff] mt-20 w-933px h-150px leading-tight">
          <span>The Future of Secure Blockchain </span> <br />
          <span>Transactions Starts Here</span>
        </h1>
        <p className=" text-center text-[#ffffff] mt-4 w-933px h-150px leading-tight">
          <span>
            Manage and secure your assets seamlessly. Connect with trusted
            wallets like Para,{" "}
          </span>{" "}
          <br />
          <span>Exodus, and Lute for a smooth blockchain experience.</span>
        </p>
        <button className='bg-[#95FF80] W-[250px] mt-8 rounded-md font-small py-2 px-4 text-[#000000]'>Get Started</button>
      </div>
      
    </div>
  );
};

export default Hero;
