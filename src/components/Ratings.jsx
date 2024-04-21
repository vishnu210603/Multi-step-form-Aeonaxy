// import React from 'react'
// import 'remixicon/fonts/remixicon.css'

// function Ratings() {
//   return (
//     <div className="w-screen h-screen">
//       <div className="element flex justify-center gap-20 ">
//       <div className="image w-100 h-80 "><img src='./Emoji.png'></img></div>
//       <div className="description ">
//         <div className="heading flex text-4xl justify-center font-bold">You're on your way!</div>
//         <div className="starratings mt-5 flex justify-center ">
//             <i class="ri-star-fill"></i>
//             <i class="ri-star-fill"></i>
//             <i class="ri-star-fill"></i>
//             <i class="ri-star-fill"></i>
//             <i class="ri-star-fill"></i>
//             </div>
//         <div className="mt-5  w-[550px] flex justify-center items-center">"Through its engaging and well-structured courses,Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations."</div>
//         <div className="reviewername flex mt-8">-Jacob S</div>
//       </div>
//       </div>  


//       <div className=" continue  flex  justify-center"><button className="button bg-black h-12 w-60 mt-8 items-center rounded text-2xl text-white font-semibold">Continue</button></div>

//     </div>
//   )
// }

// export default Ratings;

import React, { useState, useEffect, useRef } from 'react';
import ScrollLine from './ScrollLine';
import ComfortLevel from './ComfortLevel'; // Import the ComfortLevel component

const Ratings = ({ onContinueClick }) => {
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
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <div className="element flex justify-center gap-10">
          <div className="image w-[50%] h-[40%]">
            <img src='https://images.unsplash.com/photo-1659018966820-de07c94e0d01?q=80&w=1798&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Pulley" />
          </div>
          <div className="description block justify-start items-center">
          <div className="heading flex text-4xl justify-center mt-16 font-bold">You're on your way!</div>
        <div className="starratings mt-5 gap-1 flex justify-center ">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="rgba(240,203,64,1)"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="rgba(240,203,64,1)"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="rgba(240,203,64,1)"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="rgba(240,203,64,1)"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="rgba(240,203,64,1)"><path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path></svg>
            </div>
            <div className="mt-5  w-[550px] flex justify-center items-center">"Through its engaging and well-structured courses,Brilliant has taught me mathematical concepts that I previously struggled to understand. I now feel confident approaching both technical job interviews and real world problem solving situations."</div>
        <div className="reviewername flex text-center font-semibold mt-8">-Jacob S</div>
          </div>
        </div>
        <div className="btnposition flex items-start justify-start">
          <div className="continue">
            <button
              className={`button h-12 w-60 mt-8 items-center rounded text-2xl text-white font-semibold ${isContinueBlack ? 'bg-black' : 'bg-slate-300'}`}
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

export default Ratings;