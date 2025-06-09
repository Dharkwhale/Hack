import React, { useState } from "react";
import Testimage from "../Images/Testimage.png";
import { FaStar } from "react-icons/fa";

const Newsletter = () => {
  const [rating, setRating] = useState(5);

  const handleClick = (value) => {
    setRating(value);
  };

  return (
    <div className="flex flex-col mt-8 md:flex-row justify-center items-stretch md:space-x-4 px-4 space-y-4 md:space-y-0">
      <img src={Testimage} alt="Testimonial" className="w-full md:w-auto max-w-sm rounded-lg" />

      <div className="flex flex-col space-y-6">
        {/* Testimonial Card */}
        <div className="bg-gradient-to-r from-[#030303] to-[#1a1a1a] bg-opacity-30 backdrop-blur-md shadow-lg text-white p-6 text-center border border-[#2a2a2a] rounded-lg">
          <h2 className="text-sm md:text-left">
            This platform made transferring assets between wallets incredibly
            easy and cost-effective. I love how transparent the fees are, and
            the transactions are super fast.
          </h2>
          <p className="text-sm md:text-left mt-2">David Oloyede</p>
          <p className="text-sm md:text-left">Freelance digital entrepreneur</p>

          <div className="flex gap-2 justify-center md:justify-start mt-4">
            {[1, 2, 3, 4, 5].map((index) => (
              <FaStar
                key={index}
                size={24}
                onClick={() => handleClick(index)}
                style={{
                  cursor: "pointer",
                  color: rating >= index ? "#ffc107" : "#555",
                }}
              />
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="text-center">
          <h1 className="py-4 text-2xl text-white">Stay Ahead with Exclusive Updates</h1>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              className="p-3 rounded-md px-4 text-black w-full sm:w-auto"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#1e9400] rounded-md font-medium py-2 px-6 text-black">
              Notify Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
