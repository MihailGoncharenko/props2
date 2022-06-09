import React from 'react'

function level(count) {
    if (count <= 10) {
      return `item-quantity level-low`
    } else if (count <= 20) {
      return `item-quantity level-medium`
    } else {
      return `item-quantity level-high`
    }
  }

function money(code, price) {
  switch (code) {
    case 'EUR':
        return `€${price}`;
    case 'USD':
        return `$${price}`;
    default:
        return `${price} ${code}`;
  }
}

function Item({ item }) {
  if (item.state === 'removed') {
    return null
  }
  return (
      <div className="item">
        <div className="item-image">
          <a href={ item.url }> 
            <img src={ item.MainImage.url_570xN } alt=''/>
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{ item.title }</p>
          <p className="item-price">{ money(item.currency_code, item.price) }</p>
          <p className={level(item.quantity)}>{ `${item.quantity} left` }</p>
        </div>
      </div>
  )
}

export default Item