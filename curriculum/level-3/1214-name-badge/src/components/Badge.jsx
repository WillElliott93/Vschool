import React from "react";

const Badge = ({ badge, index }) => {
    const backgroundColor = index % 2 === 0 ? 'lightcoral' : 'lightblue';
  
    return (
      <div style={{ border: '1px solid #ccc', padding: '10px', marginBottom: '10px', backgroundColor }}>
        <h3>{badge.name}</h3>
        <p>{badge.description}</p>
        <p>Phone: {badge.phone}</p>
        <p>Type: {badge.badgeType}</p>
      </div>
    );
  };
  
  export default Badge;