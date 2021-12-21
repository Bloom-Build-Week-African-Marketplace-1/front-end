import React, { useState } from 'react';
import Item from './Item';

const ItemsList = props => {
  const items = [
    {
      id: 1,
      thumbnailUrl: `https://picsum.photos/200/300`,
      title: 'item 1',
      price: '$5.99',
    },
    {
      id: 2,
      thumbnailUrl: `https://picsum.photos/200/300`,
      title: 'item 2',
      price: '$20',
    },
    {
      id: 1,
      thumbnailUrl: `https://picsum.photos/200/300`,
      title: 'item 1',
      price: '$5.99',
    },
    {
      id: 2,
      thumbnailUrl: `https://picsum.photos/200/300`,
      title: 'item 2',
      price: '$20',
    },
    {
      id: 1,
      thumbnailUrl: `https://picsum.photos/200/300`,
      title: 'item 1',
      price: '$5.99',
    },
    {
      id: 2,
      thumbnailUrl: `https://picsum.photos/200/300`,
      title: 'item 2',
      price: '$20',
    },
  ];

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
