import React from "react"
import { useSelector } from "react-redux"

function BagSummary() {
  const bagItemsIDs = useSelector((store) => store.bag)
  const totalItems = useSelector((store) => store.items)
  const finalItems = totalItems.filter((item) => {
    const itemIndex = bagItemsIDs.indexOf(item.id)
    return itemIndex >= 0
  })
  const CONVENIENCE_FEES = 99
  let totalItem = bagItemsIDs.length
  let totalMRP = 0
  let totalDiscount = 0

  finalItems.forEach((bagItem) => {
    totalMRP += bagItem.original_price
    totalDiscount += bagItem.original_price - bagItem.current_price
  })

  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES

  return (
    <div className='bag-summary'>
      <div className='bag-details-container bagDetails'>
        <div className='price-header'>PRICE DETAILS ({totalItem} Items) </div>
        <div className='price-item'>
          <span className='price-item-tag'>Total MRP</span>
          <span className='price-item-value'>₹{totalMRP}</span>
        </div>
        <div className='price-item'>
          <span className='price-item-tag'>Discount </span>
          <span className='price-item-value priceDetail-base-discount'>
            -₹{totalDiscount}
          </span>
        </div>
        <div className='price-item'>
          <span className='price-item-tag'>Convenience Fee</span>
          <span className='price-item-value'>₹99</span>
        </div>
        <hr />
        <div className='price-footer'>
          <span className='price-item-tag'>Total</span>
          <span className='price-item-value'>₹{finalPayment}</span>
        </div>
      </div>
      <button className='btn-place-order'>
        <div className='css-xjhrni'>PLACE ORDER</div>
      </button>
    </div>
  )
}

export default BagSummary
