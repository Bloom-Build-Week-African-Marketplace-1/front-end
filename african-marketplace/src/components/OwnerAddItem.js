import React, { useState, useEffect } from 'react';
import { Link, useHistory, Redirect } from 'react-router-dom';

// Redux imports
import { connect } from 'react-redux';
import { addItem } from '../state/actions/index';

const OwnerAddItem = props => {
  const [newItem, setNewItem] = useState({
    category: '',
    description: '',
    item_id: '',
    location: '',
    name: '',
    price: '',
    user_id: '',
    url: '',
  });
  const { addItem } = props;

  const initialIsAddingItem = false;

  // const [itemInfo, setItemInfo] = useState(initialItemInfo);
  const [isAddingItem, setIsAddingItem] = useState(initialIsAddingItem);

  useEffect(() => {
    setNewItem({ ...newItem, user_id: localStorage.getItem('user_id') });
  }, [isAddingItem]);

  // const { push } = useHistory();

  // const handleChange = e => {
  //   setItemInfo({
  //     ...itemInfo,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleClickAdd = e => {
  //   e.preventDefault();
  //   setIsAddingItem(true);
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   axiosWithAuth
  //     .post(`${API_URL}items`, itemInfo)
  //     .then(resp => console.log(resp))
  //     .catch(err => console.error(err));
  //   setIsAddingItem(false);
  // };

  // const handleCancel = e => {
  //   e.preventDefault();

  //   setIsAddingItem(false);
  // };

  // const selectCategory = async e => {
  //   setItemInfo(getNewCategory(e));
  // };

  // const getNewCategory = e => {
  //   const newItemInfo = { ...itemInfo };
  //   newItemInfo.category = e.target.value;
  //   console.log(newItemInfo);
  //   return newItemInfo;
  // };

  const handleChange = e => {
    setNewItem({
      ...newItem,
      [e.target.name]: e.target.value,
    });
  };

  const addNewItem = e => {
    e.preventDefault();

    addItem({
      ...newItem,
    });
    // setNewItem({
    //   category: '',
    // description: '',
    // item_id: '',
    // location: '',
    // name: '',
    // price: '',
    // user_id: '',
    // url: '',
    // });
  };

  // ------------------------------------

  const handleClickAdd = e => {
    e.preventDefault();
    setIsAddingItem(true);
  };

  const handleCancel = e => {
    e.preventDefault();

    setIsAddingItem(false);
  };

  const selectCategory = async e => {
    setNewItem(getNewCategory(e));
  };

  const getNewCategory = e => {
    const newItemInfo = { ...newItem };
    newItemInfo.category = e.target.value;
    return newItemInfo;
  };

  return (
    <div className="add-item-container">
      {!isAddingItem && <button onClick={handleClickAdd}>Add New Item</button>}
      {isAddingItem && (
        <div className="add-item-card">
          <h2>ADD AN ITEM</h2>
          <button onClick={handleCancel}>X</button>

          <form onSubmit={addNewItem}>
            <label>
              PRODUCT NAME
              <input
                type="text"
                value={newItem.name}
                onChange={handleChange}
                name="name"
                id="name"
              />
            </label>

            <label>
              DESCRIPTION
              <input
                type="text"
                value={newItem.description}
                onChange={handleChange}
                name="description"
              />
            </label>

            <label>
              PRICE
              <input
                type="text"
                value={newItem.price}
                onChange={handleChange}
                name="price"
              />
            </label>

            <label>
              LOCATION
              <input
                type="text"
                value={newItem.location}
                onChange={handleChange}
                name="location"
              />
            </label>
            <label>
              CATEGORY
              <select
                id={newItem.category}
                onChange={selectCategory}
                name={newItem.category}
                value={newItem.category}
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

const mapStateToProps = state => ({
  items: state.itemReducer.items,
});

export default connect(mapStateToProps, { addItem })(OwnerAddItem);
