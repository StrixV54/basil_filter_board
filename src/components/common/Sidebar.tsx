import { useLocation } from "react-router-dom";
import { sidebarConfig } from "../../constants/sidebarData";
import { logo } from "../../assets/sidebar";

function Sidebar() {
  const location = useLocation();
  const routeConfig = sidebarConfig.slice(0, 5);
  const settingConfig = sidebarConfig.slice(6);

  console.log("location", location.pathname);
  return (
    <div className="w-20 bg-white px-2 py-4 flex flex-col items-center shadow-[1px_1px_10px_5px_rgb(0,0,0,0.06)] border-gray-200">
      <img src={logo} className="w-8 h-8" alt="logo" />
      <div className="mt-10 flex flex-col items-center ">
        {routeConfig.map((item, index) => (
          <div
            key={index}
            className={`text-white w-10 h-10 rounded-md cursor-pointer my-2 ${
              location.pathname.startsWith(item.link) ? "bg-[#377dff]" : ""
            } hover:bg-blue-300`}
          >
            <img
              src={item.icon}
              className={`p-1 rounded-md m-auto mt-[4px] ${
                location.pathname.startsWith(item.link) ? "filter invert" : ""
              }`}
              alt="icon"
            />
          </div>
        ))}
        <div className="mt-8">
          {settingConfig.map((item, index) => (
            <div
              key={index}
              className={`text-white w-10 h-10 rounded-md cursor-pointer my-2 ${
                item.link === location.pathname ? "bg-[#377dff]" : ""
              } hover:bg-blue-100`}
            >
              <img
                src={item.icon}
                className={`p-1 rounded-md mt-[4px] ml-1`}
                alt="icon"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
