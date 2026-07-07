import { useState } from "react";
import Button2 from "./Btn";

function Header() {
  const [count, setCount] = useState(0);

  return (
    <>
      <header className="flex flex-col justify-center items-center pt-17.75">
        <h1 className="text-[32px] font-bold text-[#6E728E]">Our Pricing</h1>
        <div className="flex gap-6 mt-10 ">
          <span className="text-[#6E728E] text-[15px] font-bold">Annually</span>
          <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-12 h-7 bg-slate-300 rounded-full peer peer-checked:bg-indigo-600 transition-colors duration-200"></div>
            <span className="dot absolute left-1 top-1 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5"></span>
          </label>
          <span className="text-[#6E728E] text-[15px] font-bold">Monthly</span>
          <button
            onClick={() => {
              setCount((c) => c + 1);
            }}
          >
            click me
          </button>
          <span>count is {count}</span>
        </div>
      </header>
      <Button2 count={count}></Button2>
    </>
  );
}

export default Header;

//https://prebuiltui.com/components/toggle-switch
//https://www.figma.com/design/gjpinyY53gWby4nYeBYj9j/pricing-component-with-toggle?node-id=0-117&t=dsAg7j3uzYpjHWgU-0

//other way
// import { useState } from "react";
// import Button from "./Button";

// function Header() {
//   const [count, setCount] = useState(0);

//   const [isOpen, setIsOpen] = useState(false);

//   const handleCountChange = () => {
//     setCount((c) => c + 1);
//   };

//   return (
//     <>
//       <header className="h-45.5 flex justify-center items-center flex-col">
//         <h1 className="text-3xl text-[#6E728E] font-bold">Our Pricing </h1>
//         <div className="flex gap-26 text-[#6E728E] mt-10">
//           <span>Annually</span>
//           <span>Monthly</span>
//           <button onClick={handleCountChange}>click me</button>
//           <span>count is {count}</span>
//         </div>
//         <button
//           onClick={() => {
//             setIsOpen(!isOpen);
//           }}
//         >
//           {isOpen ? "x" : "="}
//         </button>
//         {isOpen && <div>menu</div>}
//       </header>

//       <Button count={count}></Button>
//     </>
//   );
// }

// export default Header;
