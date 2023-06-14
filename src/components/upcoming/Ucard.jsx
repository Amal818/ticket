import React from "react"
import { useState } from "react";

const Ucard = ({ item: { id, cover, name, place, date, prix } }) => {
  const [showForm, setShowForm] = useState(false);

  const handleBuyNow = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };
  return (
    <>
      <div className='MovieBox'>
        <div className='img'>
          <img src={cover} alt='' />
        </div>
        <div className='text'>
          <h1>{name}</h1>
          <span><i className="fa fa-calendar" ></i> &nbsp; {date} </span> <br /><br />
          <h3>
            <span><i className="fa fa-thumbtack" ></i> &nbsp; </span>
            {place}</h3>
          
          <h4>
            From :
            <n> {prix}</n></h4>
            </div>
         
          <button className='primary-btn' onClick={handleBuyNow}>
            <i className='fa fa-play'></i> BUY NOW
          </button>
          
        
      </div>
      {showForm && (
        <div className="popup">
          <div className="popup-content">
            <p>Buy Now Form</p>
            {/* Add your form elements here */}
            <form>
              {/* Your form fields */}
              <select>
              <option selected disabled>Balcon -- 100$</option>
              <option value="1">Balcon -- 100$</option>
              <option value="2">Silver -- 150$</option>
              <option value="3">VIP -- 200$</option>
            
            </select>
            <br />
            <div class="input-container">
              <input type="number" placeholder="quantity" />
              <input type="email" placeholder="Email" /><br />
              </div>
              
            <button type="submit">Buy</button>
            
            <button className="close-btn" onClick={handleCloseForm}>
              Close
            </button>
            
            </form>
          </div>
        </div>
      )}
    </>
  )
}

export default Ucard
