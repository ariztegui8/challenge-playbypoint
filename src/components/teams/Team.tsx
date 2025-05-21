import {
    TableRow,
    TableCell,
} from "../ui/table";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import type { TeamType } from "../../types/types";
import { StarIcon } from "lucide-react";
import { useFavorites } from "@/hooks/useFavorites";

interface TeamProps {
    team: TeamType;
    index: number;
}

const Team = ({ team, index }: TeamProps) => {
    const { favorites, addFavorite, removeFavorite } = useFavorites();

    const isFavorite = favorites.some((favTeam) => favTeam.id === team.id);

    const handleFavorite = () => {
        if (isFavorite) {
            removeFavorite(team.id);
        } else {
            addFavorite(team);
        }
    };

    return (
        <TableRow key={team.id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>
                <div className="flex items-center gap-3">
                    <Popover>
                        <PopoverTrigger asChild>
                            <img src={team.badge} alt={team.name} className="w-7 h-7 transition-all duration-200 cursor-pointer hover:brightness-50" />
                        </PopoverTrigger>
                        <PopoverContent className="p-2">
                            <div className="flex flex-col gap-1">
                                <p className="text-xs text-gray-600">{team.description}</p>
                            </div>
                        </PopoverContent>
                    </Popover>
                    <span className="min-w-[130px]">{team.name}</span>
                </div>
            </TableCell>
            <TableCell>{team.points}</TableCell>
            <TableCell>{team.wins}</TableCell>
            <TableCell>{team.draws}</TableCell>
            <TableCell>{team.losses}</TableCell>
            <TableCell>
                <StarIcon
                    className={`w-6 h-6 cursor-pointer stroke-1 ${isFavorite ? "text-yellow-500 fill-yellow-500" : "text-gray-500 fill-none"}`}
                    onClick={handleFavorite}
                />
            </TableCell>
        </TableRow>
    )
};

export default Team