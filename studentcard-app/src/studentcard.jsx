// src/StudentCard.jsx
import React from 'react';
import './StudentCard.css';

const StudentCard = ({ name, track, level, image }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="profile-img" />
      <h2>{name}</h2>
      <p><strong>Track:</strong> {track}</p>
      <p><strong>Level:</strong> {level}</p>
      <span className="badge">Active Student</span>
    </div>
  );
};

export default StudentCard;