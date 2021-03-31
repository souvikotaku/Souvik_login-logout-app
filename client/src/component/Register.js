import React, { useEffect, useState } from "react";
// import { Switch, Redirect, BrowserRouter, Route } from "react-router-dom";
// import Sitefooter from "../Footers/Sitefooter";
import "./newStyle2.css";
// import "../bootstrap/dist/css/bootstrap.min.css";

// import "bootstrap/dist/css/bootstrap/min.css";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
export default function Register() {
  useEffect(() => {
    if (
      localStorage.getItem("token") &&
      localStorage.getItem("role") === "user"
    ) {
      history.push("/dashboard");
    }
  });

  const authAxios = axios.create({
    baseURL: "https://souvik-login-app.herokuapp.com",
  });

  let form_data = {};
  const [name, setName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const history = useHistory();

  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const { register, handleSubmit, errors, watch } = useForm();

  const onSubmit = (data) => {
    const newDate = new Date(date).toLocaleDateString("en-fr", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    let form_data = {
      name: `${name} ${lastname}`,
      email: email,
      birthdate: newDate,
      password: password,
    };

    console.log(form_data);

    authAxios.post("/newusers/add", form_data).then((res) => {
      if (res.data) {
        if (password.length < 6) {
          alert("Password should be atleast 6 characters long");
        } else if (password !== confirmpassword) {
          alert("passwords do not match");
        } else {
          alert("Registered successfully");
          window.location = "/register";
        }
        //   window.location = "/Signin";
      } else {
        alert("Not able to register");
      }
    });
  };

  return (
    <div>
      <video
        src="/videos/eduvid2.mp4"
        autoPlay
        loop
        muted
        style={{ width: "100%", height: "auto" }}
      />
      <div className="register " class="registerback">
        <div
          className="register_container shadow"
          class="colorbox"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <form onSubmit={handleSubmit(onSubmit)} class=" newrow">
            {/* <h5>First Name</h5> */}
            <h3 class="section-header">Customer Signup</h3>
            <br />
            <div class=" indv">
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="fa fa-user fa" aria-hidden="true"></i>
                </span>

                <input
                  placeholder="First Name"
                  name="firstname"
                  class="form-control"
                  type="text"
                  required
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />
              </div>
            </div>
            <div class=" indv">
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="fa fa-user fa" aria-hidden="true"></i>
                </span>

                <input
                  placeholder="Last Name"
                  name="lastname"
                  class="form-control"
                  type="text"
                  required
                  onChange={(event) => {
                    setLastName(event.target.value);
                  }}
                />
              </div>
            </div>
            <div class=" indv">
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="fa fa-user fa" aria-hidden="true"></i>
                </span>

                <input
                  placeholder="Enter Email"
                  name="firstname"
                  class="form-control"
                  type="email"
                  required
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
            </div>

            <div class=" indv">
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="fa fa-user fa" aria-hidden="true"></i>
                </span>

                <DatePickerComponent
                  placeholder="Enter Birthdate (optional"
                  name="birthdate"
                  class="form-control"
                  onChange={(event) => {
                    setDate(event.target.value);
                  }}
                />
              </div>
            </div>

            <div class="indv">
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="fa fa-lock fa" aria-hidden="true"></i>
                </span>
                <input
                  placeholder="Password"
                  name="password"
                  class="form-control"
                  required
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  type="password"
                ></input>
                {errors.password && errors.password.message}
              </div>
            </div>
            {/* <h5>Confirm Password</h5> */}
            <div class="indv">
              <div class="input-group">
                <span class="input-group-addon">
                  <i class="fa fa-lock fa" aria-hidden="true"></i>
                </span>
                <input
                  placeholder="Confirm Password"
                  name="confirm password"
                  class="form-control"
                  required
                  onChange={(event) => {
                    setConfirmPassword(event.target.value);
                  }}
                  type="password"
                ></input>
              </div>
            </div>
            <br></br>
            <div class="col-12">
              <div class="custom-control custom-control-alternative custom-checkbox">
                <input
                  class="custom-control-input"
                  id="customCheckRegister"
                  type="checkbox"
                  required
                ></input>
                <label class="custom-control-label" for="customCheckRegister">
                  <span>
                    I agree with the <a href="#pablo">Privacy Policy</a>
                  </span>
                </label>
              </div>
            </div>
            <br></br>
            <div class="container">
              <div class="row">
                <div class="col">
                  <button
                    class="btn btn-danger form-control  btn-block"
                    onClick={() => {
                      window.location = "/";
                    }}
                  >
                    Cancel
                  </button>
                </div>
                <div class="col">
                  <button
                    id="btnSubmit"
                    class="btn btn-primary form-control btn-block"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
            <span>
              Have a user account? <Link to="/">Sign In</Link>
            </span>
            <br />
            <p style={{ color: "lightgray" }}>Made by Souvik Das in 2021</p>
          </form>
        </div>
      </div>
      {/* <Sitefooter /> */}
    </div>
  );
}
