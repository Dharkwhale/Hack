import React from 'react'
import {

} from 'react-icons'
import Logo from '../Images/Logo.png';

const Footer = () => {
  return (
    <div class='mt-32 md:flex items-center max-w-[1240px] mx-auto pt-16 px-4 lg:grid-cols-3 gap-8 justify-between'>
      <div>
      <img src={Logo} alt='Testimonial image' />
      <p class='py-4'>Hack, Build, Compete, Innovate, Win</p>
    </div>
      <div class='text-center'>
        <h5 font-medium text-2xl>Products</h5>
        <ul>
          <li class='py-2 text-sm'>Staking</li>
          <li class='py-2 text-sm'>Transfer Services</li>
          <li class='py-2 text-sm'>Asset Management </li>
        </ul>
      </div>
      
      <div class='text-center'>
        <h5 font-medium text-2xl>Privacy policy</h5>
        <ul>
          <li class='py-2 text-sm'>Terms of Services</li>
          <li class='py-2 text-sm'>Legal</li>
          <li class='py-2 text-sm'>User Policies </li>
        </ul>
      </div>
      <div class='text-center'>
        <h5 font-medium text-2xl>Developers</h5>
        <ul>
          <li class='py-2 text-sm'>Documentation</li>
          <li class='py-2 text-sm'>Wallet Support</li>
          <li class='py-2 text-sm'>Community Links </li>
        </ul>
      </div>

    </div>
  )
}

export default Footer