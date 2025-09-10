import { useState, useEffect } from "react";

function Loading({
  isLoading,
  setIsLoading,
}: {
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [progress, setProgress] = useState(0); // 0 to 100

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsLoading(false); // hide loading when complete
            return 100;
          }
          const increment = Math.floor(Math.random() * 10) + 1;
          const nextProgress = prev + increment;
          return nextProgress > 100 ? 100 : nextProgress;
        });
      }, 100); // every 100ms (~1 second total for 100%)

      return () => clearInterval(interval);
    }
  }, [isLoading, setIsLoading]);

  if (!isLoading) return null; // hide after 1 seconds

  return (
    <div className="h-[440px] flex items-center justify-center  bg-opacity-50">
      <div className="p-4 bg-white rounded-[8px] shadow-lg flex items-center gap-2 border border-[#e1e1e1]">
        <p>Loading...</p>
        <div className="w-9 h-9 rounded-full border-[2px] border-[#4571E4] flex items-center justify-center">
          <div className="w-[9px] h-[9px] rounded-full bg-[#4571E4]"></div>
        </div>
        <div className="flex flex-col gap-[5px]">
          <p className="text-[10px] text-add leading-[16px]">
            Converting...Thank you For your Patience
          </p>
          <div className="flex items-center gap-2">
            <span className="text-base text-[#383a48] leading-[20px] font-bold">
              {progress}%
            </span>
            <div className="w-full h-4 bg-[#f6f9ff] rounded-[64px] overflow-hidden">
              <div
                className="h-full bg-[#4571E4] rounded-[64px] transition-all duration-200"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
