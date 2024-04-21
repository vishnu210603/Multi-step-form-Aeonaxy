// import React from 'react'

// function UserTypeSelection() {
//   return (
//     <div className='InterestSelection'>
//       <div className="heading text-3xl font-bold text-center">Which are you most interested in? </div>
//       <div className="subheading mt-5 text-center text-slate-600">Choose just one. This will help us get you started (but won't limit your experience).</div>

//       <div className="selections">
//         <div className="opt1 flex border-2 h-14 justify-center align-center">Leaning specific skills to advance my career</div>
//         <div className="opt2 flex border-2 h-14 justify-center align-center">Exploring new topics I'm interested in</div>
//         <div className="opt3 flex border-2 h-14 justify-center align-center">Refreshing my maths foundations</div>
//         <div className="opt4 flex border-2 h-14 justify-center align-center">Exercising my brain to stay sharp</div>
//         <div className="opt5 flex border-2 h-14 justify-center align-center">Something else</div>

//         <div className="continuue mt-5 flex  justify-center"><button className="button bg-slate-300 h-12 w-60 mt-8 items-center rounded text-2xl text-white font-semibold ">Continue</button></div>
        
//       </div>
//     </div>
//   )
// }

// export default UserTypeSelection;




// import React, { useState } from 'react';

// function UserTypeSelection() {
//   const [selectedOption, setSelectedOption] = useState(null);

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//     console.log("Selected option:", option);
//     // You can perform any action here based on the selected option
//   };

//   return (
//     <div className="InterestSelection flex flex-col items-center h-screen w-screen bg-white text-black">
//       <div className="selections align-left">
//       <div className="heading text-3xl font-bold text-center">Which are you most interested in? </div>
//       <div className="subheading mt-5 text-center text-slate-600">Choose just one. This will help us get you started (but won't limit your experience).</div>

      
//         <div className={`opt1 mt-7 flex font-medium border-2 border-white h-16 justify-center items-center ${selectedOption === 'Option1' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Option1')}> <div className=""></div> Learning specific skills to advance my career</div>

//         <div className={`opt2 mt-5 flex font-medium border-2 border-white h-16 justify-center items-center ${selectedOption === 'Option2' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Option2')}>Exploring new topics I'm interested in</div>

//         <div className={`opt3 mt-5 flex font-medium border-2 border-white h-16 justify-center items-center ${selectedOption === 'Option3' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Option3')}>Refreshing my maths foundations</div>

//         <div className={`opt4 mt-5 flex font-medium border-2 border-white h-16 justify-center items-center ${selectedOption === 'Option4' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Option4')}>Exercising my brain to stay sharp</div>

//         <div className={`opt5 mt-5 flex font-medium border-2 border-white h-16 justify-center items-center ${selectedOption === 'Option5' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Option5')}>Something else</div>

//         <div className="continuue mt-5 flex  justify-center"><button className="button bg-slate-300 h-12 w-60 mt-8 items-center rounded text-2xl text-white font-semibold ">Continue</button></div>
        
//       </div>
//     </div>
//   )
// }

// export default UserTypeSelection;

// import React, { useState } from 'react';

// function UserTypeSelection() {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isContinueBlack, setIsContinueBlack] = useState(false);

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//     setIsContinueBlack(true);
//     console.log("Selected option:", option);
//     // You can perform any action here based on the selected option
//   };

//   return (
//     <div className="InterestSelection flex flex-col items-center h-screen w-screen bg-white text-black">
//       <div className="selections align-left">
//         <div className="heading text-3xl font-bold text-center">Which are you most interested in? </div>
//         <div className="subheading mt-5 text-center text-slate-600">Choose just one. This will help us get you started (but won't limit your experience).</div>

//         <div className="opt1 mt-7 flex font-medium border-2 border-white h-16 justify-center items-center">
//           <button className={`${selectedOption === 'Option1' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Option1')}>Learning specific skills to advance my career</button>
//         </div>

//         <div className="opt2 mt-5 flex font-medium border-2 border-white h-16 justify-center items-center">
//           <button className={`${selectedOption === 'Option2' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Option2')}>Exploring new topics I'm interested in</button>
//         </div>

//         <div className="opt3 mt-5 flex font-medium border-2 border-white h-16 justify-center items-center">
//           <button className={`${selectedOption === 'Option3' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Option3')}>Refreshing my maths foundations</button>
//         </div>

//         <div className="opt4 mt-5 flex font-medium border-2 border-white h-16 justify-center items-center">
//           <button className={`${selectedOption === 'Option4' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Option4')}>Exercising my brain to stay sharp</button>
//         </div>

//         <div className="opt5 mt-5 flex font-medium border-2 border-white h-16 justify-center items-center">
//           <button className={`${selectedOption === 'Option5' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Option5')}>Something else</button>
//         </div>

//         <div className="continuue mt-5 flex  justify-center">
//           <button className={`button bg-slate-300 h-12 w-60 mt-8 items-center rounded text-2xl text-white font-semibold ${isContinueBlack ? 'bg-black' : ''}`}>
//             Continue
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default UserTypeSelection;

// import React, { useState } from 'react';

// function UserTypeSelection() {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isContinueClicked, setIsContinueClicked] = useState(false);

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//     setIsContinueClicked(true);
//     console.log("Selected option:", option);
//     // You can perform any action here based on the selected option
//   };

//   return (
//     <div className="InterestSelection flex flex-col items-center h-screen w-screen bg-white text-black">
//       <div className="selections align-left">
//         {/* Options */}
//       </div>

//       <div className="continuue mt-5 flex justify-center">
//         <button 
//           className={`button bg-slate-300 h-12 w-60 mt-8 items-center rounded text-2xl text-white font-semibold ${isContinueClicked ? 'bg-black' : ''}`}
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

// export default UserTypeSelection;


// import React, { useState, useEffect } from 'react';

// function UserTypeSelection() {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isContinueBlack, setIsContinueBlack] = useState(false);

//   // Function to handle option selection
//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//     setIsContinueBlack(true);
//     console.log("Selected option:", option);
//     // You can perform any action here based on the selected option
//   };

//   useEffect(() => {
//     // Scroll to the next component and change the scroll line color
//     if (isContinueBlack) {
//       // Scroll to the next component
//       window.scrollTo({
//         top: window.innerHeight,
//         behavior: 'smooth'
//       });
//     }
//   }, [isContinueBlack]);

//   return (
//     <div className="flex flex-col items-center justify-center h-screen w-full bg-white text-black">
//       <div className="options align-left">
//         <div className="heading text-4xl font-bold mt-4 text-center">Which are you most interested in?</div>
//         <div className="subheading mt-4 text-center text-slate-600">Choose just one. This will help us get you started (but won't limit your experience).</div>

//         <div className="selectOne">
//         <div className="opt1 mt-7 flex font-medium border-2 border-white h-16 justify-center items-center">
//           <button className={`focus:outline-none ${selectedOption === 'Option1' ? 'selected border-yellow-200' : ''}`} onClick={() => handleOptionSelect('Option1')}>Learning specific skills to advance my career</button>
//         </div>

        // <div className="opt2 mt-5 flex font-medium border-2 border-white h-16 justify-center items-center">
        //   <button className={`focus:outline-none ${selectedOption === 'Option2' ? 'selected border-yellow-200' : ''}`} onClick={() => handleOptionSelect('Option2')}>Exploring new topics I'm interested in</button>
        // </div>

        // <div className="opt3 mt-5 flex font-medium border-2 border-white h-16 justify-center items-center">
        //   <button className={`focus:outline-none ${selectedOption === 'Option3' ? 'selected border-yellow-200' : ''}`} onClick={() => handleOptionSelect('Option3')}>Refreshing my maths foundations</button>
        // </div>

        // <div className="opt4 mt-5 flex font-medium border-2 border-white h-16 justify-center items-center">
        //   <button className={`focus:outline-none ${selectedOption === 'Option4' ? 'selected border-yellow-200' : ''}`} onClick={() => handleOptionSelect('Option4')}>Exercising my brain to stay sharp</button>
        // </div>
//         </div>

//         <div className="continue mt-5 flex justify-center">
//           <button 
//             className={`button bg-slate-300 h-12 w-60 mt-8 items-center rounded text-2xl text-white font-semibold ${isContinueBlack ? 'bg-black' : ''}`}
//             onClick={() => setIsContinueBlack(true)} // Update isContinueBlack state on click
//           >
//             Continue
//           </button>
//         </div>
//       </div>

//       {/* Scroll line */}
//       <div className={`w-[20%] h-1 mt-10 rounded-full bg-green-700`}></div>
//     </div>
//   );
// }

// export default UserTypeSelection;

// import React, { useState } from 'react';
// import ScrollLine from './ScrollLine';

// const UserTypeSelection = ({ onContinueClick }) => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isContinueBlack, setIsContinueBlack] = useState(false);

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//     setIsContinueBlack(true);
//     console.log("Selected option:", option);
//     // You can perform any action here based on the selected option
//   };

//   return (
//     <div className="flex flex-col mt-10 items-center h-screen w-full bg-white text-black">
//       <div className="options align-left">
//         <div className="heading text-4xl font-bold mt-4 text-center">Which are you most interested in?</div>
//         <div className="subheading mt-4 text-center text-slate-600">Choose just one. This will help us get you started (but won't limit your experience).</div>

//         <div className="selectOne">
//           <div className={`option flex mt-5 flex border-2 rounded-md  border-white h-20  ${selectedOption === 'Student' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Student' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Student')}>
//             <i class="ri-line-chart-line"></i><span className='font-semibold ml-10'> Learning specific skills to advance my career</span>
//             </button>
//           </div>

//           <div className={`option mt-5 flex border-2 rounded-md border-white h-20 ${selectedOption === 'Professional' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Professional' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Professional')}>
//             <i class="ri-stack-fill"></i> <span className='font-semibold ml-10'>Exploring new topics I'm interested in</span>
//             </button>
//           </div>

//           <div className={`option mt-5 flex border-2 rounded-md border-white h-20 ${selectedOption === 'Parent' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Parent' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Parent')}>
//             <i class="ri-refresh-fill"></i><span className='font-semibold ml-10 '>Refreshing my maths foundations</span>
//             </button>
//           </div>

//           <div className={`option mt-5 flex border-2 rounded-md border-white h-20 ${selectedOption === 'Learner' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Learner' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Learner')}>
//             <i class="ri-brain-line"></i> <span className='font-semibold ml-10'>Exercising my brain to stay sharp</span>
//             </button>
//           </div>
//         </div>

//         <div className="continue mt-4 flex justify-center">
//           <button 
//           //   className={`button bg-slate-300 h-12 w-60 mt-8 items-center rounded text-2xl text-white font-semibold ${isContinueBlack ? 'bg-black' : ''}`}
//           //   onClick={() => setIsContinueBlack(true)} // Update isContinueBlack state on click
//           // >
//           //   Continue
//           // </button>
//           className={`button bg-slate-300 h-12 w-60 mt-8 items-center rounded text-2xl text-white font-semibold ${isContinueBlack ? 'bg-black' : ''}`}
//           onClick={() => setIsContinueBlack(true)} // Update isContinueBlack state on click
//         >
//           Continue
//         </button>
//         </div>
//       </div>

//       <ScrollLine progress={0} onContinueClick={onContinueClick} />
//     </div>
//   );
// };

// export default UserTypeSelection;

// import React, { useState, useEffect, useRef } from 'react';
// import ScrollLine from './ScrollLine';
// import Description from './Description';

// const UserTypeSelection = ({ onContinueClick }) => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isContinueBlack, setIsContinueBlack] = useState(false);
//   const containerRef = useRef(null);

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//     setIsContinueBlack(true);
//     console.log("Selected option:", option);
//   };

//   const handleContinueClick = () => {
//     window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
//     onContinueClick();
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.pageYOffset === 0) {
//         setIsContinueBlack(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="flex flex-col mt-10 items-center h-screen w-full bg-white text-black" ref={containerRef}>
//       <div className="options align-left">
//         <div className="heading text-4xl font-bold mt-4 text-center">Which are you most interested in?</div>
//         <div className="subheading mt-4 text-center text-slate-600">Choose just one. This will help us get you started (but won't limit your experience).</div>
//         <div className="selectOne">
//           <div className={`option flex mt-5 flex border-2 rounded-md border-white h-20 ${selectedOption === 'Student' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Student' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Student')}>
//               <i className="ri-line-chart-line"></i>
//               <span className='font-semibold ml-10'>Learning specific skills to advance my career</span>
//             </button>
//           </div>
//           <div className={`option mt-5 flex border-2 rounded-md border-white h-20 ${selectedOption === 'Professional' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Professional' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Professional')}>
//               <i className="ri-stack-fill"></i>
//               <span className='font-semibold ml-10'>Exploring new topics I'm interested in</span>
//             </button>
//           </div>
//           <div className={`option mt-5 flex border-2 rounded-md border-white h-20 ${selectedOption === 'Parent' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Parent' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Parent')}>
//               <i className="ri-refresh-fill"></i>
//               <span className='font-semibold ml-10'>Refreshing my maths foundations</span>
//             </button>
//           </div>
//           <div className={`option mt-5 flex border-2 rounded-md border-white h-20 ${selectedOption === 'Learner' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Learner' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Learner')}>
//               <i className="ri-brain-line"></i>
//               <span className='font-semibold ml-10'>Exercising my brain to stay sharp</span>
//             </button>
//           </div>
//         </div>
//         <div className="continue mt-4 flex justify-center">
//           <button
//             className={`button h-12 w-60 mt-8 items-center rounded text-2xl text-white font-semibold ${isContinueBlack ? 'bg-black' : 'bg-slate-300'}`}
//             onClick={handleContinueClick}
//           >
//             Continue
//           </button>
//         </div>
//       </div>
//       <ScrollLine progress={0} onContinueClick={onContinueClick} />
//     </div>
//   );
// };
// <Description/>
// export default UserTypeSelection;

import React, { useState, useEffect, useRef } from 'react';
import ScrollLine from './ScrollLine';
import Description from './Description';
import 'remixicon/fonts/remixicon.css';

const UserTypeSelection = ({ onContinueClick }) => {
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
          <div className="heading text-4xl font-bold mt-4 text-center">Which are you most interested in?</div>
          <div className="subheading mt-4 text-center text-slate-600">Choose just one. This will help us get you started (but won't limit your experience).</div>
          <div className="selectOne">
            <div className={`option flex mt-5 flex border-2 rounded-md border-white h-20 ${selectedOption === 'Student' ? 'border-yellow-300' : ''}`}>
              <button className={`w-full ${selectedOption === 'Student' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Student')}>
                <i className="ri-line-chart-line ri-2x"></i>
                <span className='font-semibold ml-10'>Learning specific skills to advance my career</span>
              </button>
            </div>
            <div className={`option mt-5 flex border-2 rounded-md border-white h-20 ${selectedOption === 'Professional' ? 'border-yellow-300' : ''}`}>
              <button className={`w-full ${selectedOption === 'Professional' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Professional')}>
                <i className="ri-stack-fill ri-2x"></i>
                <span className='font-semibold ml-10'>Exploring new topics I'm interested in</span>
              </button>
            </div>
            <div className={`option mt-5 flex border-2 rounded-md border-white h-20 ${selectedOption === 'Parent' ? 'border-yellow-300' : ''}`}>
              <button className={`w-full ${selectedOption === 'Parent' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Parent')}>
                <i className="ri-refresh-fill ri-2x"></i>
                <span className='font-semibold ml-10'>Refreshing my maths foundations</span>
              </button>
            </div>
            <div className={`option mt-5 flex border-2 rounded-md border-white h-20 ${selectedOption === 'Learner' ? 'border-yellow-300' : ''}`}>
              <button className={`w-full ${selectedOption === 'Learner' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Learner')}>
                <i className="ri-brain-line ri-2x"></i>
                <span className='font-semibold ml-10'>Exercising my brain to stay sharp</span>
              </button>
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

export default UserTypeSelection;