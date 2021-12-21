import React, { useState } from 'react';
import Item from './Item';

const ItemsList = () => {
    const items = [ 'item 1', 'item 2']

    return( <div>
        Items List
        { items.map( i => <Item props={i} />)}
    </div>)
}

export default ItemsList;