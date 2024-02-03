import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"

function Loading() {
  return (
    <div
      class='spinner-border loader'
      role='status'
      style={{ width: "5rem", height: "5rem", margin: "10% 50%" }}
    >
      <span class='visually-hidden'>Loading...</span>
    </div>
  )
}

export default Loading
