import React, { useEffect, useState } from "react";

function App() {
  // create a timer
  const [count, setCount] = useState(0);

  // create a function to increment the timer
  useEffect(
    () => {
      const timer = setTimeout(() => {
        setCount(count + 1);
      }, 1000);

      // clean up the timer whenever the component is re-rendered get rid of    // the old one it reduces memory leaks
      return () => {
        clearTimeout(timer);
      };
    },
    // dependency array
    []
  );

  return <main>{count}</main>;
  {
    /* TODO: add a form with one input field and a submit button */
  }
}

export default App;
