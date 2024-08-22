import React from 'react';

const Pet = ({ pet }) => {
  return (
    <div className="pet">
      <p>Name: {pet.name}</p>
      <p>Breed: {pet.breed}</p>
    </div>
  );
};

export default Pet;