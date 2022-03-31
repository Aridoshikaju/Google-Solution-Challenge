
import React from 'react'
import './Styles_Provider.css'
// import styled from 'styled-components';

// const Form = styled.form`
//    width: 100%;
// `;
import {Carousel} from 'react-bootstrap'


function Todav() {
  return (
(
  
  <div class="form" >
      <div className="title">Welcome</div>
      <div className="subtitle">Let's get Today's Update!</div>
      <div className="input-container ic1">
        <input id="firstname" className="input" type="number" placeholder="Amount of roti: " min="0" />
        <div className="cut cut-short">roti:</div>
        <label for="firstname" className="placeholder"></label>
      </div>
      <div className="input-container ic2">
        <input id="lastname" className="input" type="number" placeholder="Amount of rice(in kgs): " min="0" />
        <div className="cut cut-short">Rice</div>
        <label for="lastname" className="placeholder"> </label>
      </div>
      <div className="input-container ic2">
        <input id="email" className="input" type="number" placeholder="Amount of curry VEG(in kg): " min="0"/>
        <div className="cut cut-short">VEG</div>
        
      </div>
      <div className="input-container ic2">
        <input id="email" className="input" type="number" placeholder="Amount of curry NON-VEG(in kg): " min="0" />
        <div className="cut cut-short">N-VEG</div>
      </div>
      {/* <div className="input-container ic2">
        <input id="email" className="input" type="time" placeholder="Time: " />
        <div className="cut cut-short"></div>
        <label for="" className="placeholder"> Time </label>
      </div> */}
      <div className="input-container ic2">
      
      <input list="time" type="text"placeholder='Select Time:' className='input' />
      <div className="cut cut-short">Time</div>
      <datalist name="time" id="time"  >
        <option value="6 pm to 7 pm">6 pm to 7 pm</option>
        <option value="7 pm to 8 pm">7 pm to 8 pm</option>
        <option value="8 pm to 9 pm">8 pm to 9 pm</option>
        <option value="9 pm to 10 pm">9 pm to 10 pm</option>
        <option value="10 pm to 11 pm">10 pm to 11 pm</option>
      </datalist>
      </div>
      <input type="submit" className='submit'/>
    </div>
   
))}

    /* <div style={{width: "100%",align: "center"}}>
{
<form>
     
<input type="number" name="food_avail" placeholder="Today's Food availability VEG : " /><br/><br/>

<input type="number" name="food_avail" placeholder="Today's Food availability NON-VEG :"/><br/><br/>

<input type="time" name="Time" placeholder="Delivery Time: " />
<br/>
<br/>

<br/>
<input type="submit" />
</form>
}
</div> */


export default Todav