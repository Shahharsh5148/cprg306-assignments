import { useState } from 'react';
import Item from './item';
import items from './items.json';

function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  items.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
  });

  return (
    <div>
      <button onClick={() => setSortBy("name")} style={{ backgroundColor: sortBy === "name" ? "lightblue" : "white" }}>Sort by Name</button>
      <button onClick={() => setSortBy("category")} style={{ backgroundColor: sortBy === "category" ? "lightblue" : "white" }}>Sort by Category</button>
      <ul>
        {items.map(item => (
          <Item key={item.id} name={item.name} quantity={item.quantity} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ItemList;
