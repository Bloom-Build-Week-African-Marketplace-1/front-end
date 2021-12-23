import React, { useState, useEffect } from 'react';
import API_URL from '../constants';
import axiosWithAuth from '../utils/axiosWithAuth';

// Redux imports
import { connect } from 'react-redux';
import { fetchItems } from '../state/actions/index';

const ItemsList = props => {
  const { items, isLoading, itemError, fetchItems } = props;
  // const initialState = [
  //   {
  //     category: '',
  //     description: '',
  //     item_id: 0,
  //     location: '',
  //     name: '',
  //     price: 0,
  //     user_id: 0,
  //   },
  // ];

  // const [items, setItems] = useState(initialState);

  // useEffect(() => {
  //   axiosWithAuth
  //     .get(`${API_URL}items`)
  //     .then(res => {
  //       setItems(res.data);
  //       console.log(res.data);
  //     })
  //     .catch(err => console.error(err));
  // }, []);

  // This should fetch the items using redux and therefore reducing code
  useEffect(() => {
    fetchItems();
  }, []);

  // This is a loading page is isLoading === true
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  // This just puts up an error message if something goes wrong
  if (itemError) {
    const error = itemError.toString();
    // No clue why it's making me toString but oh well
    return <h2>Uh oh! We got this error: {error}</h2>;
  }

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

const mapStateToProps = state => ({
  items: state.itemReducer.items,
  isLoading: state.itemReducer.isLoading,
  itemError: state.itemReducer.itemError,
});

export default connect(mapStateToProps, { fetchItems })(ItemsList);
