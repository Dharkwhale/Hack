import React from 'react'

const Service = () => {
  return (
    <div class='bg-[#1A1919] px-4'>
        <h1 class="text-2xl text-center text-[#ffffff] mt-20 w-933px">
          <span>Hackathon’s Services </span>
        </h1>
        <div class='flex flex-col mt-8 md:flex-row justify-center items-stretch md:space-x-4 space-y-4 md:space-y-0'>
        <div class="bg-gradient-to-r from-[#030303] to-[#1a1a1a] bg-opacity-30 backdrop-blur-md shadow-lg flex-1 h-full flex flex-col text-white p-6 text-center border border-[#2a2a2a] rounded-lg">
        <h2 class='text-sm text-left'>Service 1</h2>
        <p class='text-xl text-[#95FF80] text-left'>Asset Management</p>
        <p class='text-sm text-left'>
            Manage your blockchain portfolio effortlessly. With our platform, you can monitor your assets across multiple wallets like Para, Exodus, and Lute, all in real-time. Our intuitive dashboard offers comprehensive insights, including detailed transaction history and asset performance analytics, empowering you to make informed decisions at every step.

        </p>
        </div>
        <div class="bg-gradient-to-r from-[#030303] to-[#1a1a1a] bg-opacity-30 backdrop-blur-md shadow-lg flex-1 h-full flex flex-col text-white p-6 text-center border border-[#2a2a2a] rounded-lg">
        <h2 class='text-sm text-left'>Service 2</h2>
        <p class='text-xl text-[#95FF80] text-left'>Asset Management</p>
        <p class='text-sm text-left'>
        Grow your assets by participating in staking opportunities. Our streamlined staking process allows you to easily stake token(s) and earn rewards without complicated setups. Simply connect your wallet, choose from a variety of staking options, and start earning passive income. Plus, real-time tracking helps you monitor your rewards.

        </p>
        </div>
        </div>
        <div class="bg-gradient-to-r from-[#030303] to-[#1a1a1a] bg-opacity-30 backdrop-blur-md shadow-lg flex-1 h-full flex flex-col text-white p-6 text-center border border-[#2a2a2a] rounded-lg">
        <h2 class='text-sm text-left'>Service 3</h2>
        <p class='text-xl text-[#95FF80] text-left'>Low-Fee Transfers</p>
        <p class='text-sm text-left'>
        Our Low-Fee Transfers service is designed to help you retain more value from every transaction. Whether you’re sending digital assets between wallets or transferring funds to other users, we focus on minimizing transaction fees to ensure that your wealth stays intact. By utilizing optimized blockchain pathways, we reduce the cost of transfers while maintaining rapid transaction speeds and high security.<br/>


        You’ll experience swift processing without the burden of high fees or delays. No hidden charges, just transparent pricing and efficient movement of your digital assets across multiple wallets.

        </p>
        </div>
    </div>
  )
}

export default Service