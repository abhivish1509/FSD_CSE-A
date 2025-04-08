// import { Link } from "react-router-dom";
// import React from "react";

// function Home() {
//   return (
//     <div>
//       <h1>Welcome to the App</h1>
//       <nav>
//         <ul>
//           <li><Link to="/login">Login</Link></li>
//           <li><Link to="/registration">Registration</Link></li>
//           <li><Link to="/dashboard">Dashboard</Link></li>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default Home;

import { Link, Outlet } from "react-router-dom";
import React from "react";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-500">
      <nav className="flex justify-end p-4">
        <ul className="flex space-x-6 text-white font-semibold text-lg bg-white/20 backdrop-blur-md px-6 py-2 rounded-full shadow-md border border-white/30">
          <li>
            <Link to="/login" className="hover:text-gray-200 transition-all">
              Login
            </Link>
          </li>
          <li>
            <Link to="/registration" className="hover:text-gray-200 transition-all">
              Registration
            </Link>
          </li>
          <li>
            <Link to="/dashboard" className="hover:text-gray-200 transition-all">
              Dashboard
            </Link>
          </li>
        </ul>
      </nav>

      {/* <div className="flex justify-center items-center mt-10">
        <div className="w-full max-w-2xl bg-white/20 backdrop-blur-lg shadow-xl rounded-xl p-6 border border-white/30">
          <Outlet />
        </div>
      </div> */}
    </div>
  );
}

export default Home;


