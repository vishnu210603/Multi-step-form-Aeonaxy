// import React, { useState } from 'react';

// const LandingPage = () => {
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
//         <div className="heading text-4xl font-bold mt-4 text-center">Which describes you best?</div>
//         <div className="subheading mt-4 text-center text-slate-600">This will help us personalize your experience</div>

//         <div className="selectOne">
//           <div className={`option flex mt-5 flex border-2 rounded-md  border-white h-16  ${selectedOption === 'Student' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Student' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Student')}>
              
//               <span className='font-semibold ml-10'> Student</span> or soon to be enrolled
//             </button>
//           </div>

//           <div className={`option mt-4 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Professional' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Professional' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Professional')}>
//               <span className='font-semibold ml-10'>Professional</span> pursuing a career
//             </button>
//           </div>

//           <div className={`option mt-4 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Parent' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Parent' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Parent')}>
//               <span className='font-semibold ml-10 '>Parent</span> of a school-age child
//             </button>
//           </div>

//           <div className={`option mt-4 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Learner' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Learner' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Learner')}>
//               <span className='font-semibold ml-10'>Lifelong Learner</span>
//             </button>
//           </div>

//           <div className={`option mt-4 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Teacher' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Teacher' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Teacher')}>
//               <span className='font-semibold ml-10'>Teacher</span>
//             </button>
//           </div>

//           <div className={`option mt-4 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Others' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Others' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Others')}>
//               <span className='font-semibold ml-10'>Others</span>
//             </button>
//           </div>
//         </div>

//         <div className="continue mt-4 flex justify-center">
//           <button className={`button bg-slate-300 h-12 w-60 mt-8 items-center rounded text-2xl text-white font-semibold ${isContinueBlack ? 'bg-black' : ''}`}>
//             Continue
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;
// import React, { useState } from 'react';
// import ScrollLine from './ScrollLine';

// const LandingPage = ({ onContinueClick }) => {
//   const [selectedOption, setSelectedOption] = useState(null);

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//   };

//   return (
//     <div>
//       <div className="flex flex-col mt-10 items-center h-screen w-full bg-white text-black">
//       <div className="options align-left">
//         <div className="heading text-4xl font-bold mt-4 text-center">Which describes you best?</div>
//         <div className="subheading mt-4 text-center text-slate-600">This will help us personalize your experience</div>

//         <div className="selectOne">
//         <div className={`option flex mt-5 flex border-2 rounded-md  border-white h-16  ${selectedOption === 'Student' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Student' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Student')}>
              
//               <span className='font-semibold ml-10'> Student</span> or soon to be enrolled
//             </button>
//           </div>

//           <div className={`option mt-4 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Professional' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Professional' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Professional')}>
//               <span className='font-semibold ml-10'>Professional</span> pursuing a career
//             </button>
//           </div>

//           <div className={`option mt-4 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Parent' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Parent' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Parent')}>
//               <span className='font-semibold ml-10 '>Parent</span> of a school-age child
//             </button>
//           </div>

//           <div className={`option mt-4 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Learner' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Learner' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Learner')}>
//               <span className='font-semibold ml-10'>Lifelong Learner</span>
//             </button>
//           </div>

//           <div className={`option mt-4 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Teacher' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Teacher' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Teacher')}>
//               <span className='font-semibold ml-10'>Teacher</span>
//             </button>
//           </div>

//           <div className={`option mt-4 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Others' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Others' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Others')}>
//               <span className='font-semibold ml-10'>Others</span>
//             </button>
//           </div>
//         </div>

//         <div className="continue mt-4 flex justify-center">
//           <button 
//             className={`button bg-slate-300 h-12 w-60 mt-8 items-center rounded text-2xl text-white font-semibold ${isContinueBlack ? 'bg-black' : ''}`}
//             onClick={() => setIsContinueBlack(true)} // Update isContinueBlack state on click
//           >
//             Continue
//           </button>
//         </div>
//       </div>

//       {/* Scroll line */}
     
//     </div>
//       <ScrollLine progress={0} onContinueClick={onContinueClick} />
//     </div>
//   );
// };

// export default LandingPage;



// import React, { useState, useEffect } from 'react';

// const LandingPage = () => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isContinueBlack, setIsContinueBlack] = useState(false);
//   const [scrollLineColor, setScrollLineColor] = useState('bg-transparent');

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//     setIsContinueBlack(true);
//     console.log("Selected option:", option);
//     // You can perform any action here based on the selected option
//   };

//   useEffect(() => {
//     // Scroll to the next component when isContinueBlack becomes true
//     if (isContinueBlack) {
//       // Scroll to the next component
//       window.scrollTo({
//         top: window.innerHeight,
//         behavior: 'smooth'
//       });
//       // Set the scroll line color to green
//       setScrollLineColor('bg-green-700');
//     }
//   }, [isContinueBlack]);

//   return (
//     <div className="flex flex-col mt-10 items-center h-screen w-full bg-white text-black">
//       <div className="options align-left">
//         <div className="heading text-4xl font-bold mt-4 text-center">Which describes you best?</div>
//         <div className="subheading mt-4 text-center text-slate-600">This will help us personalize your experience</div>

//         <div className="selectOne">
//         <div className={`option flex mt-5 flex border-2 rounded-md  border-white h-16  ${selectedOption === 'Student' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Student' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Student')}>
              
//               <span className='font-semibold ml-10'> Student</span> or soon to be enrolled
//             </button>
//           </div>

          // <div className={`option mt-4 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Professional' ? 'border-yellow-300' : ''}`}>
          //   <button className={`w-full ${selectedOption === 'Professional' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Professional')}>
          //     <span className='font-semibold ml-10'>Professional</span> pursuing a career
          //   </button>
          // </div>

          // <div className={`option mt-4 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Parent' ? 'border-yellow-300' : ''}`}>
          //   <button className={`w-full ${selectedOption === 'Parent' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Parent')}>
          //     <span className='font-semibold ml-10 '>Parent</span> of a school-age child
          //   </button>
          // </div>

          // <div className={`option mt-4 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Learner' ? 'border-yellow-300' : ''}`}>
          //   <button className={`w-full ${selectedOption === 'Learner' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Learner')}>
          //     <span className='font-semibold ml-10'>Lifelong Learner</span>
          //   </button>
          // </div>

          // <div className={`option mt-4 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Teacher' ? 'border-yellow-300' : ''}`}>
          //   <button className={`w-full ${selectedOption === 'Teacher' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Teacher')}>
          //     <span className='font-semibold ml-10'>Teacher</span>
          //   </button>
          // </div>

          // <div className={`option mt-4 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Others' ? 'border-yellow-300' : ''}`}>
          //   <button className={`w-full ${selectedOption === 'Others' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Others')}>
          //     <span className='font-semibold ml-10'>Others</span>
          //   </button>
          // </div>
//         </div>

//         <div className="continue mt-4 flex justify-center">
//           <button 
//             className={`button bg-slate-300 h-12 w-60 mt-8 items-center rounded text-2xl text-white font-semibold ${isContinueBlack ? 'bg-black' : ''}`}
//             onClick={() => setIsContinueBlack(true)} // Update isContinueBlack state on click
//           >
//             Continue
//           </button>
//         </div>
//       </div>

//       {/* Scroll line */}
//       <div className={`w-[80%] h-1 mt-10 rounded-full ${scrollLineColor}`}></div>
//     </div>
//   );
// };

// export default LandingPage;




// import React, { useState } from 'react';
// import ScrollLine from './ScrollLine';

// const LandingPage = ({ onContinueClick }) => {
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
//         <div className="heading text-4xl font-bold mt-4 text-center">Which describes you best?</div>
//         <div className="subheading mt-4 text-center text-slate-600">This will help us personalize your experience</div>

//         <div className="selectOne">
//           <div className={`option flex mt-5 flex border-2 rounded-md  border-white h-16  ${selectedOption === 'Student' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Student' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Student')}>
//             <i class="ri-graduation-cap-fill"></i><span className='font-semibold ml-10'> Student</span> or soon to be enrolled
//             </button>
//           </div>

//           <div className={`option mt-4 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Professional' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Professional' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Professional')}>
//             <i class="ri-user-2-fill "></i><span className='font-semibold ml-10'>Professional</span> pursuing a career
//             </button>
//           </div>

//           <div className={`option mt-4 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Parent' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Parent' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Parent')}>
//             <i class="ri-parent-fill"></i><span className='font-semibold ml-10 '>Parent</span> of a school-age child
//             </button>
//           </div>

//           <div className={`option mt-4 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Learner' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Learner' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Learner')}>
//             <i class="ri-user-star-fill"></i><span className='font-semibold ml-10'>Lifelong Learner</span>
//             </button>
//           </div>

//           <div className={`option mt-4 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Teacher' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Teacher' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Teacher')}>
//             <i class="ri-presentation-fill"></i><span className='font-semibold ml-10'>Teacher</span>
//             </button>
//           </div>

//           <div className={`option mt-4 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Others' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Others' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Others')}>
//             <i class="ri-user-add-fill"></i> <span className='font-semibold ml-10'>Others</span>
//             </button>
//           </div>
//         </div>

//         <div className="continue mt-4 flex justify-center">
//           <button 
//             className={`button bg-slate-300 h-12 w-60 mt-8 items-center rounded text-2xl text-white font-semibold ${isContinueBlack ? 'bg-black' : ''}`}
//             onClick={() => setIsContinueBlack(true)} // Update isContinueBlack state on click
//           >
//             Continue
//           </button>
//         </div>
//       </div>

//       <ScrollLine progress={0} onContinueClick={onContinueClick} />
//     </div>
//   );
// };

// export default LandingPage;




// import React, { useState } from 'react';
// import ScrollLine from './ScrollLine';

// const LandingPage = ({ onContinueClick }) => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isContinueBlack, setIsContinueBlack] = useState(false);

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//     setIsContinueBlack(true); // Set isContinueBlack to true when an option is selected
//     console.log("Selected option:", option);
//     // You can perform any action here based on the selected option
//   };

//   return (
//     <div className="flex flex-col mt-10 items-center h-screen w-full bg-white text-black">
//       <div className="options align-left">
//         <div className="heading text-4xl font-bold mt-4 text-center">Which describes you best?</div>
//         <div className="subheading mt-4 text-center text-slate-600">This will help us personalize your experience</div>

//         <div className="selectOne">
//           <div className={`option flex mt-5 flex border-2 rounded-md  border-white h-16  ${selectedOption === 'Student' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Student' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Student')}>
//             <i className="ri-graduation-cap-fill"></i><span className='font-semibold ml-10'> Student</span> or soon to be enrolled
//             </button>
//           </div>

//           <div className={`option mt-4 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Professional' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Professional' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Professional')}>
//             <i class="ri-user-2-fill "></i><span className='font-semibold ml-10'>Professional</span> pursuing a career
//             </button>
//           </div>

//           <div className={`option mt-4 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Parent' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Parent' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Parent')}>
//             <i class="ri-parent-fill"></i><span className='font-semibold ml-10 '>Parent</span> of a school-age child
//             </button>
//           </div>

//           <div className={`option mt-4 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Learner' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Learner' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Learner')}>
//             <i class="ri-user-star-fill"></i><span className='font-semibold ml-10'>Lifelong Learner</span>
//             </button>
//           </div>

//           <div className={`option mt-4 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Teacher' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Teacher' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Teacher')}>
//             <i class="ri-presentation-fill"></i><span className='font-semibold ml-10'>Teacher</span>
//             </button>
//           </div>

//           <div className={`option mt-4 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Others' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Others' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Others')}>
//             <i class="ri-user-add-fill"></i> <span className='font-semibold ml-10'>Others</span>
//             </button>
//           </div>
//         </div>


        

//         <div className="continue mt-4 flex justify-center">
//           <button 
//             className={`button bg-slate-300 h-12 w-60 mt-8 items-center rounded text-2xl text-white font-semibold ${isContinueBlack ? 'bg-black' : ''}`}
//             onClick={() => setIsContinueBlack(true)} // Update isContinueBlack state on click
//           >
//             Continue
//           </button>
//         </div>
//       </div>

//       <ScrollLine progress={0} onContinueClick={onContinueClick} />
//     </div>
//   );
// };

// export default LandingPage;


// import React, { useState } from 'react';
// import ScrollLine from './ScrollLine';

// const LandingPage = ({ onContinueClick }) => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isContinueBlack, setIsContinueBlack] = useState(false);

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//     setIsContinueBlack(true); // Set isContinueBlack to true when an option is selected
//     console.log("Selected option:", option);
//     // You can perform any action here based on the selected option
//   };

//   return (
//     <div className="flex flex-col mt-10 items-center h-screen w-full bg-white text-black">
//       <div className="options align-left">
//         <div className="heading text-4xl font-bold mt-4 text-center">Which describes you best?</div>
//         <div className="subheading mt-4 text-center text-slate-600">This will help us personalize your experience</div>

//         <div className="selectOne">
//           <div className={`option flex mt-5 flex border-2 rounded-md  border-white h-16  ${selectedOption === 'Student' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Student' ? 'selected' : ''}`} onClick={() => { handleOptionSelect('Student'); setIsContinueBlack(true); }}>
//             <i className="ri-graduation-cap-fill"></i><span className='font-semibold ml-10'> Student</span> or soon to be enrolled
//             </button>
//           </div>

//           <div className={`option mt-4 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Professional' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Professional' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Professional')}>
//             <i class="ri-user-2-fill "></i><span className='font-semibold ml-10'>Professional</span> pursuing a career
//             </button>
//           </div>

//           <div className={`option mt-4 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Parent' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Parent' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Parent')}>
//             <i class="ri-parent-fill"></i><span className='font-semibold ml-10 '>Parent</span> of a school-age child
//             </button>
//           </div>

//           <div className={`option mt-4 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Learner' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Learner' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Learner')}>
//             <i class="ri-user-star-fill"></i><span className='font-semibold ml-10'>Lifelong Learner</span>
//             </button>
//           </div>

//           <div className={`option mt-4 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Teacher' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Teacher' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Teacher')}>
//             <i class="ri-presentation-fill"></i><span className='font-semibold ml-10'>Teacher</span>
//             </button>
//           </div>

//           <div className={`option mt-4 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Others' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Others' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Others')}>
//             <i class="ri-user-add-fill"></i> <span className='font-semibold ml-10'>Others</span>
//             </button>
//           </div>
       


//         </div>

//         <div className="continue mt-4 flex justify-center">
//           <button 
//             className={`button bg-slate-300 h-12 w-60 mt-8 items-center rounded text-2xl text-white font-semibold ${isContinueBlack ? 'bg-black' : ''}`}
//             onClick={() => setIsContinueBlack(true)} // Update isContinueBlack state on click
//           >
//             Continue
//           </button>
//         </div>
//       </div>

//       <ScrollLine progress={0} onContinueClick={onContinueClick} />
//     </div>
//   );
// };

// export default LandingPage;


// import React, { useState } from 'react';
// import ScrollLine from './ScrollLine';

// const LandingPage = ({ onContinueClick }) => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isContinueBlack, setIsContinueBlack] = useState(false);

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//     setIsContinueBlack(true); // Set isContinueBlack to true when an option is selected
//     console.log("Selected option:", option);
//     // You can perform any action here based on the selected option
//   };

//   return (
//     <div className="flex flex-col mt-10 items-center h-screen w-full bg-white text-black">
//       <div className="options align-left">
//         <div className="heading text-4xl font-bold mt-4 text-center">Which describes you best?</div>
//         <div className="subheading mt-4 text-center text-slate-600">This will help us personalize your experience</div>

//         <div className="selectOne">
//           <div className={`option flex mt-5 flex border-2 rounded-md  border-white h-16  ${selectedOption === 'Student' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Student' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Student')}>
//             <i className="ri-graduation-cap-fill"></i><span className='font-semibold ml-10'> Student</span> or soon to be enrolled
//             </button>
//           </div>

//           {/* Repeat similar structure for other options */}

//         </div>

//         <div className="continue mt-4 flex justify-center">
//           <button 
//             className={`button bg-slate-300 h-12 w-60 mt-8 items-center rounded text-2xl text-white font-semibold ${isContinueBlack ? 'bg-black' : ''}`}
//           >
//             Continue
//           </button>
//         </div>
//       </div>

//       <ScrollLine progress={0} onContinueClick={onContinueClick} />
//     </div>
//   );
// };

// export default LandingPage;


// import React, { useState } from 'react';
// import ScrollLine from './ScrollLine';

// const LandingPage = ({ onContinueClick }) => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isContinueBlack, setIsContinueBlack] = useState(false);

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//     setIsContinueBlack(true); // Set isContinueBlack to true when an option is selected
//     console.log("Selected option:", option);
//     // You can perform any action here based on the selected option
//   };

//   return (
//     <div className="flex flex-col mt-10 items-center h-screen w-full bg-white text-black">
//       <div className="options align-left">
//         <div className="heading text-4xl font-bold mt-4 text-center">Which describes you best?</div>
//         <div className="subheading mt-4 text-center text-slate-600">This will help us personalize your experience</div>

//         <div className="selectOne">
//           <div className={`option flex mt-5 flex border-2 rounded-md  border-white h-16  ${selectedOption === 'Student' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Student' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Student')}>
//             <i className="ri-graduation-cap-fill"></i><span className='font-semibold ml-10'> Student</span> or soon to be enrolled
//             </button>
//           </div>

//           {/* Repeat similar structure for other options */}

//         </div>

//         <div className="continue mt-4 flex justify-center">
//           <button 
//             className={`button bg-slate-300 h-12 w-60 mt-8 items-center rounded text-2xl text-white font-semibold ${isContinueBlack ? 'bg-black' : ''}`}
//           >
//             Continue
//           </button>
//         </div>
//       </div>

//       <ScrollLine progress={0} onContinueClick={onContinueClick} />
//     </div>
//   );
// };

// export default LandingPage;


// import React, { useState } from 'react';
// import UserTypeSelection from './UserTypeSelection';

// const LandingPage = () => {
//   const [selectedOption, setSelectedOption] = useState(null);
//   const [isOptionSelected, setIsOptionSelected] = useState(false);

//   const handleOptionSelect = (option) => {
//     setSelectedOption(option);
//     setIsOptionSelected(true);
//     console.log("Selected option:", option);
//   };

//   return (
//     <div className="flex flex-col mt-10 items-center h-screen w-full bg-white text-black">
//       <div className="options align-left">
//         <div className="heading text-4xl font-bold mt-4 text-center">Which describes you best?</div>
//         <div className="subheading mt-4 text-center text-slate-600">This will help us personalize your experience</div>
//         <div className="selectOne">
//           <div className={`option flex mt-5 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Student' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Student' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Student')}>
//               <span className='font-semibold ml-10'>Student</span> or soon to be enrolled
//             </button>
//           </div>
//           <div className={`option mt-4 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Professional' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Professional' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Professional')}>
//               <span className='font-semibold ml-10'>Professional</span> pursuing a career
//             </button>
//           </div>
//           <div className={`option mt-4 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Parent' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Parent' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Parent')}>
//               <span className='font-semibold ml-10'>Parent</span> of a school-age child
//             </button>
//           </div>
//           <div className={`option mt-4 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Learner' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Learner' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Learner')}>
//               <span className='font-semibold ml-10'>Lifelong Learner</span>
//             </button>
//           </div>
//           <div className={`option mt-4 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Teacher' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Teacher' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Teacher')}>
//               <span className='font-semibold ml-10'>Teacher</span>
//             </button>
//           </div>
//           <div className={`option mt-4 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Others' ? 'border-yellow-300' : ''}`}>
//             <button className={`w-full ${selectedOption === 'Others' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Others')}>
//               <span className='font-semibold ml-10'>Others</span>
//             </button>
//           </div>
//         </div>
//         <div className="continue mt-4 flex justify-center">
//           <button className={`button h-12 w-60 mt-8 items-center rounded text-2xl text-white font-semibold ${isOptionSelected ? 'bg-black' : 'bg-slate-300'}`}>
//             Continue
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// <UserTypeSelection/>
// export default LandingPage;

import React, { useState, useRef } from 'react';
import UserTypeSelection from './UserTypeSelection';
import 'remixicon/fonts/remixicon.css';

const LandingPage = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isOptionSelected, setIsOptionSelected] = useState(false);
  const pageRef = useRef(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOptionSelected(true);
    console.log("Selected option:", option);
  };

  const handleContinueClick = () => {
    if (pageRef.current) {
      const nextComponent = pageRef.current.nextElementSibling;
      if (nextComponent) {
        nextComponent.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div ref={pageRef}>
      <div className="flex flex-col items-center justify-center h-screen w-full bg-white text-black">
        <div className="options align-left">
          <div className="heading text-4xl font-bold text-center">Which describes you best?</div>
          <div className="subheading mt-4 text-center text-slate-600">This will help us personalize your experience</div>
          <div className="selectOne">

            <div className={`option flex mt-4 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Student' ? 'border-yellow-300' : ''}`}>
              <button className={`w-full ${selectedOption === 'Student' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Student')}>
              <i className="ri-graduation-cap-fill ri-2x"></i><span className='font-semibold ml-10'>Student</span> or soon to be enrolled
              </button>
            </div>

            <div className={`option mt-3 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Professional' ? 'border-yellow-300' : ''}`}>
              <button className={`w-full ${selectedOption === 'Professional' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Professional')}>
              <i class="ri-user-2-fill ri-2x "></i><span className='font-semibold ml-10'>Professional</span> pursuing a career
              </button>
            </div>

            <div className={`option mt-3 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Parent' ? 'border-yellow-300' : ''}`}>
              <button className={`w-full ${selectedOption === 'Parent' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Parent')}>
              <i class="ri-parent-fill ri-2x"></i><span className='font-semibold ml-10'>Parent</span> of a school-age child
              </button>
            </div>

            <div className={`option mt-3 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Learner' ? 'border-yellow-300' : ''}`}>
              <button className={`w-full ${selectedOption === 'Learner' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Learner')}>
              <i class="ri-user-star-fill ri-2x"></i> <span className='font-semibold ml-10'>Lifelong Learner</span>
              </button>
            </div>

            <div className={`option mt-3 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Teacher' ? 'border-yellow-300' : ''}`}>
              <button className={`w-full ${selectedOption === 'Teacher' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Teacher')}>
              <i class="ri-presentation-fill ri-2x"></i> <span className='font-semibold ml-10'>Teacher</span>
              </button>
            </div>

            <div className={`option mt-3 flex border-2 rounded-md border-white h-16 ${selectedOption === 'Others' ? 'border-yellow-300' : ''}`}>
              <button className={`w-full ${selectedOption === 'Others' ? 'selected' : ''}`} onClick={() => handleOptionSelect('Others')}>
              <i class="ri-user-add-fill ri-2x"></i> <span className='font-semibold ml-10'>Others</span>
              </button>
            </div>

          </div>
          <div className="continue mt-4 flex justify-center">
            <button
              className={`button h-12 w-60 mt-3 items-center rounded text-2xl text-white font-semibold ${isOptionSelected ? 'bg-black' : 'bg-slate-300'}`}
              onClick={handleContinueClick}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default LandingPage;