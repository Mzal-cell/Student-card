
import './components/StudentCard.css';
import StudentCard from './components/StudentCard';

function App() {
  return (
    <div className="app-container">
      <h2>Students Page</h2>
      
      <StudentCard 
        name="Alex Doe" 
        course="Web Developer" 
        age={24} 
      />
      
      <StudentCard 
        name="Mzalendo Kato" 
        course="Science and Technology" 
        age={29} 
      />
      
      <StudentCard 
        name="Bruce Didi" 
        course="UI/UX Design" 
        age={27} 
      />
    </div>
  );
}

export default App;


