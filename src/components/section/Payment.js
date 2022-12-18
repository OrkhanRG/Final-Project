import React, { Component } from 'react'
import '../css/Payment.css'

export class Payment extends Component {
  render() {
    return (
      <div>
        <div class="mainscreen">
         
      <div class="card2">
        <div class="leftside">
          <img
            src="https://i.pinimg.com/originals/18/9d/dc/189ddc1221d9c1c779dda4ad37a35fa1.png"
            class="product"
            alt="Shoes"
          />
        </div>
        <div class="rightside">
          <form action="">
            <h1>CheckOut</h1>
            <h2>Payment Information</h2>
            <p className='pLast'>Cardholder Name</p>
            <input type="text" class="inputbox" name="name" required />
            <p className='pLast'>Card Number</p>
            <input type="number" class="inputbox" name="card_number" id="card_number" required />

            <p className='pLast'>Card Type</p>
            <select class="inputbox" name="card_type" id="card_type" required>
              <option value="">--Select a Card Type--</option>
              <option value="Visa">Visa</option>
              <option value="RuPay">RuPay</option>
              <option value="MasterCard">MasterCard</option>
            </select>
<div class="expcvv">

            <p class="expcvv_text pLast">Expiry</p>
            <input type="date" class="inputbox" name="exp_date" id="exp_date" required />

            <p class="expcvv_text2 pLast">CVV</p>
            <input type="password" class="inputbox" name="cvv" id="cvv" required />
        </div>
            <p className='pLast'></p>
            <button type="submit" class="button">CheckOut</button>
          </form>
        </div>
      </div>
    </div>
      </div>
    )
  }
}

export default Payment