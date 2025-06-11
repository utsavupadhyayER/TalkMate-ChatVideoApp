import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("TalkMate-theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("TalkMate-theme", theme);
    set({ theme });
  },
}));