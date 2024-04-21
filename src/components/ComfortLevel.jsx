// import React, { useState } from 'react';

// function ComfortLevel() {
//   const [selectedOption, setSelectedOption] = useState(null);

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//     console.log("Selected option:", option);
//     // You can perform any action here based on the selected option
//   };

//   return (
//     <div className="ComfortLevel flex flex-col items-center justify-center h-screen w-screen bg-white text-black">
//       <div className="selections align-left">
//         <div className="heading text-3xl font-bold text-center">What is your math comfort level?</div>
//         <div className="subheading mt-5 text-center text-slate-600">Choose the highest level you feel confident in- you can always adjust later.</div>

//         <div className="selectOne flex gap-5">

//         <div className={`opt1 mt-5 flex font-medium border-2 border-grey-700 h-56 w-52 justify-center items-center rounded ${selectedOption === 'Option1' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Option1')}>5*1/2 =? </div>

//         <div className={`opt2 mt-5 flex font-medium border-2 border-grey-700 h-56 w-52 justify-center items-center rounded ${selectedOption === 'Option2' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Option2')}>Exploring new topics </div>

//         <div className={`opt3 mt-5 flex font-medium border-2 border-grey-700 h-56 w-52 justify-center items-center rounded ${selectedOption === 'Option3' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Option3')}>Refreshing my </div>

//         <div className={`opt4 mt-5 flex font-medium border-2 border-grey-700 h-56 w-52 justify-center items-center rounded ${selectedOption === 'Option4' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Option4')}>Exercising my </div>

//         </div>
        
//         <div className="continuue mt-5 flex justify-center">
//           <button className="button bg-black h-12 w-60 mt-8 items-center rounded text-2xl text-white font-semibold ">Continue</button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ComfortLevel;
// import React, { useState } from 'react';

// function ComfortLevel() {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isContinueClicked, setIsContinueClicked] = useState(false);

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//     setIsContinueClicked(true);
//     console.log("Selected option:", option);
//     // You can perform any action here based on the selected option
//   };

//   return (
//     <div className="ComfortLevel flex flex-col items-center justify-center h-screen w-screen bg-white text-black">
//       <div className="selections align-left">
//         {/* Options */}
//       </div>

//       <div className="continuue mt-5 flex justify-center">
//         <button 
//           className={`button ${isContinueClicked ? 'bg-black' : 'bg-slate-300'} h-12 w-60 mt-8 items-center rounded text-2xl text-white font-semibold `}
//           onClick={() => setIsContinueClicked(true)}
//         >
//           Continue
//         </button>
//       </div>

//       {/* Scroll line */}
//       <ScrollLine isContinueClicked={isContinueClicked} />
//     </div>
//   );
// }

// export default ComfortLevel;

// import React, { useState } from 'react';
// import ScrollLine from './ScrollLine';
// import Ratings from './Ratings'

// const ComfortLevel = ({ onContinueClick }) => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isContinueBlack, setIsContinueBlack] = useState(false);

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//     setIsContinueBlack(true);
//     console.log("Selected option:", option);
//     // You can perform any action here based on the selected option
//   };

//   return (
//     <div className="ComfortLevel flex flex-col items-center justify-center h-screen w-screen bg-white text-black">
//       <div className="selections align-left">
//         <div className="heading text-3xl font-bold text-center">What is your math comfort level?</div>
//         <div className="subheading mt-5 text-center text-slate-600">Choose the highest level you feel confident in - you can always adjust later.</div>

        // <div className="selectOne flex justify-center items-center gap-5">
          // <div className={`opt1 mt-5 flex-col justify-center items-center font-medium border-2 border-grey-700 h-56 w-52 justify-center items-center rounded ${selectedOption === 'Option1' ? 'selected border-y+ellow-300' : ''}`} onClick={() => handleOptionSelect('Option1')}><img className="h-[30%] ml-12 mt-10" src="./fraction.png"></img>
          // <div className="arithmetic text-center mt-3">Arithmetic</div>
          // <div className="introductory text-slate-400 text-center mt-1">Introductory</div></div>

          // <div className={`opt2 mt-5 flex-row justify-center items-center font-medium border-2 border-grey-700 h-56 w-52 justify-center items-center rounded ${selectedOption === 'Option2' ? 'selected border-yellow-300' : ''}`} onClick={() => handleOptionSelect('Option2')}><img className="h-[30%] ml-10 mt-10" src="./algebra.png"></img><div className="Basic Algebra text-center mt-3">Basic Algebra</div>
          // <div className="foundational text-slate-400 text-center mt-1">Foundational</div></div>

          // <div className={`opt3 mt-5 flex-row justify-center items-center font-medium border-2 border-grey-700 h-56 w-52 justify-center items-center rounded ${selectedOption === 'Option3' ? 'selected border-yellow-300' : ''}`} onClick={() => handleOptionSelect('Option3')}><img className="h-[25%] ml-0 mt-10" src="./quad.png"></img><div className="Intermediate Algebra text-center mt-3">Intermediate Algebra</div>
          // <div className="Intermediate text-slate-400 text-center mt-1">Intermediate</div>
          // </div>

          // <div className={`opt4 mt-5 flex-row font-medium border-2 border-grey-700 h-56 w-52 justify-center items-center rounded ${selectedOption === 'Option4' ? 'selected border-yellow-300' : ''}`} onClick={() => handleOptionSelect('Option4')}><img className="h-[25%] ml-14 mt-10" src="./integration.png"></img><div className="Calculus text-center mt-3">Calculus</div>
          // <div className="Advanced text-slate-400 text-center mt-1">Advanced</div>
            
          // </div>
//        </div>
        
//         <div className="continuue mt-5 flex justify-center">
//           <button className={`button ${isContinueBlack ? 'bg-black' : 'bg-slate-300'} h-12 w-60 mt-8 items-center rounded text-2xl text-white font-semibold `}>Continue</button>
//         </div>
//       </div>

//       <ScrollLine progress={4} onContinueClick={onContinueClick} />
//     </div>
//   )
// }

// export default ComfortLevel;


import React, { useState, useEffect, useRef } from 'react';
import ScrollLine from './ScrollLine';
import Description from './Description';

const ComfortLevel = ({ onContinueClick }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isContinueBlack, setIsContinueBlack] = useState(false);
  const containerRef = useRef(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsContinueBlack(true);
    console.log("Selected option:", option);
  };

  const handleContinueClick = () => {
    const nextComponent = containerRef.current.nextElementSibling;
    if (nextComponent) {
      nextComponent.scrollIntoView({ behavior: 'smooth' });
    }
    onContinueClick();
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset === 0) {
        setIsContinueBlack(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef}>
      <div className="flex flex-col mt-10 items-center justify-center h-screen w-full bg-white text-black">
        <div className="options align-left">
        <div className="heading text-3xl font-bold text-center">What is your math comfort level?</div>
        <div className="subheading mt-5 text-center text-slate-600">Choose the highest level you feel confident in - you can always adjust later.</div>
        <div className="selectOne flex justify-center items-center gap-5">
            
        <div className={`opt1 mt-5 flex-col justify-center items-center font-medium border-2 border-grey-700 h-56 w-52 justify-center items-center rounded ${selectedOption === 'Option1' ? 'selected border-yellow-300' : ''}`} onClick={() => handleOptionSelect('Option1')}><img className="h-[30%] ml-12 mt-10" src="./fraction.png"></img>
          <div className="arithmetic text-center mt-3">Arithmetic</div>
          <div className="introductory text-slate-400 text-center mt-1">Introductory</div></div>


          <div className={`opt2 mt-5 flex-row justify-center items-center font-medium border-2 border-grey-700 h-56 w-52 justify-center items-center rounded ${selectedOption === 'Option2' ? 'selected border-yellow-300' : ''}`} onClick={() => handleOptionSelect('Option2')}><img className="h-[30%] ml-10 mt-10" src="./algebra.png"></img><div className="Basic Algebra text-center mt-3">Basic Algebra</div>
          <div className="foundational text-slate-400 text-center mt-1">Foundational</div></div>



          <div className={`opt3 mt-5 flex-row justify-center items-center font-medium border-2 border-grey-700 h-56 w-52 justify-center items-center rounded ${selectedOption === 'Option3' ? 'selected border-yellow-300' : ''}`} onClick={() => handleOptionSelect('Option3')}><img className="h-[25%] ml-0 mt-10" src="./quad.png"></img><div className="Intermediate Algebra text-center mt-3">Intermediate Algebra</div>
          <div className="Intermediate text-slate-400 text-center mt-1">Intermediate</div>
          </div>


          <div className={`opt4 mt-5 flex-row font-medium border-2 border-grey-700 h-56 w-52 justify-center items-center rounded ${selectedOption === 'Option4' ? 'selected border-yellow-300' : ''}`} onClick={() => handleOptionSelect('Option4')}><img className="h-[25%] ml-14 mt-10" src="./integration.png"></img><div className="Calculus text-center mt-3">Calculus</div>
          <div className="Advanced text-slate-400 text-center mt-1">Advanced</div>
          </div>

          </div>
          <div className="continue mt-4 flex justify-center">
            <button
              className={`button h-12 w-60 mt-8 items-center rounded text-2xl text-white font-semibold ${isContinueBlack ? 'bg-black' : 'bg-slate-300'}`}
              onClick={handleContinueClick}
            >
              Continue
            </button>
          </div>
        </div>
        <ScrollLine progress={0} onContinueClick={onContinueClick} />
      </div>
      
    </div>
  );
};

export default ComfortLevel;