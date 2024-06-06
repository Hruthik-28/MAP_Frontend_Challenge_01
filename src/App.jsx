import CardList from "./components/CardList";
import Navbar from "./components/Navbar";

function App() {
    return (
        <>
            <Navbar />
            <div className="p-6 bg-gray-100 min-h-screen bg-gradient-to-r from-gray-700 to-black">
                <h1 className="sm:text-4xl text-2xl font-bold text-center mb-8 bg-gradient-to-r from-pink-500  via-red-500 to-yellow-500 bg-clip-text text-transparent">
                    Book Your Show Now
                </h1>
                <CardList />
            </div>
        </>
    );
}

export default App;
