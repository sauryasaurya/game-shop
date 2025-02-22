import React, { useState, useMemo } from "react";

const ExpensiveComponent = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  // Expensive calculation: Sum of all items
  const total = useMemo(() => {
    console.log("Calculating total...");
    return items.reduce((acc, item) => acc + item, 0);
  }, [items]); // Only recalculate when `items` changes

  return (
    <div>
      <p>Count: {count}</p>
      <p>Total: {total}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setItems([...items, 10])}>Add Item</button>
    </div>
  );
};

export default ExpensiveComponent;
