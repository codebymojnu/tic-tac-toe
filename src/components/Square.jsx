export default function Square({ value, handleSqureClick }) {
  return (
    <>
      <button
        className="bg-white border border-gray-400 h-10 w-10 m-1 rounded-full flex items-center justify-center"
        onClick={() => handleSqureClick()}
      >
        {value}
      </button>
    </>
  );
}
