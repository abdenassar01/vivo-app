"use client";

import { createContext, ReactNode, useContext, useState, useMemo } from "react";
import { User } from "../../../types/user";

type UserContextType = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

const UserContext = createContext<UserContextType | null>(null);

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={useMemo(() => ({ user, setUser }), [user])}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = (): UserContextType => {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error("useUserAuth must be used within an AuthContextProvider");
  }

  return userContext;
};
