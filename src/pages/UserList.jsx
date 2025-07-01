
import Users from '../components/Users'
import { useEventContext } from "../trigger/EventContext";

const UserList = () => {

  const { showUserList } = useEventContext();

  if (!showUserList) return null;


  return (
    <section className="  px-2 border-4 py-2 rounded-t-2xl md:rounded-l-2xl bg-[#202020] border-[#4f4e4e] ">
      <div className="overflow-y-auto  h-[calc(97dvh)]">
        <Users />
      </div>
    </section>
  );
}

export default UserList