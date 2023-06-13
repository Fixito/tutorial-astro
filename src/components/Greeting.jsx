import { useState } from 'react';

const Greeting = ({ messages }) => {
  const randomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];

  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting} ! Merci pour votre visite !</h3>
      <button onClick={() => setGreeting(randomMessage())}>
        Nouvelle salutation
      </button>
    </div>
  );
};

export default Greeting;
