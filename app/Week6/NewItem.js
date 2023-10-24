import React, { useState } from 'react';

const NewItem = ({ onAddItem }) => {
  const [itemName, setItemName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('Produce');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      name: itemName,
      quantity: quantity,
      category: category
    };

    onAddItem(newItem);
    
    // Reset form fields
    setItemName('');
    setQuantity(1);
    setCategory('Produce');
  };

  // ... (rest of the code remains unchanged)
};

export default NewItem;