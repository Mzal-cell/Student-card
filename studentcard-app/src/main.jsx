import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


function studentCard(name, age, grade) {
  return {
    name: name,
    age: age,
    grade: grade
  };
}

const student1 = studentCard("Alice", 20, "A");
const student2 = studentCard("Bob", 22, "B");
const student3 = studentCard("Charlie", 19, "A-");

console.log(student1);
console.log(student2);
console.log(student3);

export { studentCard };

// StudentCard.jsx
function StudentCard({ name, course, age }) {
  return (
    <div style={cardStyle}>
      <h2>{name}</h2>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>Age:</strong> {age}</p>
    </div>
  );
}

// A little bit of inline styling to make it look like an actual card
const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  margin: '10px',
  backgroundColor: '#f9f9f9',
  color: '#333',
  width: '200px'
};

export default StudentCard;
