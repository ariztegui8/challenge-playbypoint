import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import logo from "@/assets/logo.png";
import { useFavorites } from "@/hooks/useFavorites";



const Navbar = () => {
    
    const [open, setOpen] = useState(false);

    const { favorites } = useFavorites();

    return (
        <nav className="bg-liga-primary p-3 sticky top-0 z-50">
            <div className="flex justify-between items-center">
                <Link to="/">
                    <img src={logo} alt="logo" className="w-25 h-12" />
                </Link>

                {/* Mobile */}
                <div className="md:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger className="relative">
                            <Menu className="w-7 h-7 text-white cursor-pointer" />
                            {favorites.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white w-3 h-3 flex items-center justify-center rounded-full text-xs"></span>
                            )}
                        </SheetTrigger>
                        <SheetContent side="left" className="bg-liga-primary text-white">
                            <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
                            <SheetDescription className="sr-only">
                                Menú para navegar entre las secciones de la aplicación.
                            </SheetDescription>
                            <div className="flex flex-col gap-2 mt-10 p-4">
                                <Link to="/" onClick={() => setOpen(false)} className="hover:underline">Tabla</Link>
                                <Link to="/favoritos" onClick={() => setOpen(false)} className="hover:underline relative">
                                    Favoritos
                                    {favorites.length > 0 && (
                                        <span className="absolute top-1 left-20 bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs">
                                            {favorites.length}
                                        </span>
                                    )}
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Desktop*/}
                <div className="hidden md:flex items-center gap-4">
                    <Link to="/">
                        <Button className="bg-liga-secondary text-white hover:bg-liga-secondary cursor-pointer rounded-xs">
                            Tabla
                        </Button>
                    </Link>
                    <Link to="/favoritos" className="relative">
                        <Button className="bg-liga-secondary text-white hover:bg-liga-secondary cursor-pointer rounded-xs">
                            Favoritos
                        </Button>
                        {favorites.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white w-5 h-5 flex items-center justify-center rounded-full text-xs">
                                {favorites.length}
                            </span>
                        )}
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
