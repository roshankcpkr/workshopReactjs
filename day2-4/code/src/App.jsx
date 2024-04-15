import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card/Card'
import HookStudy from './components/HookStudy/HookStudy'
import FetchStudy from './components/FecthStudy/FetchStudy'


const datas = [
  {
    title: "Title 1",
    img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti ullam id. Voluptatem officia saepe dolores possimus sequi distinctio voluptates repellendus et pariatur, repellat quam?",
  },
  {
    title: "Title 3",
    img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti ullam id. Voluptatem officia saepe dolores possimus sequi distinctio voluptates repellendus et pariatur, repellat quam?",
  },
  {
    title: "Title 4",
    img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti ullam id. Voluptatem officia saepe dolores possimus sequi distinctio voluptates repellendus et pariatur, repellat quam?",
  },
   {
    title: "Title 1",
    img: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente corrupti ullam id. Voluptatem officia saepe dolores possimus sequi distinctio voluptates repellendus et pariatur, repellat quam?",
  },
];

function App() {
  


  return (
    <>
    {/* <Card data={datas} /> */}
    {/* <HookStudy/> */}
    <FetchStudy/>
    </>
  )
}

export default App


//  <>
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