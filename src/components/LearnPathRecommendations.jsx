// import React from 'react';

// const LearningPathRecommendations = () => {
//   return (
//     <div >
//       <div className="elements w-screen h-screen bg-grey-700 text-center  ">
//         <div className="shapes flex justify-center items-center">
//       <div className="shape flex justify-center items-center h-28 w-28 rounded-full bg-yellow-500">
//       <div className="overlap h-20 w-20 rounded-full bg-white"></div>
//       </div>
//       </div>
//       <div className="text-2xl font-bold text-center flex justify-center items-center mt-10">Finding Learning path recommendations for you based on </div>
//       <div className="text-2xl font-bold text-center flex justify-center items-center">your responses </div>

//       </div>
//     </div>
//   );
// };

// export default LearningPathRecommendations;



import React from 'react';

const LearningPathRecommendations = () => {
  return (
    <div className="flex items-center justify-center h-screen  text-center">
      <div className="elements">
        <div className="shapes flex justify-center items-center">
          <div className="shape flex justify-center items-center h-28 w-28 rounded-full bg-yellow-500">
            <div className="overlap h-20 w-20 rounded-full bg-white"></div>
          </div>
        </div>
        <div className="text-2xl font-bold text-center flex justify-center items-center mt-10">Finding Learning path recommendations for you based on</div>
        <div className="text-2xl font-bold text-center flex justify-center items-center">your responses</div>
      </div>
    </div>
  );
};

export default LearningPathRecommendations;
