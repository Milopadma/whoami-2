import create from "zustand";

type HoverStore = {
  hoveredCard: string | null;
  setHoveredCard: (id: string | null) => void;
};

export const useHoverStore = create<HoverStore>((set) => ({
  hoveredCard: null,
  setHoveredCard: (id) => set({ hoveredCard: id }),
}));
