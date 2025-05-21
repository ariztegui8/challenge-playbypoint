import { StarIcon } from "lucide-react";
import { useFavorites } from "@/hooks/useFavorites";

const Favorites = () => {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div className="p-3">
      <div className="max-w-4xl mx-auto">
      {favorites.length === 0 ? (
        <p className="text-gray-500 text-xl md:text-2xl font-semibold text-center">No tienes equipos favoritos aún.</p>
      ) : (
        <div>
          <div className="py-6">
            <h2 className="text-xl md:text-2xl font-semibold text-center">Equipos favoritos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {favorites.map((team) => (
              <div key={team.id} className="shadow-md border border-gray-100 p-4 rounded-md flex gap-3">
                <div className="min-w-14 min-h-14 flex items-center justify-center">
                  <img src={team.badge} alt={team.name} className="w-14 h-14" />
                </div>
                <div className="flex flex-col gap-1 w-full">
                  <p className="font-semibold">{team.name}</p>
                  <p className="text-xs text-gray-500">{team.description}</p>
                  <div className="flex justify-end w-full">
                    <StarIcon
                      className="w-6 h-6 cursor-pointer stroke-1 text-yellow-500 fill-yellow-500"
                      onClick={() => removeFavorite(team.id)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      </div>
    </div>
  );
};

export default Favorites;