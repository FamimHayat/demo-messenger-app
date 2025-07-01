import { createContext, useContext, useState } from "react";

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [showUserList, setShowUserList] = useState(false);

  const toggleUserList = () => {
    setShowUserList((prev) => !prev);
  };

  return (
    <EventContext.Provider value={{ showUserList, toggleUserList }}>
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = () => useContext(EventContext);
