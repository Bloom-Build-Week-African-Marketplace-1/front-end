import React from 'react';
import PropTypes from 'prop-types';
// import SearchBar from '../../SearchBar';

const RenderExampleListPage = props => (
  <div>
    {/* <SearchBar /> */}
    <div className="main-list">
      {props.data.map(item => (
        <figure key={item.id}>
          <div className="image-price">
            <img src={item.thumbnailUrl} alt={item.title} />
            <p>$5.99</p>
          </div>
          <figcaption>
            <h3>{item.title}</h3>
          </figcaption>
        </figure>
      ))}
    </div>
  </div>
);

export default RenderExampleListPage;

// Don't forget your prop types! It will save you a lot of debugging headache as you add more features.
RenderExampleListPage.propTypes = {
  data: PropTypes.arrayOf(
    // Here is an example of enforcing an object structure that we expect to receive in our props:
    PropTypes.shape({
      // Here we require an id of type number or string to prevent a "unique key prop" warning
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      title: PropTypes.string,
      url: PropTypes.string,
      thumbnailUrl: PropTypes.string,
    })
  ).isRequired,
};
