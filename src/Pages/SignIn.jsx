import React from 'react'
import Navbar from '../components/Navbar'

const SignIn = () => {
  return (
    <div>
        <Navbar></Navbar>
        
        <div className="bg-white p-8 mx-auto mt-10 rounded-lg items-center shadow-lg max-w-sm w-full">
        
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-4">Sign In</h2>
        <div class='flex flex-col space-y-4'>
          
          <button
            type="submit"
            className="w-full bg-[#1e9400] hover:bg-green-600 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline"
          >
        
            With Para
          </button>
        
          <button
            type="submit"
            className="w-full bg-[#722F37] hover:bg-green-600 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline"
          >
            With Lute
          </button>
    
          <button
            type="submit"
            className="w-full bg-[#FFD700] hover:bg-green-600 text-white font-bold py-2 rounded focus:outline-none focus:shadow-outline"
          >
            With Exodus
          </button>
          </div>
        
      </div>
        
    </div>
  )
}

export default SignIn