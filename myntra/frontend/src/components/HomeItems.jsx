import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { bagSliceAction } from "../store/bagSlice"
import { IoIosAddCircleOutline } from "react-icons/io"
import { RiDeleteBin2Line } from "react-icons/ri"

function HomeItems({ item }) {
  const dispatcher = useDispatch()

  const bagItems = useSelector((store) => store.bag)
  const elementFound = bagItems.indexOf(item.id) >= 0

  console.log(item.id, elementFound)

  //Increase cart Item
  const handleAddToBag = () => {
    dispatcher(bagSliceAction.addItemsToBag(item.id))
  }

  const handleRemoveFromBag = () => {
    dispatcher(bagSliceAction.removeItemsFromBag(item.id))
  }
  return (
    <>
      <div className='item-container'>
        <img className='item-image' src={item.image} alt='item image' />
        <div className='rating'>
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className='company-name'>{item.company}</div>
        <div className='item-name'>{item.item_name}</div>
        <div className='price'>
          <span className='current-price'>{item.current_price}</span>
          <span className='-price'>{item.original_price}</span>
          <span className='discount'>{item.discount_percentage}% OFF</span>
        </div>
        {elementFound ? (
          <div>
            <button className='btn-add-bag' onClick={handleAddToBag}>
              <IoIosAddCircleOutline />
              Add to bag
            </button>
            <button
              className='btn-add-bag bagRemove'
              onClick={handleRemoveFromBag}
            >
              <RiDeleteBin2Line />
              Remove from cart
            </button>
          </div>
        ) : (
          <button className='btn-add-bag' onClick={handleAddToBag}>
            <IoIosAddCircleOutline />
            Add to bag
          </button>
        )}
      </div>
    </>
  )
}

export default HomeItems
