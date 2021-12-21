import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OwnerLogin from '../../OwnerLogin';
import OwnerAddItem from '../../OwnerAddItem';
import ItemsList from '../../ItemsList';

function RenderLandingPage(props) {
  return (
    <div>
      <h1>Welcome to Labs Basic SPA</h1>
      <div>
        <p>
          This is an example of how we'd like for you to approach page/routable
          components.
        </p>
        <p>
          <Link to="/example-list">Example List of Items</Link>
        </p>
      </div>
      <OwnerLogin />
      <OwnerAddItem />
      <ItemsList />
    </div>
  );
}
export default RenderLandingPage;
