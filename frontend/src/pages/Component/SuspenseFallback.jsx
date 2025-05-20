import { AiOutlineLoading3Quarters } from "react-icons/ai";

const SuspenseFallback = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px]">
      <AiOutlineLoading3Quarters 
        className="text-4xl text-pink-500 animate-spin mb-4" 
        aria-label="Loading spinner"
      />
      <p className="text-pink-400 text-lg font-medium">Loading, please wait...</p>
    </div>
  );
};

export default SuspenseFallback;
