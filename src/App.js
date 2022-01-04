import "./App.css";
import React, { useState } from "react";
import User from "./User";
import data from "./data.json";

import CountryOption from "./CountryOption";

function App() {
  const [info, setInfo] = useState([]);
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    photo: "http://cdn.onlinewebfonts.com/svg/img_206976.png",
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    gender: "",
    country: "",
  });

  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setUser({ ...user, photo: reader.result });
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  let name, value;
  const onChange = (events) => {
    name = events.target.name;
    value = events.target.value;

    setUser({ ...user, [name]: value });
  };

  const handRegister = (event) => {
    event.preventDefault();
    setInfo(info.concat(user));
    setNewUser(false);

    console.log(info);
    setUser({
      photo: "http://cdn.onlinewebfonts.com/svg/img_206976.png",
      firstName: "",
      lastName: "",
      mobile: "",
      email: "",
      gender: "",
      country: "",
    });
  };
  const handleNew = () => {
    setNewUser(true);
  };
  if (info.length > 0 && newUser === false) {
    console.log(info);
    return <User info={info} handleNew={handleNew} />;
  } else {
    return (
      <>
        <div className="userForm">
          <img src={user.photo} alt="" />

          <label>Uploade Photo</label>
          <input
            type="file"
            accept="image/*"
            name="image-uploade"
            id="input"
            onChange={imageHandler}
            required
          />
          <input
            type="text"
            name="firstName"
            id="input"
            placeholder="First Name"
            onChange={(e) => onChange(e)}
            required
          />
          <input
            type="text"
            name="lastName"
            id="input"
            placeholder="Last Name"
            onChange={(e) => onChange(e)}
            required
          />

          <input
            type="email"
            name="email"
            id="input"
            placeholder="Email"
            onKeyUp={(e) => onChange(e)}
            required
          />
          <input
            type="number"
            name="mobile"
            id="input"
            placeholder="Mobile"
            onChange={(e) => onChange(e)}
            required="required"
          />
          <select
            name="gender"
            id="input"
            onChange={(e) => onChange(e)}
            required
          >
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <select
            id="input"
            onChange={(e) => onChange(e)}
            name="country"
            required
          >
            <CountryOption />
          </select>
          <button id="input" onClick={(e) => handRegister(e)}>
            Register
          </button>
        </div>
      </>
    );
  }
}

export default App;
