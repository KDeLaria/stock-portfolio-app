import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-4xl font-bold">WOLF.IO</h1>
      <button className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700">Login/Logout</button>
    </div>
  );
};

export default Header;


// "flex" makes the div a flex container for flexible box layout
// "justify-between" spaces out children elements evenly, with the first element at the start and the last element at the end
// "items-center" aligns children elements in the center of the container along the cross axis
// "mb-6" adds a margin-bottom of 1.5rem (24px) to the div

// "text-4xl" sets the font size to approximately 2.25rem (36px)
// "font-bold" makes the font weight bold

// "py-2" adds padding of 0.5rem (8px) to the top and bottom of the button
// "px-4" adds padding of 1rem (16px) to the left and right of the button
// "bg-blue-500" sets the background color to a medium shade of blue
// "text-white" sets the text color to white
// "rounded" applies a moderate border radius to all corners of the button, making it rounded
// "hover:bg-blue-700" changes the background color to a darker shade of blue on hover
