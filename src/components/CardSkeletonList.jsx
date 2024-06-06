import CardSkeleton from "./CardSkeleton";

function CardSkeletonList() {
    const number = 6;

    return (
        <>
            <div className="flex gap-4 overflow-x-scroll">
                {Array.from({ length: number }).map((_, index) => (
                    <CardSkeleton key={index} />
                ))}
            </div>
        </>
    );
}

export default CardSkeletonList;
