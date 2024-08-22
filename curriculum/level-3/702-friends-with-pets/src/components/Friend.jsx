import React from 'react';
import Pet from './Pet';

const Friend = ({ friend }) => {
  return (
    <div className="friend">
      <h2>{friend.name}, Age: {friend.age}</h2>
      <div className="pets">
        {friend.pets.map((pet, index) => (
          <Pet key={index} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default Friend;