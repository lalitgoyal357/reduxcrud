import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { upadateUser, singleUsers } from "../redux/action/action";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.userdata);
  console.log("useselector", user);
  const history = useNavigate();
  const [error, setError] = useState("");

  const [data, setData] = useState({
    name: "",
    email: "",
    id: "",
    address: "",
  });

  const { name, email, id, address } = data;

  const Id = useParams();
  console.log("edit id", Id);

  useEffect(() => {
    if (user) {
      setData({ ...user });
    }
  }, [user]);

  useEffect(() => {
    dispatch(singleUsers(Id));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !email || !id) {
      setError("please fill the form");
    } else {
      dispatch(upadateUser(data,id));
      history("/");
      setError("");
    }
  };

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  return (
    <>
      <Button
        variant="contained"
        type="submit"
        color="secondary"
        style={{ width: "100px", marginTop: "20px" }}
        onClick={() => history("/")}
      >
        GO BACK
      </Button>

      <h4>Edit user</h4>
      <h4>{error}</h4>
      <form
        onSubmit={handleSubmit}
        noValidate
        sx={{
          marginTop: 20,
          "& > :not(style)": { m: 1, width: "700ch" },
        }}
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          type="text"
          label="ID"
          name="id"
          value={id || ""}
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          type="text"
          label="Name"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          type="email"
          label="Email"
          name="email"
          value={email || ""}
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          type="text"
          label="Address"
          name="address"
          value={address || ""}
          onChange={handleInputChange}
        />
        <br />
        <Button type="submit" style={{ width: "700px", marginTop: "20px" }}>
          Update
        </Button>
      </form>
    </>
  );
};

export default EditUser;

// import React from 'react'

// const Edituser = () => {
//   return (
//     <div>Edituser</div>
//   )
// }

// export default Edituser
