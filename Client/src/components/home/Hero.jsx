// import React, { use } from "react";
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// const Hero = () => {
// const {user} = useSelector((state) => state.auth);

//   const [menuOpen, setMenuOpen] = React.useState(false);

//   const logos = [
//     "https://saasly.prebuiltui.com/assets/companies-logo/instagram.svg",
//     "https://saasly.prebuiltui.com/assets/companies-logo/framer.svg",
//     "https://saasly.prebuiltui.com/assets/companies-logo/microsoft.svg",
//     "https://saasly.prebuiltui.com/assets/companies-logo/huawei.svg",
//     "https://saasly.prebuiltui.com/assets/companies-logo/walmart.svg",
//   ];
//   return (
//     <>
//       <div className="min-h-screen pb-20">
//         {/* Navbar */}
//         <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-40 text-sm">
//           <a href="https://prebuiltui.com">
//             <img src="/logo.svg" alt="logo" className="h-11 w-auto" />
//           </a>

//           <div className="hidden md:flex items-center gap-8 transition duration-500 text-slate-800">
//             <a href="#" className="hover:text-green-600 transition">
//               Home
//             </a>
//             <a href="#features" className="hover:text-green-600 transition">
//               Features
//             </a>
//             <a href="#testimonials" className="hover:text-green-600 transition">
//               Testimonials
//             </a>
//             <a href="#cta" className="hover:text-green-600 transition">
//               Contact
//             </a>
//           </div>

//           <div className="flex gap-2">
//             <Link
//               to="/app?state=register"
//               className="hidden md:block px-6 py-2 bg-green-500 hover:bg-green-700 active:scale-95 transition-all rounded-full text-white" hidden={user}
//             >
//               Get started
//             </Link>
//             <Link
//               to="/app?state=login"
//               className="hidden md:block px-6 py-2 border active:scale-95 hover:bg-slate-50 transition-all rounded-full text-slate-700 hover:text-slate-900" hidden={user}
//             >
//               Login
//             </Link>
//             <Link to='/app' className="hidden md:block px-8 py-2 bg-green-500 hover:bg-green-700 active:scale-95 transition-all rounded-full text-white" hidden={!user}>
//             Dashboard
//             </Link>
//           </div>

//           <button
//             onClick={() => setMenuOpen(true)}
//             className="md:hidden active:scale-90 transition"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="26"
//               height="26"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               className="lucide lucide-menu"
//             >
//               <path d="M4 5h16M4 12h16M4 19h16" />
//             </svg>
//           </button>
//         </nav>

//         {/* Mobile Menu */}
//         <div
//           className={`fixed inset-0 z-[100] bg-black/40 text-black backdrop-blur flex flex-col items-center justify-center text-lg gap-8 md:hidden transition-transform duration-300 ${
//             menuOpen ? "translate-x-0" : "-translate-x-full"
//           }`}
//         >
//           <a href="#" className="text-white">
//             Home
//           </a>
//           <a href="#features" className="text-white">
//             Features
//           </a>
//           <a href="#testimonials" className="text-white">
//             Testimonials
//           </a>
//           <a href="#cta" className="text-white">
//             Contact
//           </a>
//           <button
//             onClick={() => setMenuOpen(false)}
//             className="active:ring-3 active:ring-white aspect-square size-10 p-1 items-center justify-center bg-green-600 hover:bg-green-700 transition text-white rounded-md flex"
//           >
//             X
//           </button>
//         </div>

//         {/* Hero Section */}
//         <div className="relative flex flex-col items-center justify-center text-sm px-4 md:px-16 lg:px-24 xl:px-40 text-black">
//           <div className="absolute top-28 xl:top-10 -z-10 left-1/4 size-72 sm:size-96 xl:size-120 2xl:size-132 bg-green-300 blur-[100px] opacity-30"></div>

//           {/* Avatars + Stars */}
//           <div className="flex items-center mt-24">
//             <div className="flex -space-x-3 pr-3">
//               <img
//                 src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
//                 alt="user3"
//                 className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[1]"
//               />
//               <img
//                 src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200"
//                 alt="user1"
//                 className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-2"
//               />
//               <img
//                 src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200"
//                 alt="user2"
//                 className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[3]"
//               />
//               <img
//                 src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200"
//                 alt="user3"
//                 className="size-8 object-cover rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[4]"
//               />
//               <img
//                 src="https://randomuser.me/api/portraits/men/75.jpg"
//                 alt="user5"
//                 className="size-8 rounded-full border-2 border-white hover:-translate-y-0.5 transition z-[5]"
//               />
//             </div>

//             <div>
//               <div className="flex ">
//                 {Array(5)
//                   .fill(0)
//                   .map((_, i) => (
//                     <svg
//                       key={i}
//                       xmlns="http://www.w3.org/2000/svg"
//                       width="16"
//                       height="16"
//                       viewBox="0 0 24 24"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       className="lucide lucide-star text-transparent fill-green-600"
//                       aria-hidden="true"
//                     >
//                       <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
//                     </svg>
//                   ))}
//               </div>
//               <p className="text-sm text-gray-700">Used by 10,000+ users</p>
//             </div>
//           </div>

//           {/* Headline + CTA */}
//           <h1 className="text-5xl md:text-6xl font-semibold max-w-5xl text-center mt-4 md:leading-[70px]">
//             Land your dream job with{" "}
//             <span className=" bg-gradient-to-r from-green-700 to-green-600 bg-clip-text text-transparent text-nowrap">
//               AI-powered
//             </span>{" "}
//             resumes.
//           </h1>

//           <p className="max-w-md text-center text-base my-7">
//             Create, edit and download professional resumes with AI-powered
//             assistance.
//           </p>

//           {/* CTA Buttons */}
//           <div className="flex items-center gap-4 ">
//             <Link
//               to="/app"
//               className="bg-green-500 hover:bg-green-600 text-white rounded-full px-9 h-12 m-1 ring-offset-2 ring-1 ring-green-400 flex items-center transition-colors"
//             >
//               Get started
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 viewBox="0 0 24 24"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 className="lucide lucide-arrow-right ml-1 size-4"
//                 aria-hidden="true"
//               >
//                 <path d="M5 12h14"></path>
//                 <path d="m12 5 7 7-7 7"></path>
//               </svg>
//             </Link>
          
//           </div>

//           <p className="py-6 text-slate-600 mt-14">
//             Trusting by leading brands, including
//           </p>

//           <div
//             className="flex flex-wrap justify-between max-sm:justify-center gap-6 max-w-3xl w-full mx-auto py-4"
//             id="logo-container"
//           >
//             {logos.map((logo, index) => (
//               <img
//                 key={index}
//                 src={logo}
//                 alt="logo"
//                 className="h-6 w-auto max-w-xs"
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//       <style>
//         {`
//                     @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

//                     * {
//                         font-family: 'Poppins', sans-serif;
//                     }
//                 `}
//       </style>
//     </>
//   );
// };

// export default Hero;











import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Hero = () => {
  const { user } = useSelector((state) => state.auth);
  const [menuOpen, setMenuOpen] = useState(false);

  const logos = [
    "https://saasly.prebuiltui.com/assets/companies-logo/instagram.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/framer.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/microsoft.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/huawei.svg",
    "https://saasly.prebuiltui.com/assets/companies-logo/walmart.svg",
  ];

  const navLinks = ["Home", "Features", "Testimonials", "Contact"];

  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-b from-green-50 via-white to-green-100 overflow-hidden">
        {/* Navbar */}
        <nav className="w-full z-50 py-6 px-6 md:px-16 lg:px-24 xl:px-40 flex items-center justify-between bg-white rounded-2xl shadow-lg mt-2">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img className="h-11 w-auto" src="/logo.svg" alt="logo" />
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-10 font-medium text-gray-700">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group transition-all hover:text-green-600"
              >
                {item}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-green-500 group-hover:w-full transition-all duration-300 rounded-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex gap-4">
            <Link
              to="/app?state=register"
              className="px-6 py-2 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all transform" hidden={user}
            >
              Get Started
            </Link>
            <Link
              to="/app?state=login"
              className="px-6 py-2 border border-green-500 text-green-700 rounded-full hover:bg-green-50 hover:scale-105 transition-all transform" hidden={user}
            >
              Login
            </Link>
            <Link to='/app' className="hidden md:block px-8 py-2 bg-green-500 hover:bg-green-700 active:scale-95 transition-all rounded-full text-white" hidden={!user}>
            Dashboard</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden p-2 rounded-md hover:bg-green-100 transition-all"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="lucide lucide-menu"
            >
              <path d="M4 5h16M4 12h16M4 19h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-[100] bg-black/60 backdrop-blur-md flex flex-col items-center justify-center text-lg gap-8 md:hidden transform transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {navLinks.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-white text-xl hover:text-green-300 transition"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button
            onClick={() => setMenuOpen(false)}
            className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md transition"
          >
            Close
          </button>
        </div>

        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center text-gray-800 mt-16 md:mt-20 px-4">
          {/* Glowing Background Circles */}
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-green-300 opacity-30 blur-[100px] rounded-full -z-10 animate-pulse"></div>
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-green-400 opacity-20 blur-[120px] rounded-full -z-10 animate-pulse"></div>

          {/* Avatars + Ratings */}
          <div className="flex items-center mt-8">
            <div className="flex -space-x-3 pr-3">
              {[
                "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
                "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
                "https://randomuser.me/api/portraits/women/68.jpg",
                "https://randomuser.me/api/portraits/men/75.jpg",
              ].map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="user"
                  className="w-10 h-10 object-cover rounded-full border-2 border-white hover:-translate-y-1 transition"
                />
              ))}
            </div>

            <div className="ml-4">
              <div className="flex justify-center">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-star text-transparent fill-green-600"
                    >
                      <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                    </svg>
                  ))}
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Loved by 10,000+ users
              </p>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold max-w-4xl mt-6 leading-tight">
            Build Your <span className="text-green-600">AI-Powered</span> Resume
            & Get Hired Faster 🚀
          </h1>

          {/* Description */}
          <p className="max-w-lg text-gray-600 mt-5 mb-8 text-base">
            Create, customize, and download professional resumes with real-time
            AI guidance — your dream job is just a click away.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/app"
              className="bg-green-600 hover:bg-green-700 text-white rounded-full px-9 h-12 flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
            >
              Get Started
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="lucide lucide-arrow-right"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </Link>

            <button className="flex items-center gap-2 border border-green-600 hover:bg-green-50 transition rounded-full px-8 h-12 text-green-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="lucide lucide-play"
              >
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
              Try Demo
            </button>
          </div>

          {/* Logos */}
          <p className="py-6 text-gray-500 mt-10 text-sm">
            Trusted by leading brands
          </p>
          <div className="flex flex-wrap justify-center gap-6 max-w-3xl mx-auto mt-6">
            {logos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt="logo"
                className="h-6 w-auto grayscale hover:grayscale-0 transition transform hover:-translate-y-1 hover:scale-130 shadow-md shadow-green-100 mb-4"
              />
            ))}
          </div>
        </section>
      </div>

      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
          *import { User } from 'lucide-react';
 { font-famimport { useSelector } from 'react-redux';
ily: 'Poppiimport { useSelector } from 'react-redux';
ns', sans-serif; }
        `}
      </style>
    </>
  );
};

export default Hero;
