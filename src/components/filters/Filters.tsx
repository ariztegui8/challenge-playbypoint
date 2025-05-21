import { useFilters } from "../../hooks/useFilters";
import { Input } from "../ui/input";
import { Badge } from "../ui/badge";
import type { ChangeEvent } from "react";

const Filters = () => {
    const {
        sortField,
        searchQuery,
        setSortField,
        setSearchQuery,
    } = useFilters();

    const handleSort = (field: typeof sortField) => {
        setSortField(field);
    };

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center py-4">
            <div className="flex items-center gap-2">
                <Input
                    type="text"
                    placeholder="Buscar equipo..."
                    value={searchQuery}
                    onChange={handleSearch}
                    className="max-w-sm h-7"

                />
            </div>

            <div className="flex gap-2">
                <Badge
                    variant={sortField === "points" ? "default" : "outline"}
                    onClick={() => handleSort("points")}
                    className="cursor-pointer"
                >
                    Puntos
                </Badge>

                <Badge
                    variant={sortField === "wins" ? "default" : "outline"}
                    onClick={() => handleSort("wins")}
                    className="cursor-pointer"
                >
                    Ganados
                </Badge>

                <Badge
                    variant={sortField === "losses" ? "default" : "outline"}
                    onClick={() => handleSort("losses")}
                    className="cursor-pointer"
                >
                    Perdidos
                </Badge>
            </div>
        </div>
    );
};

export default Filters;