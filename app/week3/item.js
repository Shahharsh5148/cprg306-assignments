import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="some-tailwind-classes">
      {name}, {quantity}, {category}
    </li>
  );
};

export default Item;
