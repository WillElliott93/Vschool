import { useState } from 'react'
import Form from './components/Form'
import BadgeList from './components/BadgeList';


function App() {
  const [badges, setBadges] = useState([]);

  const handleBadgeSubmit = (badge) => {
    setBadges([...badges, badge]);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Badge Submission</h1>
      <Form onSubmit={handleBadgeSubmit} />
      <BadgeList badges={badges} />
    </div>
  );
};


export default App
