import { create } from "zustand";

const useAuthStore = create((set) => ({
  isAuthenticated: !!localStorage.getItem("authToken"),
  login: (token) => {
    localStorage.setItem("authToken", token);
    set({ isAuthenticated: true }); // Update Zustand state immediately
  },
  logout: () => {
    localStorage.removeItem("authToken");
    set({ isAuthenticated: false }); // Update Zustand state immediately
  },
}));

export default useAuthStore;
