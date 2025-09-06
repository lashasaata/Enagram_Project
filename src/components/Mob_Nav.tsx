import { useState } from "react";

function Mob_Nav() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({
    value: "1",
    label: "ტექსტის შედარება",
    icon: "/Comp.svg",
  });

  const options = [
    { value: "1", label: "მართლმწერი", icon: "/check.svg" },
    { value: "2", label: "ტექსტის შედარება", icon: "/Comp.svg" },
    { value: "3", label: "ხმა", icon: "/mic.svg" },
    { value: "4", label: "ტექსტი", icon: "/align-center.svg" },
    { value: "5", label: "PDF კონვერტაცია", icon: "/pdf.svg" },
  ];

  return (
    <header className="flex flex-col">
      <nav className="flex items-center justify-between h-[60px] py-3 px-5 bg-[#132450]">
        <div className="flex items-center relative">
          <img src="/Logo.png" alt="Logo" className="w-9 h-9 cursor-pointer" />
          <span className="text-[7px] text-[#fff] font-bold mt-[-8px]">
            ENAGRAM
          </span>
          <div className="w-9 h-2 absolute bg-[#132450] bottom-0"></div>
        </div>
        <div>
          <img src="/menu.png" alt="Menu" className="cusros-pointer" />
        </div>
      </nav>
      <section className="relative  p-4 border-b border-[#ededed]">
        {/* Selected */}
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1 "
        >
          <div className="flex items-center gap-1 text-xs text-[#132450] leading-[20px] font-bold">
            <img src={selected.icon} alt="" className="w-5 h-5" />
            {selected.label}
          </div>
          <img src="/ArrowD.svg" alt="" />
        </button>
        {/* Dropdown */}
        {open && (
          <ul className="absolute mt-1 bg-white border border-gray-300 rounded-md shadow-lg z-10">
            {options.map((o) => (
              <li
                key={o.value}
                onClick={() => {
                  setSelected(o);
                  setOpen(false);
                }}
                className={`${
                  o.value === selected.value ? "bg-gray-200" : ""
                } flex items-center gap-2 p-2 hover:bg-gray-100 cursor-pointer`}
              >
                <img src={o.icon} alt="" className="w-5 h-5" />
                {o.label}
              </li>
            ))}
          </ul>
        )}
      </section>
    </header>
  );
}

export default Mob_Nav;
