import React from "react";
import Button from "./components/Button";
import NumberDisplay from "./components/NumberDisplay";
import Counter from "./components/Counter";

export default function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div className='w-full min-h-dvh flex justify-center items-center bg-green-200'>
      <Counter>
        <Button handleClick={() => (count > 0 ? setCount((n) => n - 1) : null)}>
          -
        </Button>
        <NumberDisplay count={count} />
        <Button
          handleClick={() => (count < 10 ? setCount((n) => n + 1) : null)}>
          +
        </Button>
      </Counter>
    </div>
  );
}
