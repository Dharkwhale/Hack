import React from 'react'

const About = () => {
  return (
    <div class='bg-[#1A1919] px-4'>
        <h1 class="text-2xl text-center text-[#ffffff] mt-20 w-933px leading-tight">
          <span>Why Choose Us for Your Blockchain </span> <br />
          <span>Experience?</span>
        </h1>
        <div class="flex flex-col mt-10 md:flex-row justify-center items-stretch md:space-x-4 space-y-4 md:space-y-0">
    <div class="bg-gradient-to-r from-[#030303] to-[#1a1a1a] bg-opacity-30 backdrop-blur-md shadow-lg flex-1 h-full flex flex-col text-white p-6 text-center border border-[#2a2a2a] rounded-lg">
        <h3 class="text-[#95FF80] text-left">Secure Transactions</h3>
        <p class="text-sm text-left flex-grow">
            Every transaction is safeguarded with industry-leading encryption and multi-layered security, ensuring your digital assets remain fully protected. Trust that your funds are in safe hands with wallet support built on robust blockchain infrastructure.
        </p>
    </div>
    <div class="bg-gradient-to-r from-[#1a1a1a] to-[#030303] bg-opacity-30 backdrop-blur-md shadow-lg flex-1 h-full flex flex-col text-white p-6 text-center border border-[#2a2a2a] rounded-lg">
        <h3 class="text-[#95FF80] text-left">Real-time Updates</h3>
        <p class="text-sm text-left flex-grow">
            Stay in control with instant notifications and real-time tracking. Whether it’s asset transfers or staking rewards, you’ll never miss a beat with live updates straight to your dashboard.
        </p>
    </div>
    <div class="bg-gradient-to-r from-[#1a1a1a] to-[#030303] bg-opacity-30 backdrop-blur-md shadow-lg flex-1 h-full flex flex-col text-white p-6 text-center border border-[#2a2a2a] rounded-lg">
        <h3 class="text-[#95FF80] text-left">Multi-Wallet Integration</h3>
        <p class="text-sm text-left flex-grow">
            Connect seamlessly with wallets like Para, Exodus, and Lute. Our platform is designed to support multiple wallet types, giving you the flexibility to switch or use multiple accounts effortlessly.
        </p>
    </div>
    <div class="bg-gradient-to-r from-[#1a1a1a] to-[#030303] bg-opacity-30 backdrop-blur-md shadow-lg flex-1 h-full flex flex-col text-white p-6 text-center border border-[#2a2a2a] rounded-lg">
        <h3 class="text-[#95FF80] text-left">Low Fees for Maximum Value</h3>
        <p class="text-sm text-left flex-grow">
            Keep more of your assets with our low-fee structure. Whether you’re sending funds or staking, our platform minimizes transaction costs, maximizing your returns.
        </p>
    </div>
</div>

    </div>
  )
}

export default About