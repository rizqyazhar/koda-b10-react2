export default function NumberDisplay(props) {
  const { count } = props;
  return (
    <>
      <h1 className='-translate-y-7 text-4xl font-medium text-green-950'>
        {count}
      </h1>
    </>
  );
}
