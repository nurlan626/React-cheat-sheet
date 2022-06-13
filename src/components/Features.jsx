import React, { useState } from "react";

const Features = () => {
  const [likes, setLikes] = useState(0);
  const [value, setValue] = useState("");

  function increment() {
    setLikes(likes + 1);
  }
  function decrement() {
    setLikes(likes - 1);
  }

  return (
    <div>
      <div>
        <div>{value}
          </div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>

      <div>
        {likes}
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    </div>
  );
};

export default Features;
