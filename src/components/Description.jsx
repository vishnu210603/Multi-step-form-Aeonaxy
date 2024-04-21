// import React from 'react'

// function Description() {
//   return (
//     <div>
//       <div className="w-screen h-screen flex flex-col justify-center items-center">
//       <div className="element flex justify-center gap-20 ">
//       <div className="image w-100 h-80 "><img src='./Pulley.png'></img></div>
//       <div className="description block justify-start items-center ">
//         <div className="heading flex text-4xl justify-start font-bold">You're in the right place</div>
        
//         <div className="mt-5  w-[550px] flex justify-center items-center">Brilliant gets you hands-on to help improve your professional skills and knowledge.You'll interact with concepts and solve fun problems in math, science and computer science. </div>
        
//       </div>
//       </div>  
//         <div className="btnposition flex items-start justify-start">

//       <div className=" continue"><button className="button bg-black h-12 w-60 mt-8 items-center rounded text-2xl text-white font-semibold">Continue</button></div>
//       </div>
//     </div>
//     </div>
//   )
// }

// export default Description;



// import React from 'react';
// import ScrollLine from './ScrollLine';

// const Description = ({ onContinueClick }) => {
//   return (
//     <div>
//       <div className="w-screen h-screen flex flex-col justify-center items-center">
//       <div className="element flex justify-center gap-20 ">
//       <div className="image w-100 h-80 "><img src='./Pulley.png'></img></div>
//       <div className="description block justify-start items-center ">
//         <div className="heading flex text-4xl justify-start font-bold">You're in the right place</div>
        
//         <div className="mt-5  w-[550px] flex justify-center items-center">Brilliant gets you hands-on to help improve your professional skills and knowledge.You'll interact with concepts and solve fun problems in math, science and computer science. </div>
        
//       </div>
//       </div>  
//         <div className="btnposition flex items-start justify-start">

//       <div className=" continue"><button className="button bg-black h-12 w-60 mt-8 items-center rounded text-2xl text-white font-semibold">Continue</button></div>
//       </div>
//     </div>

//       <ScrollLine progress={3} onContinueClick={onContinueClick} />
//     </div>
//   )
// }

// export default Description;

// import React, { useState, useEffect, useRef } from 'react';
// import ScrollLine from './ScrollLine';

// const Description = ({ onContinueClick }) => {
//   const [isContinueBlack, setIsContinueBlack] = useState(true);
//   const pageComponentRef = useRef(null);

//   const handleContinueClick = () => {
//     if (pageComponentRef.current) {
//       const screenHeight = window.innerHeight;
//       pageComponentRef.current.scrollBy({ top: screenHeight, behavior: 'smooth' });
//     }
//     onContinueClick();
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.pageYOffset === 0) {
//         setIsContinueBlack(true);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <div className="w-screen h-screen flex flex-col justify-center items-center" ref={pageComponentRef}>
//       <div className="element flex justify-center gap-20">
//         <div className="image w-100 h-80">
//           <img src='./Pulley.png' alt="Pulley" />
//         </div>
//         <div className="description block justify-start items-center">
//           <div className="heading flex text-4xl justify-start font-bold">You're in the right place</div>
//           <div className="mt-5 w-[550px] flex justify-center items-center">
//             Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.
//           </div>
//         </div>
//       </div>
//       <div className="btnposition flex items-start justify-start">
//         <div className="continue">
//           <button
//             className={`button h-12 w-60 mt-8 items-center rounded text-2xl text-white font-semibold ${isContinueBlack ? 'bg-black' : 'bg-slate-300'}`}
//             onClick={handleContinueClick}
//           >
//             Continue
//           </button>
//         </div>
//       </div>
//       <ScrollLine progress={3} onContinueClick={onContinueClick} />
//     </div>
//   );
// };

// export default Description;

import React, { useState, useEffect, useRef } from 'react';
import ScrollLine from './ScrollLine';
import ComfortLevel from './ComfortLevel'; // Import the ComfortLevel component

const Description = ({ onContinueClick }) => {
  const [isContinueBlack, setIsContinueBlack] = useState(true);
  const containerRef = useRef(null);

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
        setIsContinueBlack(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef}>
      <div className="w-screen h-screen flex flex-col  justify-center items-center gap-0">
        <div className="element flex justify-center items-center gap-20">
          <div className="image flex justify-center items-center w-full h-[30%] bg-red-500">
            <img className="h-full w-full " src='https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Pulley" />
          </div>
          <div className="description block justify-start items-center">
            <div className="heading flex text-4xl justify-start font-bold">You're in the right place</div>
            <div className="mt-5 w-[550px] flex justify-center items-center">
              Brilliant gets you hands-on to help improve your professional skills and knowledge. You'll interact with concepts and solve fun problems in math, science, and computer science.
            </div>
          </div>
        </div>
        <div className="btnposition flex items-start justify-start">
          <div className="continue mt-0">
            <button
              className={`button h-12 w-60 items-center rounded text-2xl text-white font-semibold ${isContinueBlack ? 'bg-black' : 'bg-slate-300'}`}
              onClick={handleContinueClick}
            >
              Continue
            </button>
          </div>
        </div>
        <ScrollLine progress={3} onContinueClick={onContinueClick} />
      </div>
     
    </div>
  );
};

export default Description;