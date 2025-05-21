import { createContext } from "react";
import type { TeamType } from "../types/types";

export type FavoritesContextType = {
  favorites: TeamType[];
  addFavorite: (team: TeamType) => void;
  removeFavorite: (id: string | number) => void;
};

export const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);