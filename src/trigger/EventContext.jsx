import React, { createContext, useContext, useState } from "react";

const EventContext = createContext();

export const EventProvider = ({ children }) => {
  const [showUserList, setShowUserList] = useState(false);

  // Function to show UserList
  const showUserListPage = () => setShowUserList(true);

  // Function to hide UserList
  const hideUserListPage = () => setShowUserList(false);

  const toggleUserList = () => {
    setShowUserList((prev) => !prev);
  };

  return (
    <EventContext.Provider
      value={{ showUserList, showUserListPage, hideUserListPage,toggleUserList}}
    >
      {children}
    </EventContext.Provider>
  );
};

export const useEventContext = () => useContext(EventContext);
