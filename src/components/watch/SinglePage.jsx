import React, { useState, useEffect } from "react"
import "./style.css"
import { useParams } from "react-router-dom"
import { homeData, upcome2 } from "../../dummyData"
import Upcomming from "../upcoming/Upcomming"

const SinglePage = () => {
  const { id } = useParams()
  const [item, setItem] = useState(null)

  useEffect(() => {
    let item = homeData.find((item) => item.id === parseInt(id))
    if (item) {
      setItem(item)
    }
  }, [id])
  const [rec, setRec] = useState(upcome2)

  return (
    <>
      {item ? (
        <>
          <section className='singlePage'>
            <div className='singleHeading'>
              <h1>{item.name} </h1> <span> | {item.time} | </span> <span> HD </span>
            </div>
            <div className='container'>
              
            </div>
          </section>
          <Upcomming items={rec} title='Recommended Movies' />
        </>
      ) : (
        "no"
      )}
    </>
  )
}

export default SinglePage
