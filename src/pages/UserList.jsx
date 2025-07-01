
import { FaLeftLong } from "react-icons/fa6";
import Users from "../components/Users";
import { useEventContext } from "../trigger/EventContext";
import { useNavigate } from "react-router";

const UserList = () => {
  const { showUserList, hideUserListPage } = useEventContext();
  const navigate = useNavigate();

  if (!showUserList) return null;

  const handleBack = () => {
    console.log("clicked");
    
    hideUserListPage(); // hide user list in context
    navigate("/"); // navigate home or whatever route you want
  };

  return (
    <section className="px-2 border-4 py-2 rounded-t-2xl md:rounded-l-2xl bg-[#202020] border-[#4f4e4e]">
      <button onClick={handleBack} className="cursor-pointer flex items-center text-white text-xl w-full justify-center  mb-2 py-2 bg-red-500">
         <FaLeftLong className="mr-2 text-sm" /> back
      </button>
      <div className=" flex flex-col gap-1 overflow-y-auto h-[calc(97dvh)]">
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
        <Users />
      </div>
    </section>
  );
};

export default UserList;