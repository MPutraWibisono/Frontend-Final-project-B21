// /* eslint-disable react/prop-types */
// const FormElementsSelectRoundedLgBasic = ({
//   title,
//   options,
//   handleCheckboxChange,
// }) => {
//   return (
//     <>
//       {/*<!-- Component: Rounded large basic select --> */}
//       <div className="relative my-6 md:w-60">
//         <select
//           id="id-10"
//           name="id-10"
//           required
//           onChange={(e) => handleCheckboxChange(title, e.target.value)}
//           className="peer relative h-12 w-full appearance-none rounded border border-slate-200 bg-white px-4 text-slate-500 outline-none transition-all autofill:bg-white focus:border-emerald-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
//         >
//           <option value="" selected>
//             --
//           </option>
//           {options.map((choose) => (
//             <option key={choose.label} value={choose.label}>
//               {choose.label}
//             </option>
//           ))}
//         </select>
//         <label
//           htmlFor="id-10"
//           className="pointer-events-none absolute top-3 left-2 z-[1] px-2 text-base text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-emerald-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
//         >
//           {title}
//         </label>
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="pointer-events-none absolute top-3.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-emerald-500 peer-disabled:cursor-not-allowed"
//           viewBox="0 0 20 20"
//           fill="currentColor"
//           aria-labelledby="title-10 description-10"
//           role="graphics-symbol"
//         >
//           <title id="title-10">Arrow Icon</title>
//           <desc id="description-10">Arrow icon of the select list.</desc>
//           <path
//             fillRule="evenodd"
//             d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
//             clipRule="evenodd"
//           />
//         </svg>
//       </div>
//       {/*<!-- End Rounded large basic select --> */}
//     </>
//   );
// };

// export default FormElementsSelectRoundedLgBasic;

// import React, { useState, useEffect, useRef } from "react";

// export default function DropdownBasic() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [currentItem, setCurrentItem] = useState(null);
//   const wrapperRef = useRef(null);
//   const [checked, setChecked] = useState(false);

//   const navigationItems = [
//     {
//       linkName: "Dashboard",
//     },
//     {
//       linkName: "Metrics and analytics",
//     },
//     {
//       linkName: "Multi-Channel Funnels overview",
//     },
//     {
//       linkName: "User settings",
//     },
//     {
//       linkName: "User Profile",
//     },
//   ];

//   useEffect(() => {
//     window.addEventListener("keydown", handleKeyDown);
//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   });

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
//         setIsOpen(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [wrapperRef]);

//   const handleKeyDown = (e) => {
//     if (isOpen) {
//       e.preventDefault();

//       switch (e.keyCode) {
//         // KeyDown
//         case 40:
//           if (currentItem === navigationItems.length - 1) {
//             setCurrentItem(0);
//           } else {
//             setCurrentItem(currentItem + 1);
//           }
//           break;
//         // KeyUp
//         case 38:
//           if (currentItem === 0) {
//             setCurrentItem(navigationItems.length - 1);
//           } else {
//             setCurrentItem(currentItem - 1);
//           }
//           break;
//         // Escape
//         case 27:
//           setCurrentItem(1);
//           setIsOpen(false);
//           break;
//         default:
//           break;
//       }
//     }
//   };

//   return (
//     <>
//       {/* <!-- Component: Basic dropdown menu--> */}
//       <div className="relative inline-flex " id="dropdown">
//         {/*  <!--  Start Dropdown trigger --> */}
//         <button
//           className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white transition duration-300 hover:bg-emerald-600 focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none"
//           onClick={() => setIsOpen(!isOpen)}
//           aria-expanded={isOpen ? " true" : "false"}
//           ref={wrapperRef}
//         >
//           <span>Choose one</span>
//           <span className="relative only:-mx-5">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               aria-labelledby="t-01 d-01"
//               role="graphics-symbol"
//             >
//               <title id="t-01">Button icon</title>
//               <desc id="d-01">An icon describing the buttons usage</desc>
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 d="M19.5 8.25l-7.5 7.5-7.5-7.5"
//               />
//             </svg>
//           </span>
//         </button>
//         {/*  <!--  End Dropdown trigger --> */}
//         {/*  <!-- Start Menu list --> */}
//         <ul
//           className={`${
//             isOpen ? "flex" : "hidden"
//           } absolute top-full z-10 mt-1 flex w-72 list-none flex-col rounded bg-white py-2 shadow-md shadow-slate-500/10 `}
//         >
//           {navigationItems.map((item, index) => {
//             return (
//               <li key={index}>
//                 <input
//                   className="peer h-4 w-4 cursor-pointer appearance-none rounded border-2 border-slate-500 bg-white transition-colors checked:border-emerald-500 checked:bg-emerald-500 checked:hover:border-emerald-600 checked:hover:bg-emerald-600 focus:outline-none checked:focus:border-emerald-700 checked:focus:bg-emerald-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-slate-100 disabled:bg-slate-50"
//                   type="checkbox"
//                   checked={checked}
//                   onChange={() => setChecked(!checked)}
//                   id="id-c01"
//                 />
//                 <label
//                   className="cursor-pointer pl-2 text-slate-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400"
//                   htmlFor="id-c01"
//                 >
//                   Primary Checkbox
//                 </label>
//               </li>
//             );
//           })}
//         </ul>
//         {/*  <!-- End Menu list --> */}
//       </div>
//       {/* <!-- End Basic dropdown menu--> */}
//     </>
//   );
// }
