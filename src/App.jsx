// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// App.js
import React from 'react';
import ScrollLine from './components/ScrollLine';
import LandingPage from './components/LandingPage';
import LearningPathRecommendations from './components/LearnPathRecommendations';
import UserTypeSelection from './components/UserTypeSelection';
import ResultsPage from './components/ResultsPage';
import Ratings from './components/Ratings';
import Description from './components/Description';
import ComfortLevel from './components/ComfortLevel';

const App = () => {
  return (
    <div>
      <ScrollLine/>
      <LandingPage/>
      <UserTypeSelection />
      <Description/>
      <ComfortLevel/>
      <Ratings/>
      <LearningPathRecommendations/>
      <ResultsPage />
      
    </div>
  );
};

export default App;

// components/LandingPage.js


// components/LearningPathRecommendations.js

// components/UserTypeSelection.js


// components/UserProfileSelection.js
