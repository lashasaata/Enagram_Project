import { useState } from "react";

function Comp() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("ქართული");

  const options = ["ქართული", "ინგლისური"];

  return (
    <main className="flex flex-col gap-6 px-4 pt-4">
      <section className="flex flex-col gap-4">
        <div className="relative">
          {/* Selected */}
          <button
            onClick={() => setOpen(!open)}
            className={`${
              open ? "border-[#4571E4]" : "border-[#e0e0e0]"
            } w-full flex items-center justify-between gap-1 px-[14px] py-[9px] border  rounded-[8px]`}
          >
            <div className="flex items-center gap-1 text-sm text-[#383a48] leading-[22px] font-medium">
              {selected}
            </div>
            <img src="/ArrowD.svg" alt="" className="" />
          </button>

          {/* Dropdown */}
          {open && (
            <ul className="absolute flex flex-col gap-3 mt-1 bg-white border border-[#4571E4] rounded-[8px] shadow-lg z-10 py-4 px-3">
              {options.map((o, index) => (
                <li
                  key={index}
                  onClick={() => {
                    setSelected(o);
                    setOpen(false);
                  }}
                  className={`${
                    o === selected ? "" : ""
                  } flex items-center gap-1 cursor-pointer text-sm text-[#383A48] leading-[20px]`}
                >
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="hidden peer"
                      checked={o == selected ? true : false}
                    />
                    <span
                      className="w-4 h-4 rounded-full border-1 border-[#E0E0E0] flex items-center justify-center
           peer-checked:bg-blue-500 peer-checked:border-blue-500
           peer-hover:border-blue-600 transition-colors"
                    >
                      <svg
                        className="w-4 h-4 text-white peer-checked:flex"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                    </span>

                    <span className="ml-2">{o}</span>
                  </label>
                </li>
              ))}
            </ul>
          )}
        </div>
        <label className="flex items-center gap-2 relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="peer w-5 h-5 rounded-[4px] border border-gray-400 appearance-none checked:bg-blue-500 checked:border-blue-500 cursor-pointer "
          />

          <svg
            className="absolute left-0 w-5 h-5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 transition-opacity"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-sm text-[#383a48] leading-[22px] tracking-[0.14px] font-medium">
            ფორმატის შენარჩუნება
          </span>
        </label>
        <div className="pb-4 border-b border-[#ededed]">
          <button className="w-full flex items-center justify-center gap-1 h-[42px] rounded-[6px] bg-add">
            <img src="/Plus.svg" alt="" />
            <span className="text-sm text-[#fff] leading-[28px] ">
              ახლის გახსნა
            </span>
          </button>
        </div>
      </section>
      <section className="flex flex-col items-center gap-4">
        <textarea
          name="start"
          id="end"
          placeholder="დაიწყე წერა..."
          className="outline-none w-full h-[190px] p-3 rounded-[8px] bg-[#f0f7ff] hlaceholder:text-sm placeholder:text-add placeholder:leading-[22px] text-sm text-[#383a48] leading-[22px]"
        />
        <img src="/Arrow.svg" alt="" />
        <textarea
          name="end"
          id="end"
          placeholder="დაიწყე წერა..."
          className="outline-none w-full h-[190px] p-3 rounded-[8px] bg-[#f0f7ff] hlaceholder:text-sm placeholder:text-add placeholder:leading-[22px] text-sm text-[#383a48] leading-[22px]"
        />
      </section>
      <button className="w-[142px] h-[38px] rounded-[6px] bg-add mt-1 mb-10 text-sm text-[#fff] leading-[28px] self-center">
        შედარება
      </button>
    </main>
  );
}

export default Comp;
