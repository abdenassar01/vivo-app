import { create } from "zustand";
import { storeIsAuthenticatd } from "../utils/token";

type State = {
  isAuthenticated: boolean | null;
};

type Action = {
  setIsAuthenticated: (value: boolean) => void;
};

export const useAuthStore = create<State & Action>((set) => ({
  isAuthenticated: false,
  setIsAuthenticated: (value) =>
    set((state) => {
      storeIsAuthenticatd(value);
      state.isAuthenticated = value;
      return { isAuthenticated: value };
    }),
}));
