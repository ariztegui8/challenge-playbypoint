import TableTeams from "@/components/teams/TableTeams"

const Home = () => {


  return (
    <div className="p-3">

      <div className="py-6">
        <h1 className="text-2xl md:text-4xl font-bold text-center">Torneo Apertura Betano 2025</h1>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className="bg-liga-secondary p-2">
          <h2 className="text-xl md:text-2xl font-semibold text-white text-center">Tabla de posiciones</h2>
        </div>
        <TableTeams />
      </div>
    </div>
  )
}

export default Home