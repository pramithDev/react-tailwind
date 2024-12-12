import AuthInputs from './components/AuthInputs.jsx';
import Header from './components/Header.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <AuthInputs />
      </main>
    </>
  );
}


// function App() {
//   const [choice, setChoice] = React.useState(null);
  
//   let textColor = 'white';
  
//   if (choice === 'yes') {
//       textColor = 'red';
//   } else if (choice === 'no') {
//       textColor = 'green';
//   }
  
//   return (
//   <div id="app">
//     <h1 style={{ color: textColor }}>CSS is great!</h1>
//     <menu>
//       <li>
//         <button onClick={() => setChoice('yes')}>Yes</button>
//       </li>
//       <li>
//         <button onClick={() => setChoice('no')}>No</button>
//       </li>
//     </menu>
//   </div>
// );
// }

// export default App;



// import React from 'react';

// function App() {
//     const [choice, setChoice] = React.useState(null);
//     let dynamicClass = '';
    
//     if (choice === 'yes') {
//         dynamicClass = 'highlight-green'
//     } else if (choice === 'no') {
//         dynamicClass = 'highlight-red'
//     }
//   return (
//     <div id="app">
//       <h1 className={`${dynamicClass}`}>CSS is great!</h1>
//       <menu>
//         <li>
//           <button onClick={() => setChoice('yes')}>Yes</button>
//         </li>
//         <li>
//           <button onClick={() => setChoice('no')}>No</button>
//         </li>
//       </menu>
//     </div>
//   );
// }

// export default App;