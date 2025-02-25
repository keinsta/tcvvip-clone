import { create } from "zustand";

const useUserStore = create((set) => ({
  notifications: 3, // Example count, will be updated dynamically
  language: "English",
  markNotificationsAsRead: () => set({ notifications: 0 }),
  setLanguage: (newLang) => set({ language: newLang }),
}));

export default useUserStore;
