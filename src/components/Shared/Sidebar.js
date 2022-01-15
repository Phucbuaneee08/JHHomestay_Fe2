import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import logo from "../../public/logo.svg";

const sidebarVar = [
  {
    path: "/dashboard/sales",
    title: "Sales",
    icon: <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>,
    authorize: "all",
  },
  {
    path: "/dashboard/reservation-management",
    title: "Reservation",
    icon: <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
      />
    </svg>,
    authorize: "admin",
  },
  {
    path: "/dashboard/homestay-management",
    title: "Homestay",
    icon: <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
      />
    </svg>,
    authorize: "all",
  },
  {
    path: "/dashboard/user-management",
    title: "User",
    icon: <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>,
    authorize: "super_admin",
  },
];

function Sidebar() {
  const { role } = useSelector((state) => state.authReducer);

  let location = useLocation();
  const sidebarList = sidebarVar.map((item) => {
    if (item.authorize === "all" || (item.authorize === role))
      if (location.pathname === item.path)
        return (
          <li className="flex items-center mx-12 my-5 md:text-xl text-auto cursor-pointer text-gray-600 transform hover:scale-125 hover:text-green-700" >
            {item.icon}
            <Link
              to={item.path}
              className="ml-2 text-green-600 font-bold md:text-2xl text-auto"
            >
              {item.title}
            </Link>
          </li>
        );
      // có focus
      else
        return (
          <li className="flex items-center mx-12 my-5 md:text-xl text-auto cursor-pointer text-gray-600 transform hover:scale-125 hover:text-green-700">
            {item.icon}
            <Link to={item.path} className="ml-2">
              {item.title}
            </Link>
          </li>
        ); // không focus
  });

  const sidebarClass =
    "flex items-center mx-12 my-5 md:text-xl text-auto cursor-pointer text-gray-600 transform hover:scale-125 hover:text-green-700";
  return (
    <div className="w-full h-full flex flex-no-wrap">
      {/* Sidebar starts */}
      <div className="absolute lg:relative w-full h-screen shadow bg-gray-100 flex flex-col lg:block">
        <div>
          <img className="mx-auto mt-5 h-24 w-auto" src={logo} alt="Logo" />
        </div>
        <ul className="py-6" aria-orientation="vertical">
          {sidebarList}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
