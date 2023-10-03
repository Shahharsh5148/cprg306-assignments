import React from 'react';
import Item from './item';

const ItemList = () => {
  const items = [/* your item objects here */];
  
  return (
    <ul className="some-tailwind-classes">
      {items.map((item, index) => (
        <Item key={index} {...item} />
      ))}
    </ul>
  );
};

export default ItemList;
