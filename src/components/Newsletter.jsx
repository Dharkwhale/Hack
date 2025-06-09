import React, { useState } from "react";
import Testimage from "../Images/Testimage.png";
import { FaStar } from "react-icons/fa";

const Newsletter = () => {
  // State to keep track of the current rating
  const [rating, setRating] = useState(0);

  // Function to handle click on stars
  const handleClick = (value) => {
    setRating(value);
  };

  return (
    <div class="flex flex-col mt-8 md:flex-row justify-center items-stretch md:space-x-4  px-4 space-y-4 md:space-y-0">
      <img src={Testimage} alt="Testimonial image" />

      <div class="">
        <div className="bg-gradient-to-r from-[#030303] to-[#1a1a1a] bg-opacity-30 backdrop-blur-md shadow-lg h-full grid text-white p-6 text-center border border-[#2a2a2a] rounded-lg">
          <h2 className="text-sm md:text-left text-center">
            This platform made transferring assets between wallets incredibly
            easy and cost-effective. I love how transparent the fees are, and
            the transactions are super fast.
          </h2>
          <p className="text-sm md:text-left text-center">David Oloyede</p>
          <p className="text-sm md:text-left text-center">Freelance digital entrepreneur</p>
          <div
            class="flex gap-5 md:items-start justify-center items-center md:justify-start"
          >
            {[1, 2, 3, 4, 5].map((index) => (
              <FaStar
                key={index}
                size={24}
                onClick={() => handleClick(index)}
                style={{
                  cursor: "pointer",
                  color: "#ffc107", // gold if selected, gray if not
                }}
              />
            ))}
          </div>
        </div>
        <div class="flex justify-center items-center text-center">
          <h1 className="py-4 text-2xl"> Stay Ahead with Exclusive Updates </h1>
        </div>
        <div className="flex justify-center items-center space-y-4">
          <div className="flex items-center max-w-md space-x-4">
            <input
              className="p-3 rounded-md px-4 text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#1e9400]  rounded-md font-medium py-2 px-2 text-black md:block">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
