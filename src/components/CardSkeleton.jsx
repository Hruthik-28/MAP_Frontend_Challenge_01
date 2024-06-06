
function CardSkeleton() {
    return (
        <div className="w-full relative max-w-[300px] h-[375px] flex-none rounded-lg shadow-lg shadow-gray-800">
            <div className="h-3/4 w-full bg-gray-900 animate-pulse"></div>
            <div className="h-1/4 p-4 flex gap-2">
                <div className="w-3/4 space-y-3">
                    <div className="w-full h-4 animate-pulse rounded-md bg-gray-600"></div>
                    <div className="w-full h-8 animate-pulse rounded-md bg-gray-600"></div>
                </div>
                <div className="w-1/4 h-full animate-pulse rounded-md bg-gray-600"></div>

                {/* tag */}
                <div className="absolute top-4 right-4 h-5 w-20 bg-gray-600 rounded-lg animate-pulse"></div>
            </div>
        </div>
    );
}

export default CardSkeleton;
