import { useOutletContext } from "react-router-dom";

const GoodMorning = () => {
  const { letterData } = useOutletContext();
  

  return (  
    <div>
      <h1 className="flex text-4xl mt-2 justify-center text-bold">
        coming soon...
      </h1>
    </div>
  );
};

export default GoodMorning;
