/* eslint-disable */
import React from 'react';
const MainContainer = ({ results }) => {
  return (
    <div>
      <div className="px-5 py-10 md:flex  ">
        <div className="container  md:w-1/2 lg:w-1/3 ">
          <div className="p-4 text-white">
            <h2 className="font-bold text-2xl md:text-4xl lg:text-6xl ">
              Movies
            </h2>
            <p className="mt-2 md:mt-4 font-semibold text-base">
              Movies move us like nothing else can, whether they’re scary,
              funny, dramatic, romantic or anywhere in-between. So many titles,
              so much to experience.
            </p>
          </div>

          <div>
            <h3>TRENDING</h3>
            <div>
              {results.map((result) => (
                <div key={result.id}>{result.original_title}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
