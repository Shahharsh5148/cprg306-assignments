import React from 'react';
import Item from './item';

const ItemList = ({ items }) => {
  // Sort items by name before rendering
  const sortedItems = [...items].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <ul className="list-inside list-decimal">
      {sortedItems.map((item, index) => (
        <Item
          key={index}
          name={item.name}
          quantity={item.quantity}
          category={item.category}
        />
      ))}
    </ul>
  );
};

export default ItemList;