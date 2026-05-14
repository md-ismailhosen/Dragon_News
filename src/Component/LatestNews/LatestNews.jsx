import React from 'react';
import Marquee from 'react-marquee-slider';




const LatestNews = () => {
    return (
        <div className=''>
            <div className="flex items-center gap-5 bg-base-300 overflow-hidden">
                <h3 className="text-base-100 bg-secondary px-3 py-2 z-10">
                    Latest
                </h3>

                <div className="whitespace-nowrap animate-marquee pause-on-hover">
                    <p className="font-bold">
                        Brazil national football team is the most successful team in FIFA World Cup history, winning 5 World Cups. Brazil won the titles in 1958, 1962, 1970, 1994, and 2002. Famous Brazilian football legends include Pelé, Zico, Romário, Ronaldo Nazário, Ronaldinho, and Neymar. The 1970 Brazil team is considered one of the greatest football teams ever, and Pelé helped Brazil win three World Cups.</p>
                </div>
            </div>
        </div>
    );
};

export default LatestNews;