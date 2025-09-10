import { useState } from "react";

function Lg_Nav() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({
    value: "2",
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

  let user = { name: "Lasha Saatashvili", avatar: null };

  return (
    <aside className="hidden lg:flex lg:min-h-screen lg:relative lg:min-w-[240px] lg:bg-[#fff]">
      <nav className="hidden lg:min-w-[240px] lg:h-full lg:flex lg:flex-col lg:justify-between lg:bg-[#132450] lg:absolute lg:pt-3">
        <div className="hidden absolute w-full lg:flex lg:justify-end lg:pr-[27px] cursor-pointer">
          <img src="/chevrons-left.svg" alt="menu" />
        </div>
        <div className="flex items-center justify-between h-[60px] lg:h-[45px] py-3 lg:px-6 lg:py-0 px-5 md:py-[30px] bg-[#132450] lg:mt-[32px]">
          <div className="flex items-center lg:gap-[11px] relative">
            <img
              src="/Logo.png"
              alt="Logo"
              className="w-9 h-9 cursor-pointer lg:hidden"
            />
            <img src="/largeLogo.svg" alt="logo" className="hidden lg:flex" />
            <span className="text-[7px] lg:text-[10px] text-[#fff] font-bold mt-[-8px] lg:mt-[-2px]">
              ENAGRAM
            </span>
            <div className="w-9 h-2 absolute bg-[#132450] bottom-0"></div>
          </div>
          <div>
            <img
              src="/menu.png"
              alt="Menu"
              className="cusros-pointer lg:hidden"
            />
          </div>
        </div>
        <section className="relative lg:absolute lg:top-[100px] xl:top-[120px]  p-4 md:py-6 lg:py-0 md:px-[30px] lg:px-3 border-b border-[#ededed] lg:border-0">
          <ul className="absolute lg:relative mt-1 bg-white lg:bg-transparent border border-gray-300 lg:border-0 rounded-md shadow-lg lg:shadow-none z-10">
            {options.map((o) => (
              <li
                key={o.value}
                onClick={() => {
                  setSelected(o);
                  setOpen(false);
                }}
                className={`${
                  o.value === selected.value
                    ? "bg-[#fff] text-[#132450] font-bold"
                    : "text-[#fff] font-normal"
                } flex items-center gap-2 p-2 hover:bg-gray-500 cursor-pointer text-sm leading-[20px] rounded-[20px] `}
              >
                <img src={o.icon} alt="" className="w-5 h-5" />
                {o.label == "ხმა" || o.label == "ტექსტი" ? (
                  <span className="flex items-center gap-1">
                    {o.label}
                    <img src="/arrow-right.svg" alt="" />
                    {o.label == "ხმა" ? "ტექსტი" : "ხმა"}
                  </span>
                ) : (
                  o.label
                )}
              </li>
            ))}
          </ul>
        </section>
        <section className="hidden lg:flex lg:justify-self-end lg:justify-between lg:items-center lg:py-5 lg:px-[14px] lg:pr-3 lg:border-t lg:border-navLine">
          <div className="lg:flex lg:items-center lg:gap-[5px]">
            {user?.avatar ? (
              <img src="" alt="" />
            ) : (
              <div className="w-5 h-5 flex items-center justify-center rounded-full border border-[#fff] bg-[#9ec8ff] text-[10px] text-[ #132450] tracking-[0.1px] font-bold">
                {user.name.slice(0, 1)}
              </div>
            )}
            <span className="text-sm text-[#fff] leading-[20px]">
              {user?.name}
            </span>
          </div>
          <img src="/dots-menu.svg" alt="setings" className="cursor-pointer" />
        </section>
      </nav>
      <span className="hidden">{open}</span>
    </aside>
  );
}

export default Lg_Nav;
