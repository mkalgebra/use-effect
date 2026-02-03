import { useState, useEffect } from "react";

function EffectDep({ test }) {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log("Pozvan je useEffect u EffectDep!");
  }, [flag, test]);

  return (
    <>
      <p>useEffect dep</p>
      <div>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>Click</button>
      </div>
      <div>
        <span>{flag ? "Yes" : "No"}</span>
        <button onClick={() => setFlag(!flag)}>Click</button>
      </div>
      <p>{test}</p>
    </>
  );
}

export default EffectDep;
