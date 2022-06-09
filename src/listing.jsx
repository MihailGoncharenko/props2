import React from 'react';
import Item from './item';

function Listing({ items }) {

  return (
    <div className="item-list">
      {items.map((item) => <Item item={item}/>)}
    </div>
  )
}

export default Listing