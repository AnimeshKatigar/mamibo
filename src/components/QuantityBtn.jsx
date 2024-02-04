const QuantityBtn = ({ count = 1, setterFunction, customClasses }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    if (value > 0) {
      setterFunction(value);
    }
  };
  const increment = () => {
    setterFunction(Number(count + 1));
  };
  const decrement = () => {
    if (count - 1 >= 1) {
      setterFunction(count - 1);
    }
  };
  return (
    <div
      className={`${customClasses} flex transition-all bg-[#e0e0e0] font-GothamLight border border-[#141414]`}
    >
      <button
        className="transition-all text-black text-base disabled:text-slate-600 disabled:cursor-not-allowed p-3"
        onClick={decrement}
        disabled={count === 1}
      >
        -
      </button>
      <div className="p-3 text-black w-[50px] text-center">{count}</div>
      {/* <input
        className="focus:outline-none border-none pl-4 hover:outline-none outline-none w-[50px]"
        type="number"
        onChange={handleChange}
        min={1}
        value={count}
      /> */}
      <button className=" text-black text-base p-3" onClick={increment}>
        +
      </button>
    </div>
  );
};

export default QuantityBtn;
