import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    setIsVisible(true);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me!</button>
      {isVisible && (
        <Fade onVisibilityChange={(visible) => setIsVisible(visible)}>
          <div>
            <h1>Awesome Reveal</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor eros vitae ipsum
              aliquet eleifend. In hac habitasse platea dictumst. Quisque pulvinar erat et metus
              congue, quis malesuada tortor venenatis.
            </p>
          </div>
        </Fade>
      )}
    </div>
  );
}

export default App;
