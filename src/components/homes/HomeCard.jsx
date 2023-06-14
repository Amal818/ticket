import React from "react"

const HomeCard = ({ item: { id, cover, name, rating, time, desc, starring, genres, date } }) => {
  return (
    <>
      <div className='box'>
        <div className='coverImage'>
          <img src={cover} alt='' />
        </div>
        <div className='content flex'>
          <div className='details row'>
            <h1>{name}</h1>
            <p>{desc}</p>
            <div className='cast'>
              <h4>
                <span>Genres : </span>
                {genres}
              </h4>
              <h5>
                <span>Date : </span>
                {date}
                </h5>
            </div>
            
          </div>
         
        </div>
      </div>
    </>
  )
}

export default HomeCard
