import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import emailSvg from "../src/assets/email.svg";
import locSvg from "../src/assets/location.svg";
import telSvg from "../src/assets/phone.svg";

function App() {
  const [card, setCard] = useState({});
  const { email, title, first, last, phone, city, country, date, age, large } =
    card;
  const url = "https://randomuser.me/api/";

  const retrieveData = async () => {
    const resp = await axios.get(url);
    const result = await resp.data.results[0];
    const {
      email,
      name: { title, first, last },
      phone,
      location: { city, country },
      dob: { date, age },
      picture: { large },
    } = result;
    setCard({
      email,
      title,
      first,
      last,
      phone,
      city,
      country,
      date: date.substring(0, 10),
      age,
      large,
    });
  };

  useEffect(() => {
    retrieveData();
  }, []);

  console.log(card);

  const handleClick = () => {
    window.setTimeout(() => {
      window.location.reload(true);
    }, 300);
  };

  return (
    <div className="container">
      <div className="card">
        <div className="user">
          <img src={large} alt={first}></img>
          <h2>
            {title} {first} {last}
          </h2>
        </div>
        <div className="mail">
          <img
            src={emailSvg}
            style={{ width: "25px", height: "25px" }}
            alt={first}
          ></img>
          <h4>{email}</h4>
        </div>
        <div className="tel">
          <img
            src={telSvg}
            style={{ width: "25px", height: "25px" }}
            alt={phone}
          ></img>
          <h4>{phone}</h4>
        </div>
        <div className="loc">
          <img
            src={locSvg}
            style={{ width: "25px", height: "25px" }}
            alt={city}
          ></img>
          <h4>
            {city} - {country}
          </h4>
        </div>
        <p className="age">Age: {age}</p>
        <p className="date">Register Date: {date}</p>
      </div>
      <button className="btn" onClick={handleClick}>
        Random User
      </button>
    </div>
  );
}

export default App;
