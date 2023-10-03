'use client';
import React, { useEffect } from 'react';

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div>
      <div>
        <h1>Something went wrong</h1>
        <button onClick={() => reset()}>Try again</button>
      </div>
    </div>
  );
};

export default Error;
