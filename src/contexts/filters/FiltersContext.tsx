import { createContext } from "react";
import type { TeamType } from "../../types/types";

export type SortField = "wins" | "losses" | "points";

export type FiltersContextType = {
  sortField: SortField;
  searchQuery: string;
  setSortField: (field: SortField) => void;
  setSearchQuery: (query: string) => void;
  getSortFilteredTeam: (teams: TeamType[]) => TeamType[];
};

export const FiltersContext = createContext<FiltersContextType | undefined>(undefined); 