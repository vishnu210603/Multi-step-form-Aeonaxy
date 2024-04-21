// import React, { useState, useEffect } from 'react';
// // import './ScrollLine.css';

// const ScrollLine = () => {
//   const [scrollPercent, setScrollPercent] = useState(0);
//   const [isGreen, setIsGreen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const height = document.documentElement.scrollHeight - window.innerHeight;
//       const scrolled = (scrollY / height) * 100;
//       setScrollPercent(scrolled);

//       // Check if scroll percentage exceeds 20%, then change line color to green
//       if (scrolled >= 20) {
//         setIsGreen(true);
//       } else {
//         setIsGreen(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, []);

//   return <div className={`scroll-line ${isGreen ? 'black' : ''}`} style={{ width: `${scrollPercent}%` }}></div>;
// };

// export default ScrollLine;
// import React, { useState } from 'react';

// function ScrollLine({ isContinueClicked }) {
//   return (
//     <div className="fixed flex justify-center items-center top-10 left-0 w-[500px] h-1 bg-gray-300" style={{ zIndex: 9999 }}>
//       <div className={`h-full bg-green-400 ${isContinueClicked ? 'w-1/5' : 'w-0'}`} style={{ transition: 'width 0.5s ease' }}></div>
//     </div>
//   );
// }

// export default ScrollLine;
// import React, { useState, useEffect } from 'react';

// function ScrollLine({ progress, onContinueClick }) {
//   const [width, setWidth] = useState(0);

//   useEffect(() => {
//     setWidth(progress * 20); // Set the width to the progress multiplied by 20%
//   }, [progress]);

//   const handleContinueClick = () => {
//     onContinueClick();
//   };

//   return (
//     <div className="fixed bottom-0 left-0 w-full h-1 bg-gray-300">
//       <div
//         className="h-full bg-green-700"
//         style={{ width: `${width}%`, transition: 'width 0.5s ease' }}
//       ></div>
//       <button
//         className="absolute bottom-4 right-4 px-4 py-2 bg-black text-white rounded"
//         onClick={handleContinueClick}
//       >
//         Continue
//       </button>
//     </div>
//   );
// }

// export default ScrollLine;


import React, { useState, useEffect } from 'react';

function ScrollLine({ progress, onContinueClick }) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(progress * 20); // Set the width to the progress multiplied by 20%
  }, [progress]);

  const handleContinueClick = () => {
    onContinueClick();
  };

  return (
    <div className="fixed top-0 left-0 w-0 h-1 bg-gray-300">
      <div
        className="h-full bg-green-700"
        style={{ width: `${width}%`, transition: 'width 0.5s ease' }}
      ></div>
      
    </div>
  );
}

export default ScrollLine;
