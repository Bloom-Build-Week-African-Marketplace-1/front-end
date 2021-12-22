import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';

const ItemsList = props => {
  const initialState = [
    {
      category: '',
      description: '',
      item_id: 0,
      location: '',
      name: '',
      price: 0,
      user_id: 0,
    },
  ];

  const [items, setItems] = useState(initialState);

  useEffect(() => {
    axiosWithAuth
      .get(`items`)
      .then(res => setItems(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <div className="main-list">
        {items.map(item => (
          <figure key={item.id}>
            <div className="image-price">
              <img src={item.thumbnailUrl} alt={item.title} />
              <p>{item.price}</p>
            </div>
            <figcaption>
              <h3>{item.title}</h3>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default ItemsList;
