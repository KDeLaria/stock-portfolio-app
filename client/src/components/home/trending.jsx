import React from 'react';

const Trending = () => {
  return (
    <section className="border-t pt-4 mb-5 px-4">
      <h3 className="text-xl font-bold mb-4">Trending</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Example trending item for biggest gains */}
        <div className="flex flex-col items-center justify-center border p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <span className="font-bold text-lg">MSFT</span>
          <div className="flex items-center text-green-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7" />
            </svg>
            biggest gains
          </div>
        </div>
        {/* Example trending item for biggest losses */}
        <div className="flex flex-col items-center justify-center border p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
          <span className="font-bold text-lg">IBM</span>
          <div className="flex items-center text-red-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
            biggest losses
          </div>
        </div>
        {/* Repeat similar blocks for each trending item, adjusting the text, color, and icon as necessary */}
      </div>
    </section>
  );
};

export default Trending;