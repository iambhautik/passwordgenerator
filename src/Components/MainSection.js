import React, { useState } from 'react'

const MainSection = () => {

  const [Password, setPassword] = useState("");

  const getRandomItem = (arr) => {
    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
  }

  const generate = () => {



    const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    const special = ['@', '#', '$', '%', '^', '&', '*'];



    let isSpecialChecked = document.getElementById('special').checked;
    let isUpperChecked = document.getElementById('upper').checked;
    let isLowerChecked = document.getElementById('lower').checked;
    let lenVal = document.getElementById('length').value;

    if (isSpecialChecked === false && isLowerChecked === false && isUpperChecked === false || isNaN(lenVal)) {
      alert('Please select an option or Password Length');
    }

    if (isSpecialChecked === true && isLowerChecked === true && isUpperChecked === true) {
      const addArray = special.concat(lowercase, uppercase);
      var temp = [];
      for (let i = 0; i < lenVal; i++) {
        const later = getRandomItem(addArray);
        temp.push(later);
      }
      let pass = temp.join('');
      setPassword(pass);
    }
    else if (isSpecialChecked === true && isLowerChecked) {
      const addArray = special.concat(lowercase);
      var temp = [];
      for (let i = 0; i < lenVal; i++) {
        const later = getRandomItem(addArray);
        temp.push(later);
      }
      let pass = temp.join('');
      setPassword(pass);
    }
    else if (isLowerChecked === true && isUpperChecked === true) {
      const addArray = lowercase.concat(uppercase)
      var temp = [];
      for (let i = 0; i < lenVal; i++) {
        const later = getRandomItem(addArray);
        temp.push(later);
      }
      let pass = temp.join('');
      setPassword(pass);
    }
    else if (isSpecialChecked === true && isUpperChecked === true) {
      const addArray = special.concat(uppercase)
      var temp = [];
      for (let i = 0; i < lenVal; i++) {
        const later = getRandomItem(addArray);
        temp.push(later);
      }
      let pass = temp.join('');
      setPassword(pass);
    }
    else if (isSpecialChecked === true) {
      var temp = [];
      for (let i = 0; i < lenVal; i++) {
        const later = getRandomItem(special);
        temp.push(later);
      }
      let pass = temp.join('');
      setPassword(pass);
    }
    else if (isLowerChecked === true) {
      var temp = [];
      for (let i = 0; i < lenVal; i++) {
        const later = getRandomItem(lowercase);
        temp.push(later);
      }
      let pass = temp.join('');
      setPassword(pass);
    }
    else if (isUpperChecked === true) {
      var temp = [];
      for (let i = 0; i < lenVal; i++) {
        const later = getRandomItem(uppercase);
        temp.push(later);
      }
      let pass = temp.join('');
      setPassword(pass);
    }
  }

  return (

    <div className="container text mt-4 mb-4 ">
      <div className="row">
        <div className="col-sm-12 mt-4">
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="special" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Include Special Cheractors</label>
          </div>

          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="upper" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Include Uppercase Cheractors</label>
          </div>

          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" id="lower" />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Include Lowercase Cheractors</label>
          </div>
        </div>
        <div className="col-lg-5 mt-4 option">
          <select className="form-select" id="length" aria-label="Default select example">
            <option defaultValue>Select Password Length</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">28</option>
            <option value="29">29</option>
            <option value="30">30</option>
          </select>
        </div>
      </div>
      <div className="row ">
        <div className="mb-4 text1 row">
          <p className="mt-5">Your Password is : {Password}</p>
        </div>
        <div className="mt-5">
          <button onClick={generate}>Generate</button>
        </div>
      </div>
    </div>

  )
}

export default MainSection
