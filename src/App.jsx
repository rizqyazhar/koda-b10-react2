import React from "react";
import Button from "./components/Button";
import NumberDisplay from "./components/NumberDisplay";

export default function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div className='w-full min-h-dvh flex justify-center items-center bg-green-200'>
      <div className='w-96 h-36 relative flex justify-center items-center gap-5 p-10 rounded-lg shadow-lg bg-green-50'>
        <Button handleClick={() => (count > 0 ? setCount((n) => n - 1) : null)}>
          -
        </Button>
        <NumberDisplay count={count} />
        <Button
          handleClick={() => (count < 10 ? setCount((n) => n + 1) : null)}>
          +
        </Button>
      </div>
    </div>
  );
}
