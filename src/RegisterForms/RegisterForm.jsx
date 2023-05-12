import React, { useEffect, useState } from "react";
import { Button, Stack } from "react-bootstrap";

export default function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const submitHandler = () => {
    console.log("firstName", firstName);
  };

  useEffect(() => {
    console.log(firstName);
  }, [firstName]);
  return (
    <>
      <div>
        <div className="container myContainer">
          <h2 className="text-center mb-3">Register Form</h2>
          <div className="row">
            <div className="col-3 col-sm-12 col-md-6">
              <label for="fname" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                name="fname"
                id="fname"
                placeholder="Enter first Name"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="col-3 col-sm-12 col-md-6">
              <label for="lname" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                name="lname"
                id="lname"
                placeholder="Enter Last Name"
              />
            </div>
            <div className="col-6 col-sm-12 col-md-12">
              <label for="mobile" className="form-label">
                Mobile
              </label>
              <input
                type="number"
                className="form-control"
                name="mobile"
                id="mobile"
                placeholder="Enter Mobile Number"
              />
            </div>
          </div>
          <label for="email" className="form-label mt-2">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            name="mobile"
            id="email"
            placeholder="Enter Email"
          />
          <label for="address" className="form-label mt-2">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            name="address"
            id="address"
            placeholder="Enter address"
          />
          <div className="row mt-2">
            <div className="col-4 col-sm-12">
              <label for="street" className="form-label">
                street
              </label>
              <input
                type="text"
                className="form-control"
                name="street"
                id="street"
                placeholder="Enter street"
              />
            </div>
            <div className="col-4 col-sm-12">
              <label for="pcode" className="form-label">
                Pin Code
              </label>
              <input
                type="text"
                className="form-control"
                name="pcode"
                id="pcode"
                placeholder="Enter Pincode"
              />
            </div>
            <div className="col-4 col-sm-12">
              <label for="city" className="form-label">
                city
              </label>
              <input
                type="text"
                className="form-control"
                name="city"
                id="city"
                placeholder="City"
              />
            </div>
          </div>
          <label for="gender" className="form-label mt-2">
            Gender
          </label>
          <div className="row mt-2">
            <div className="col-2">
              <input
                type="radio"
                className="form-check-input"
                name="gender"
                id="male"
              />
              <label for="male" className="form-check-label">
                Male
              </label>
            </div>
            <div className="col-2">
              <input
                type="radio"
                className="form-check-input"
                name="gender"
                id="female"
                checked
              />
              <label for="female" className="form-check-label">
                Female
              </label>
            </div>
          </div>
          <label for="country" className="form-label mt-2">
            Country
          </label>
          <select className="form-select">
            <option value="0">..Enter your branch</option>
            <option value="CI">Civil</option>
            <option value="ME">Mechanical</option>
            <option value="CS">CSE</option>
            <option value="EE">EEE</option>
          </select>

          <button className="btn btn-primary mt-3" onClick={submitHandler}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}
