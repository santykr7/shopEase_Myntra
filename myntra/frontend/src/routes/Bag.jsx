import React from "react"
import BagSummary from "../components/BagSummary"
import BagItem from "../components/BagItem"
import { useSelector } from "react-redux"

function Bag() {
  const bagItems = useSelector((store) => store.bag)
  const totalItems = useSelector((store) => store.items)
  const foundInCart = totalItems.filter((item) => {
    const itemIndex = bagItems.indexOf(item.id)
    return itemIndex >= 0
  })

  return (
    <main>
      <div className='bag-page'>
        <div className='bag-items-container'>
          {foundInCart.map((item) => (
            <BagItem item={item} />
          ))}
        </div>
        <div className='bag-summary'>
          <BagSummary />
        </div>
      </div>
    </main>
  )
}

export default Bag
