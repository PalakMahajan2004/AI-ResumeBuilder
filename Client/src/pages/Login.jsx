// import { User2Icon, Mail, Lock } from "lucide-react";
// import React from "react";
// import { useDispatch } from "react-redux";
// import { login } from "../app/features/authSlice";
// import toast from "react-hot-toast";
// import api from "../configs/api.js";

// const Login = () => {
//   const dispatch = useDispatch()
//   const query = new URLSearchParams(window.location.search);
//   const urlstate = query.get("state");
//   const [state, setState] = React.useState(urlstate ||"login");

//   const [formData, setFormData] = React.useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const { data } = await api.post(`/api/users/${state}`, formData);
//       // dispatch expects { user, token }
//       dispatch(login({ user: data.user, token: data.token }));
//       localStorage.setItem("token", data.token);
//       toast.success(data.message);
//     } catch (error) {
//       // axios network errors have no response
//       if (!error.response) {
//         console.error("Network or CORS error:", error);
//         toast.error("Network error: could not reach the server. Is the backend running?");
//       } else {
//         console.error("Server error:", error.response);
//         toast.error(error.response?.data?.message || error.message);
//       }
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50">
//       <form
//         onSubmit={handleSubmit}
//         className="sm:w-[350px] w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white"
//       >
//         <h1 className="text-gray-900 text-3xl mt-10 font-medium">
//           {state === "login" ? "Login" : "Sign up"}
//         </h1>
//         <p className="text-gray-500 text-sm mt-2">Please {state} to continue</p>
//         {state !== "login" && (
//           <div className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
//             <User2Icon size={16} color="#6B7280" />
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               className="border-none outline-none ring-0"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         )}
//         <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
//           <Mail size={13} color="#6B7280" />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email id"
//             className="border-none outline-none ring-0"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
//           <Lock size={13} color="#6B7280" />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             className="border-none outline-none ring-0"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>
        
//         <button
//           type="submit"
//           className="mt-2 w-full h-11 rounded-full text-white bg-green-500 hover:opacity-90 transition-opacity"
//         >
//           {state === "login" ? "Login" : "Sign up"}
//         </button>
//         <p
//           onClick={() =>
//             setState((prev) => (prev === "login" ? "register" : "login"))
//           }
//           className="text-gray-500 text-sm mt-3 mb-11"
//         >
//           {state === "login"
//             ? "Don't have an account?"
//             : "Already have an account?"}{" "}
//           <a href="#" className="text-green-500 hover:underline">
//             click here
//           </a>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;







import React from "react";
import { Lock, Mail, User2Icon } from "lucide-react";
import { useDispatch } from "react-redux";
import { login } from "../app/features/authSlice";
import toast from "react-hot-toast";
import api from "../configs/api";

const Login = () => {

  const dispatch= useDispatch();
  const query = new URLSearchParams(window.location.search);
  const urlState = query.get("state");

  const [state, setState] = React.useState(urlState || "login");
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const {data}= await api.post(`/api/users/${state}`,formData)
      dispatch(login(data))
      localStorage.setItem('token', data.token)
      toast.success(data.message)
    } catch (error) {
      toast(error?.response?.data?.message || error.message)
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-green-100 via-teal-50 to-white">
      <div className="w-full sm:w-[400px] p-8 backdrop-blur-xl bg-white/60 border border-gray-200 rounded-2xl shadow-lg text-center transition-all duration-500 hover:scale-[1.02]">
        <h1 className="text-gray-800 text-3xl font-semibold">
          {state === "login" ? "Welcome Back!" : "Create Account"}
        </h1>
        <p className="text-gray-500 text-sm mt-2">
          Please {state === "login" ? "login" : "sign up"} to continue
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-5">
          {state !== "login" && (
            <div className="flex items-center bg-white border border-gray-300 h-12 rounded-full overflow-hidden pl-5 shadow-sm">
              <User2Icon size={18} color="#4B5563" />
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="ml-2 w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          )}

          <div className="flex items-center bg-white border border-gray-300 h-12 rounded-full overflow-hidden pl-5 shadow-sm">
            <Mail size={16} color="#4B5563" />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="ml-2 w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="flex items-center bg-white border border-gray-300 h-12 rounded-full overflow-hidden pl-5 shadow-sm">
            <Lock size={16} color="#4B5563" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="ml-2 w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-400"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div className="text-right">
            <button
              className="text-sm text-green-600 hover:text-green-700 transition-colors"
              type="reset"
            >
              Forgot password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full h-12 bg-green-500 text-white font-semibold rounded-full shadow-md hover:bg-green-600 active:scale-95 transition-transform-200 duration-200"
          >
            {state === "login" ? "Login" : "Sign Up"}
          </button>
        </form>

        <p
          onClick={() =>
            setState((prev) => (prev === "login" ? "register" : "login"))
          }
          className="text-gray-600 text-sm mt-6 cursor-pointer"
        >
          {state === "login"
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <span className="text-green-600 font-semibold underline hover:text-green-700 transition-colors">
            Click here
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login

