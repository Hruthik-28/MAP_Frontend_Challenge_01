import { MountainIcon } from "lucide-react";

function Navbar() {
    return (
        <>
            <header className="sticky top-0 z-50 w-full text-black shadow-sm bg-gradient-to-r from-fuchsia-500 to-cyan-500">
                <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
                    <div className="flex items-center">
                        <MountainIcon className="h-6 w-6 text-gray-900" />
                        <span className="ml-2 text-lg font-medium text-gray-900">
                            JustWatchIt
                        </span>
                    </div>
                    <nav className="hidden space-x-6 md:flex">
                        <div className="hover:text-gray-900">Movie</div>
                        <div className="hover:text-gray-900">Shows</div>
                        <div className="hover:text-gray-900">Stream</div>
                        <div className="hover:text-gray-900">Sports</div>
                    </nav>
                    <button className="hidden md:inline-flex bg-gradient-to-r from-fuchsia-500 to-pink-500 rounded-md p-2 font-semibold  hover:opacity-90">
                        Dont Click
                    </button>
                </div>
            </header>
        </>
    );
}

export default Navbar;
