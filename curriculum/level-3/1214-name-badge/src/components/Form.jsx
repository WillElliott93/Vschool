import React, {useState} from "react";

const BadgeForm = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [phone, setPhone] = useState('');
    const [badgeType, setBadgeType] = useState('');
    const [terms, setTerms] = useState(false);
  
    const isValid = () => {
      return (
        name.length >= 3 &&
        description.length >= 3 &&
        /^[0-9]+$/.test(phone) &&
        badgeType &&
        terms
      );
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (isValid()) {
        onSubmit({ name, description, phone, badgeType });
        setName('');
        setDescription('');
        setPhone('');
        setBadgeType('');
        setTerms(false);
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Badge Type:</label>
          <div>
            <input
              type="radio"
              name="badgeType"
              value="Employee"
              checked={badgeType === 'Employee'}
              onChange={(e) => setBadgeType(e.target.value)}
            />
            <label>Employee</label>
            <input
              type="radio"
              name="badgeType"
              value="Guest"
              checked={badgeType === 'Guest'}
              onChange={(e) => setBadgeType(e.target.value)}
            />
            <label>Guest</label>
          </div>
        </div>
        <div>
          <input
            type="checkbox"
            checked={terms}
            onChange={(e) => setTerms(e.target.checked)}
            required
          />
          <label>I agree to the terms and conditions</label>
        </div>
        <button type="submit" disabled={!isValid()}>
          Submit
        </button>
      </form>
    );
  };
  
  export default BadgeForm;