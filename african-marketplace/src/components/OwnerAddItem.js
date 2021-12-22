import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import API_URL from '../constants';
import { Link, useHistory, Redirect } from 'react-router-dom';

const OwnerAddItem = () => {
  const initialItemInfo = {
    category: '',
    description: '',
    location: '',
    name: '',
    price: 0,
    user_id: 0,
  };

  const initialIsAddingItem = false;

  const [itemInfo, setItemInfo] = useState(initialItemInfo);
  const [isAddingItem, setIsAddingItem] = useState(initialIsAddingItem);

  useEffect(() => {
    setItemInfo({ ...itemInfo, user_id: localStorage.getItem('user_id') });
  }, [isAddingItem]);

  const { push } = useHistory();

  const handleChange = e => {
    setItemInfo({
      ...itemInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickAdd = e => {
    e.preventDefault();
    setIsAddingItem(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth
      .post(`${API_URL}items`, itemInfo)
      .then(resp => console.log(resp))
      .catch(err => console.error(err));
    setIsAddingItem(false);
  };

  const handleCancel = e => {
    e.preventDefault();

    setIsAddingItem(false);
  };

  const selectCategory = async e => {
    setItemInfo(getNewCategory(e));
  };

  const getNewCategory = e => {
    const newItemInfo = { ...itemInfo };
    newItemInfo.category = e.target.value;
    console.log(newItemInfo);
    return newItemInfo;
  };

  return (
    <div>
      {!isAddingItem && <button onClick={handleClickAdd}>Add New Item</button>}
      {isAddingItem && (
        <div>
          <h2>ADD AN ITEM</h2>
          <button onClick={handleCancel}>X</button>

          <form onSubmit={handleSubmit}>
            <label>
              PRODUCT NAME
              <input
                type="text"
                value={itemInfo.name}
                onChange={handleChange}
                name="name"
              />
            </label>

            <label>
              DESCRIPTION
              <input
                type="text"
                value={itemInfo.description}
                onChange={handleChange}
                name="description"
              />
            </label>

            <label>
              PRICE
              <input
                type="text"
                value={itemInfo.price}
                onChange={handleChange}
                name="price"
              />
            </label>

            <label>
              LOCATION
              <input
                type="text"
                value={itemInfo.location}
                onChange={handleChange}
                name="location"
              />
            </label>
            <label>
              CATEGORY
              <select
                id={itemInfo.category}
                onChange={selectCategory}
                name={itemInfo.category}
                value={itemInfo.category}
              >
                <option name="category" value="0">
                  SELECT CATEGORY:
                </option>
                <option name="housewares" value="housewares">
                  HOUSEWARES
                </option>
                <option name="furniture" value="furniture">
                  FURNITURE
                </option>
                <option name="food" value="food">
                  FOOD
                </option>
                <option name="apparel" value="apparel">
                  APPAREL
                </option>
              </select>
            </label>
            <input type="submit" value="SUBMIT" />
          </form>

          <Link to="/register">Register New Owner</Link>
        </div>
      )}
      {isAddingItem && <Redirect to="/shop/owner" />}
    </div>
  );
};

export default OwnerAddItem;
