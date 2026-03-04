import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App



import StudentCard from './StudentCard';

function App() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <h1>Class Directory</h1>
      
      {/* Rendering the component 3 times with different data */}
      <StudentCard 
        name="Alex Rivers" 
        course="Full Stack Web Dev" 
        age={24} 
      />
      
      <StudentCard 
        name="Sam Tarly" 
        course="Data Science" 
        age={29} 
      />
      
      <StudentCard 
        name="Jordan Lee" 
        course="UI/UX Design" 
        age={22} 
      />
    </div>
  );
}

export default App;


import StudentCard from './StudentCard';

function App() {
  return (
    <div className="App">
      <h1>Marathon Student Registry</h1>
      <StudentCard 
        name="Your Name" 
        track="Fullstack Web" 
        level="Intermediate" 
        image="https://via.placeholder.com/150" 
      />
    </div>
  );
}
