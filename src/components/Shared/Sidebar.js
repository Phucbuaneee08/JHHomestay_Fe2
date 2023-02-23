import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import logo from "../../public/logo.svg";

const sidebarVar = [
  {
    path: "/dashboard/sales",
    title: "Revenue",
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
    title: "Employee",
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
  {
    path: "/dashboard/discount-management",
    title: "Discount",
    icon: <svg fill="none" viewBox="0 0 15 15" height="1em" width="1em" >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M6.448.436l-1.13 1.129a.488.488 0 01-.344.143H3.196c-.822 0-1.488.666-1.488 1.488v1.778c0 .13-.052.253-.143.345L.435 6.448a1.488 1.488 0 000 2.104l1.13 1.13a.488.488 0 01.143.344v1.778c0 .822.666 1.488 1.488 1.488h1.778c.13 0 .253.052.345.143l1.129 1.13a1.488 1.488 0 002.104 0l1.13-1.13a.488.488 0 01.344-.143h1.778c.822 0 1.488-.666 1.488-1.488v-1.778c0-.13.052-.253.143-.345l1.13-1.129a1.488 1.488 0 000-2.104l-1.13-1.13a.488.488 0 01-.143-.344V3.196c0-.822-.666-1.488-1.488-1.488h-1.778a.488.488 0 01-.345-.143L8.552.435a1.488 1.488 0 00-2.104 0zm-1.802 9.21l5-5 .708.708-5 5-.708-.708zM5 5v1h1V5H5zm4 5h1V9H9v1z"
                  clipRule="evenodd"
                />
              </svg>,
    authorize: "admin",
  },
];

function Sidebar() {
  const { role } = useSelector((state) => state.authReducer);

  let location = useLocation();
  const sidebarList = sidebarVar.map((item) => {
    if (item.authorize === "all" || (item.authorize === role))
      if (location.pathname === item.path)
        return (
          <li style={{border: '6px solid rgba(0, 0, 0, 0.05)'}} className="flex items-center mx-12 my-5 md:text-xl text-auto cursor-pointer text-gray-600 transform hover:scale-125 hover:text-green-700" >
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
