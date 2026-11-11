export default function Counter(props) {
  const { children } = props;

  return (
    <div className='w-96 h-36 relative flex justify-center items-center gap-5 p-10 rounded-lg shadow-lg bg-green-50'>
      {children}
    </div>
  );
}
