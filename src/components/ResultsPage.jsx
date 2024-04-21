import React, { useState } from 'react';

function ResultsPage() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    console.log("Selected option:", option);
    // You can perform any action here based on the selected option
  };

  return (
    <div className="Results flex flex-col items-center justify-center h-screen w-screen bg-white text-black">
      <div className="selections align-left">
        <div className="heading text-4xl font-bold text-center">Learning paths based on your answers</div>
        <div className="subheading mt-5 text-center text-slate-600">Choose one to get started. You can switch anytime.</div>
        
          <div className="popular"><button className="mt-10 ml-[25%] bg-yellow-500 text-black  font-semibold flex justify-center items-center rounded-2xl h-8 w-32">Most Popular</button></div>
        <div className="selectOne flex gap-8 justify-center items-center">

          <div className={`opt1 mt-2 bg-gray-200 flex border-2 border-grey-700 h-56 w-[30%] justify-center items-center text-center rounded ${selectedOption === 'Option1' ? 'selected border-yellow-300' : ''}`} onClick={() => handleOptionSelect('Option1')}>
            <div className='text-center w-[35%]'> <span className='font-semibold'>Foundational Math </span> Build your foundational skills in algebra, geometry, and probability.</div> 
            <img className="w-[40%] h-[85%] w-100 border-2 border-black ml-10" src="https://images.unsplash.com/photo-1635070041409-e63e783ce3c1?q=80&w=1979&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
            </div>

            <div className={`opt1 mt-2 bg-gray-200 flex border-2 border-grey-700 h-56 w-[30%] justify-center items-center text-center rounded ${selectedOption === 'Option2' ? 'selected border-yellow-300' : ''}`} onClick={() => handleOptionSelect('Option2')}>
            <div className='text-center w-[35%]'> <span className="font-semibold">Mathematical Thinking </span>Build your foundation skills in algebra, geometry and probability. </div> 
            <img className="w-[40%] h-[85%] border-2 border-black" src="https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"></img>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ResultsPage;
