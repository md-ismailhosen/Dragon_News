import React from 'react';
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsCard = ({ news }) => {

    const {
        title,
        author,
        image_url,
        details,
        rating,
        total_view,
        tags,
    } = news;

    return (
        <div className="card bg-base-100 shadow-sm border border-gray-200 mb-6 p-1">

            {/* Top Author Section */}
            <div className="flex justify-between items-center bg-base-200 p-4 rounded-t-xl">

                <div className="flex items-center gap-3">

                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />

                    <div>
                        <h2 className="font-semibold text-sm">
                            {author.name}
                        </h2>

                        <p className="text-xs text-gray-500">
                            {
                                new Date(author.published_date)
                                    .toLocaleDateString()
                            }
                        </p>
                    </div>

                </div>

                <div className="flex items-center gap-4 text-gray-500">

                    <FaRegBookmark className="cursor-pointer" />

                    <FaShareAlt className="cursor-pointer" />

                </div>

            </div>

            {/* News Body */}
            <div className="p-5">

                <h1 className="text-2xl font-bold leading-snug mb-5">
                    {title}
                </h1>

                <img
                    src={image_url}
                    alt={title}
                    className="w-full h-[350px] object-cover rounded-xl mb-5"
                />

                <p className="text-gray-600 text-sm leading-7">

                    {
                        details.length > 250
                            ? details.slice(0, 250) + '...'
                            : details
                    }

                    <span className="text-orange-500 font-semibold cursor-pointer ml-2">
                        Read More
                    </span>

                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-2">

                    {
                        tags.map((tag, index) => (
                            <span
                                key={index}
                                className="bg-gray-100 px-3 py-1 rounded-full text-xs text-gray-600"
                            >
                                #{tag}
                            </span>
                        ))
                    }

                </div>

                {/* Footer */}
                <div className="border-t mt-5 pt-4 flex justify-between items-center">

                    <div className="flex items-center gap-2 text-orange-400">

                        {
                            [...Array(rating.number)].map((_, index) => (
                                <FaStar key={index} />
                            ))
                        }

                        <span className="text-gray-700 ml-1">
                            {rating.number}
                        </span>

                    </div>

                    <div className="flex items-center gap-2 text-gray-500">

                        <FaEye />

                        <span>{total_view}</span>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default NewsCard;