import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './items.json';

const Page = () => {
  const [shoppingItems, setShoppingItems] = useState(itemsData);

  const addItemHandler = (newItem) => {
    setShoppingItems(prevItems => [...prevItems, newItem]);
  };

  return (
    <main className="bg-gray-100 p-4">
      <h1 className="text-2xl font-semibold mb-4 text-purple-400 flex-auto items-center">My Shopping List</h1>
      <NewItem onAddItem={addItemHandler} />
      <ItemList items={shoppingItems} />
    </main>
  );
};

export default Page;