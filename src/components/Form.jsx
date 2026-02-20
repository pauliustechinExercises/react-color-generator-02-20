import ColorGenerator from "./ColorGenerator";
import { useState } from "react";

const Form = () => {
  const [stripeCount, setStripeCount] = useState(0);

  const countStripes = (times) => {
    if (!times.target.value) {
      setStripeCount(0);
      // kad per daug nesigautu
    } else if (times.target.value > 100) {
      setStripeCount(100);
    } else {
      setStripeCount(times.target.value);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <form className="flex flex-col w-48">
        <label>How many stripes, would you like to generate?</label>
        <input
          className="border rounded-sm"
          type="number"
          name="times"
          onChange={countStripes}
        />
      </form>
      <h1 className="pt-12 font-bold">
        How many stripes (max 100): {stripeCount}
      </h1>
      <ColorGenerator times={stripeCount} />
    </div>
  );
};

export default Form;
