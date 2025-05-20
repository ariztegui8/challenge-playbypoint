import { Link } from "react-router-dom";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "../ui/button";
import logo from "@/assets/logo.png";


const Navbar = () => {

    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-liga-primary p-3">
            <div className="flex justify-between items-center">
                <Link to="/">
                    <img src={logo} alt="logo" className="w-25 h-12" />
                </Link>

                {/* Mobile */}
                <div className="md:hidden">
                    <Sheet open={open} onOpenChange={setOpen}>
                        <SheetTrigger>
                            <Menu className="w-7 h-7 text-white cursor-pointer" />
                        </SheetTrigger>
                        <SheetContent side="left" className="bg-liga-primary text-white">
                            <div className="flex flex-col gap-2 mt-10 p-4">
                                <Link to="/" onClick={() => setOpen(false)} className="hover:underline">Tabla</Link>
                                <Link to="/favoritos" onClick={() => setOpen(false)} className="hover:underline">Favoritos</Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>

                {/* Desktop*/}
                <div className="hidden md:flex items-center gap-4">
                    <Link to="/">
                        <Button className="bg-liga-secondary text-white hover:bg-liga-secondary cursor-pointer">
                            Tabla
                        </Button>
                    </Link>
                    <Link to="/favoritos">
                        <Button className="bg-liga-secondary text-white hover:bg-liga-secondary cursor-pointer">
                            Favoritos
                        </Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
