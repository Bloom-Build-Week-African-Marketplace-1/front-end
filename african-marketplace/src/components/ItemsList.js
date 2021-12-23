import React, { useState, useEffect } from 'react';
import API_URL from '../constants';
import axiosWithAuth from '../utils/axiosWithAuth';
import axios from 'axios';

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
      .get(`${API_URL}items`)
      .then(res => {
        setItems(res.data);
        console.log(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="list-container">
      <div className="main-list">
        {items.map(item => (
          <figure key={item.item_id}>
            <div className="image-price">
              <img src={item.thumbnailUrl} alt={item.title} />
              <p>${item.price}</p>
            </div>
            <figcaption>
              <h3>{item.name}</h3>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
};

export default ItemsList;
