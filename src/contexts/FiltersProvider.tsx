import { useState, type ReactNode } from "react";
import type { TeamType } from "../types/types";
import { FiltersContext, type SortField } from "./FiltersContext";

export const FiltersProvider = ({ children }: { children: ReactNode }) => {

  const [sortField, setSortField] = useState<SortField>("points");
  const [searchQuery, setSearchQuery] = useState("");

  const getSortFilteredTeam = (teams: TeamType[]) => {
    const filteredTeams = teams.filter((team) =>
      team.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return [...filteredTeams].sort((a, b) => {
      return (b[sortField] as number) - (a[sortField] as number);
    });
  };

  return (
    <FiltersContext.Provider
      value={{
        sortField,
        searchQuery,
        setSortField,
        setSearchQuery,
        getSortFilteredTeam,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}; 