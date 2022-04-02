import React, { createContext, useState } from 'react';
import localData from '../data.json';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(localData.currentUser);

  return (
    <UserContext.Provider value={[currentUser, setCurrentUser]}>{children}</UserContext.Provider>
  );
}
