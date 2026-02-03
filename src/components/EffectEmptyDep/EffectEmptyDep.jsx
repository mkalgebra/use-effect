import { useState, useEffect } from "react";

function EffectEmptyDep() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    console.log("Pozvan je useEffect u EffectEmptyDep!");
  }, []);

  return (
    <>
      <p>useEffect empty dep</p>
      <div>
        <span>{count}</span>
        <button onClick={() => setCount(count + 1)}>Click</button>
      </div>
      <div>
        <span>{flag ? "Yes" : "No"}</span>
        <button onClick={() => setFlag(!flag)}>Click</button>
      </div>
    </>
  );
}

export default EffectEmptyDep;
