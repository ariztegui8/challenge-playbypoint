import { useState, useEffect, type ReactNode } from "react";
import type { TeamType } from "../../types/types";
import { FavoritesContext } from "./FavoritesContext";

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  
  const [favorites, setFavorites] = useState<TeamType[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("favoriteTeams");
    if (stored) setFavorites(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem("favoriteTeams", JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (team: TeamType) => {
    setFavorites((prev) =>
      prev.some((t) => t.id === team.id) ? prev : [...prev, team]
    );
  };

  const removeFavorite = (id: string | number) => {
    setFavorites((prev) => prev.filter((t) => String(t.id) !== String(id)));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};