import React from "react"
import HomeItems from "../components/HomeItems"
import { useSelector } from "react-redux"

function Home() {
  const getItemsList = useSelector((store) => store.items)
  return (
    <div>
      <main>
        <div className='items-container'>
          {getItemsList.map((items) => (
            <HomeItems key={items.id} item={items} />
          ))}
        </div>
      </main>
    </div>
  )
}

export default Home
