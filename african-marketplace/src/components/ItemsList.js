import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import OwnerEditItem from './OwnerEditItem';

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

  const [itemsChanged, setItemsChanged] = useState(0);

  const getItems = () => {
    axiosWithAuth
      .get(`items`)
      .then(res => setItems(res.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    getItems();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      getItems();
    }, 2000);
  }, [itemsChanged]);

  const removeItem = e => {
    axiosWithAuth
      .delete(`items/${e.target.name}`)
      .then(res => setItemsChanged(itemsChanged + 0.1))
      .catch(err => console.error(err));
  };
  return (
    <>
      <div>
        <div className="main-list">
          {items
            .filter(
              item =>
                item.user_id.toString() === localStorage.getItem('user_id')
            )
            .map(item => (
              <figure key={item.item_id}>
                <div className="image-price">
                  <img src={item.thumbnailUrl} alt={item.name} />
                  <p>{item.price}</p>
                </div>
                <figcaption>
                  <h3>{item.title}</h3>
                </figcaption>
                <button name={item.item_id} onClick={removeItem}>
                  Remove Item
                </button>
                <OwnerEditItem item={item} />
              </figure>
            ))}
        </div>
      </div>
      <div>
        <div className="main-list">
          {items
            .filter(
              item =>
                !(item.user_id.toString() === localStorage.getItem('user_id'))
            )
            .map(item => (
              <figure key={item.item_id}>
                <div className="image-price">
                  <img src={item.thumbnailUrl} alt={item.name} />
                  <p>{item.price}</p>
                </div>
                <figcaption>
                  <h3>{item.title}</h3>
                </figcaption>
                {item.user_id.toString() ===
                  localStorage.getItem('user_id') && (
                  <button name={item.item_id} onClick={removeItem}>
                    Remove Item
                  </button>
                )}
              </figure>
            ))}
        </div>
      </div>
    </>
  );
};

export default ItemsList;
