import { Calendar, HeartIcon, StarIcon, ThumbsUpIcon } from "lucide-react";

function Card({ image, tag, title, description, rating, likes, releaseDate }) {
    return (
        <>
            <div className="group relative flex-none overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out w-full max-w-[300px]">
                <div className="relative overflow-hidden rounded-lg">
                    <img
                        src={image}
                        alt="Card Image"
                        width={300}
                        height={375}
                        className="object-cover w-full scale-100 group-hover:scale-125 transition-transform duration-300 ease-in-out"
                    />
                    <div className="absolute" />
                    {tag && (
                        <div className="absolute top-4 right-4 inline-flex items-center gap-2 rounded-full bg-gray-800 text-white px-3 py-1 text-xs font-medium bg-gradient-to-r from-red-500 to-orange-500">
                            {tag}
                        </div>
                    )}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white group-hover:-translate-y-14 transition-transform duration-300 bg-gradient-to-t from-black/60 to-transparent ">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="sm:text-2xl text-xl font-bold ">{title}</h3>
                            <p className="text-sm text-gray-300">
                                {description}
                            </p>
                        </div>
                        <div>
                            <HeartIcon className="w-5 h-5 hover:fill-red-500 cursor-pointer" />
                        </div>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <div className="flex items-center gap-1 text-sm">
                                <StarIcon className="w-4 h-4 fill-yellow-400" />
                                <span>{rating}</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm">
                                <ThumbsUpIcon className="w-4 h-4 fill-green-500" />
                                <span>{likes}</span>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 text-xs">
                            <Calendar className="w-4 h-4" />
                            <span>{releaseDate}</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
