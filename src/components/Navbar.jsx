import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import {Link} from 'react-router-dom';
import Logo from '../Images/Logo.png';

const Navbar = () => {
   const [nav, setNav] = useState(false)
   const navigate = useNavigate();
   const handleNav = () => {
      setNav(!nav)
   }

   const handleSignInClick = () => {
    navigate("/Sign In");
  };
 
  return (
    <div class='flex justify-between items-center h-12 max-w-[1240px] mx-auto px-6 text-white'> 
    <div>
      <img src={Logo} alt='Testimonial image' />
    </div>
    <ul class = 'hidden md:flex'>
          <li class = 'p-4 text-[#1e9400]'>Home</li>
          <li class = 'p-4'>Blog</li>
          <li class = 'p-4'>Pricing</li>
          <li class = 'p-4'>Features</li>
        </ul>
        <div>
      <button  onClick={handleSignInClick} class='bg-[#1e9400] W-[250px] rounded-md font-small py-2 px-4 text-[#000000] hidden md:block'><Link to='/Sign in'></Link>Sign In</button>
    </div>  
    <div onClick= {handleNav} class= 'block md:hidden'>
      {!nav ? 
       (<AiOutlineMenu size= {20}/>)
       : 
       (<AiOutlineClose size= {20}/>)
      
       }
      
    </div>
    <div class={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000000] easy-in-out duration-500 md:hidden' : 'fixed left-[-100%]'}>
    <div>
      <span class='text-[#1e9400] text-2xl font-bold m-4'>H</span>ackathon
    </div>
      <ul class='pt-12 p-4 md:hidden'>
          <li class = 'p-4 border-b border-gray-600 text-[#1e9400]'>Home</li>
          <li class = 'p-4 border-b border-gray-600'>Blog</li>
          <li class = 'p-4 border-b border-gray-600'>Pricing</li>
          <li class = 'p-4'>Features</li>
      </ul>
      <button  onClick={handleSignInClick} class='bg-[#1e9400] W-[250px] rounded-md font-small py-2 px-4 text-[#000000] block md:hidden'><Link to='/Sign in'></Link>Sign In</button>
    </div>
    </div>
  )
}

export default Navbar