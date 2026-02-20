import { hexaColor } from "../utils/color-generator";

const ColorGenerator = ({ times }) => {
  const numArray = [];

  for (let i = 0; i < times; i++) {
    numArray.push(i);
  }

  return (
    <>
      {numArray.map((times) => {
        return (
          <div key={times}
            className="h-8 w-full text-white font-bold"
            style={{ background: hexaColor() }}
          >
            {hexaColor()}
          </div>
        );
      })}
    </>
  );
};

export default ColorGenerator;
