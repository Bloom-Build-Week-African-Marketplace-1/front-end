import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../utils/axiosWithAuth';
import API_URL from '../constants';
import { Link, useHistory, Redirect } from 'react-router-dom';

const OwnerEditItem = props => {
  const { item } = props;

  const initialIsEditingItem = false;

  const [itemInfo, setItemInfo] = useState(item);
  const [isEditingItem, setIsEditingItem] = useState(initialIsEditingItem);

  useEffect(() => {
    setItemInfo({ ...itemInfo, user_id: localStorage.getItem('user_id') });
  }, [isEditingItem]);

  const handleChange = e => {
    setItemInfo({
      ...itemInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleClickEdit = e => {
    e.preventDefault();
    setIsEditingItem(true);
  };

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth
      .put(`/items/${item.item_id}`, itemInfo)
      .then(resp => console.log(resp))
      .catch(err => console.error(err));
    setIsEditingItem(false);
  };

  const handleCancel = e => {
    e.preventDefault();

    setIsEditingItem(false);
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
      {!isEditingItem && <button onClick={handleClickEdit}>Edit Item</button>}
      {isEditingItem && (
        <div>
          <h2>EDIT AN ITEM</h2>
          <button onClick={handleCancel}>X</button>

          <form onSubmit={handleSubmit}>
            <div>
              <label>
                PRODUCT NAME
                <input
                  type="text"
                  value={itemInfo.name}
                  onChange={handleChange}
                  name="name"
                />
              </label>
            </div>
            <div>
              <label>
                DESCRIPTION
                <input
                  type="text"
                  value={itemInfo.description}
                  onChange={handleChange}
                  name="description"
                />
              </label>
            </div>
            <div>
              <label>
                PRICE
                <input
                  type="text"
                  value={itemInfo.price}
                  onChange={handleChange}
                  name="price"
                />
              </label>
            </div>
            <div>
              <label>
                LOCATION
                <input
                  type="text"
                  value={itemInfo.location}
                  onChange={handleChange}
                  name="location"
                />
              </label>
            </div>
            <div>
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
            </div>
            <div>
              <input type="submit" value="SUBMIT" />
            </div>
          </form>

          <Link to="/register">Register New Owner</Link>
        </div>
      )}
      {isEditingItem && <Redirect to="/shop/owner" />}
    </div>
  );
};

export default OwnerEditItem;
