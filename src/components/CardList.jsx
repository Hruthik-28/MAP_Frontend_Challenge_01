import Card from "./Card";
import data from "../data/cardInfo.json";
import { useState } from "react";
import { Grid2x2, ListIcon } from "lucide-react";
import CardSkeletonList from "./CardSkeletonList";

function CardList() {
    const [displayHorizontal, setDisplayHorizontal] = useState(true);
    const [movieData, setMovieData] = useState([]);
    const [loading, setLoading] = useState(true);

    const handleDisplayType = () => setDisplayHorizontal((prev) => !prev);

    setTimeout(() => {
        setMovieData(data);
        setLoading(false);
    }, 2500);

    return (
        <>
            <div className="flex justify-end items-center gap-1 text-white mb-2 cursor-pointer hover:text-orange-500">
                {displayHorizontal ? (
                    <>
                        <Grid2x2 onClick={handleDisplayType} />
                    </>
                ) : (
                    <ListIcon onClick={handleDisplayType} />
                )}
            </div>
            {displayHorizontal ? (
                <div className="flex gap-4 overflow-x-scroll">
                    {movieData.map((item) => (
                        <Card
                            key={item.id}
                            {...item}
                        />
                    ))}
                </div>
            ) : (
                <div className="flex justify-center items-center">
                    <div className="grid gap-4 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
                        {movieData.map((item) => (
                            <Card
                                key={item.id}
                                {...item}
                            />
                        ))}
                    </div>
                </div>
            )}

            {loading && <CardSkeletonList />}
        </>
    );
}

export default CardList;
