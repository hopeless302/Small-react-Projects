const RateButton = ({ count, setCount, setSub }) => {
  return (
    <div className="flex items-center gap-4">
      <p>The count is: {count}</p>
      <div className="flex items-center gap-4">
        <button
          className="bg-lime-600 rounded shadow text-white px-2 py-1"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
        <button
          className="bg-red-600 rounded shadow text-white px-2 py-1"
          onClick={() => setSub(count === 0 ? 0 : count - 1)}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default RateButton;
