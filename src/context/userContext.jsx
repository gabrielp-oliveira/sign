import { createContext, useState } from "react";

export const UserContext = createContext({});

export default function UserProvider({ children }) {
  const [qeryContext, SetQueryContext] = useState({});

  return (
    <UserContext.Provider
      value={{
        qeryContext,
        SetQueryContext
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

