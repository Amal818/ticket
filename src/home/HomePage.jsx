import React, { useState } from "react"
import Homes from "../components/homes/Homes"
import Upcomming from "../components/upcoming/Upcomming"
import { upcome, upcome1, upcome2 } from "../dummyData"

const HomePage = () => {
  const [items, setItems] = useState(upcome)
  const [item, setItem] = useState(upcome1)
  const [rec, setRec] = useState(upcome2)
  return (
    <>
      <Homes />
      <Upcomming items={items}  />
      <Upcomming items={item}  />
      <Upcomming items={rec}  />
    </>
  )
}

export default HomePage
