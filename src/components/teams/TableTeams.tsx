import useFetch from "../../hooks/useFetch";
import type { TeamType } from "../../types/types";
import {
    Table,
    TableHeader,
    TableBody,
    TableHead,
    TableRow,
} from "../ui/table";
import Team from "./Team";
import { useFilters } from "../../hooks/useFilters";

const TableTeams = () => {
    
    const { data, loading, error } = useFetch<TeamType[]>("http://localhost:3001/teams");
    const { getSortFilteredTeam } = useFilters();

    if (loading) return <p>Cargando equipos...</p>;
    if (error) return <p>Error al cargar: {error.message}</p>;
    if (!data) return null;

    const sortFilteredTeam = getSortFilteredTeam(data);

    return (
        <Table className="border border-gray-200 rounded-md">
            <TableHeader>
                <TableRow>
                    <TableHead>Posición</TableHead>
                    <TableHead>Equipo</TableHead>
                    <TableHead>Puntos</TableHead>
                    <TableHead>G</TableHead>
                    <TableHead>E</TableHead>
                    <TableHead>P</TableHead>
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {sortFilteredTeam.map((team, index) => (
                    <Team
                        key={team.id}
                        team={team}
                        index={index}
                    />
                ))}
            </TableBody>
        </Table>
    );
};

export default TableTeams;