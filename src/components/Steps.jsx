import React from 'react'

const Steps = () => {
  return (
    <div class='bg-[#1A1919]'>
        <h1 class="text-2xl text-center text-[#ffffff] mt-20 w-933px leading-tight">
          <span>How It Works </span>
        </h1>
        <h2 class='text-xl text-center text-[#95FF80] mt-8 w-933px leading-tight'>
            <span>Follow these easy steps to connect your wallet and start managing your assets securely in no time</span>
        </h2>
    <div >
        <div class='flex p-4'>
            <div class='flex flex-col text-white p-6 text-center border border-[#2a2a2a] rounded-lg'>
                <div class='text-left header flex p-4'>
                    <h1 className='text-[#95FF80] pr-8 font-bold text-2xl'>1</h1>
                    <p>Choose Your Wallet</p>
                    
                </div>
                <p class="text-sm text-left flex-grow">
                    Users can select their preferred wallet, such as Para, Exodus, or Lute, right from the sign-in modal. Each wallet is compatible with our platform and connects seamlessly with just a few clicks.
                    </p>
            </div>
            <div class='flex flex-col text-white p-6 text-center border border-[#2a2a2a] rounded-lg'>
                <div class='header flex p-4'>
                    <h1 className='text-[#95FF80] pr-8 font-bold text-2xl'>2</h1>
                    <p>Sign In and Manage Your Asset</p>
                    
                </div>
                <p class="text-sm text-left flex-grow">
                After selecting a wallet, users can securely link it to their account. Once connected, they can view their assets, monitor transactions, and manage their holdings all in one place.
                    </p>
            </div>
            <div class='flex flex-col text-white p-6 text-center border border-[#2a2a2a] rounded-lg'>
                <div class='header flex p-4 text-left'>
                    <h1 className='text-[#95FF80] pr-8 font-bold text-left text-2xl'>3</h1>
                    <p>Start Transacting Securely</p>
                    
                </div>
                <p class="text-sm text-left flex-grow">
                Users can now send, receive, or stake their digital assets with full confidence. All transactions are processed through encrypted blockchain technology, ensuring that everything is secure and fast.
                    </p>
            </div>
        </div>


    </div>
    </div>
  )
}

export default Steps