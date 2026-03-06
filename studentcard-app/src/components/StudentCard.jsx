

function StudentCard({ name, course, age }) {
  return (
    <div style={cardStyle}>
      <h3>{name}</h3>
      <p><strong>Course:</strong> {course}</p>
      <p>Age: {age}</p>
    </div>
  );
}

// card styling
const cardStyle = {
  border: '1px solid #ccc',
  borderRadius: '8px',
  padding: '16px',
  margin: '10px',
  backgroundColor: '#849458',
  color: '#1d1a1a',
  width: '250px'
};

export default StudentCard;
