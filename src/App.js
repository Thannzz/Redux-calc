import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add, sub } from "./store/action";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  return (
    <div className="App">
      <h1>Counter : {count}</h1>
      <div>
        <button onClick={() => dispatch(add())}>+</button>
        <button onClick={() => dispatch(sub())}>-</button>
      </div>
    </div>
  );
}

export default App;
