export default function Button(props) {
  const { children, setCount } = props;
  return (
    <button
      onClick={setCount}
      className='w-10 h-10 bg-green-700 hover:bg-green-500 transition-colors cursor-pointer rounded-lg font-medium text-lg text-green-50 flex justify-center items-center leading-none shadow-sm shadow-green-950'>
      {children}
    </button>
  );
}
