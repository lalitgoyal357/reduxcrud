import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/action/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Adduser = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [error, setError] = useState("");
  const [data, setData] = useState({
    name: "",
    email: "",
    id: "",
    address: "",
  });
  const { name, email, id, address } = data;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !address || !email || !id) {
      toast.error("Please fill the form", {
        autoClose: 1500,
        hideProgressBar: true,
        position: "top-center",
      });
    } else {
      dispatch(addUser(data));
      history("/");
      setError("");

      toast.success("dataadded");
    }
  };

  // const handleSubmit=(e)=>{
  //   e.preventDefault();

  //     dispatch(addUser(data));
  //     history("/")
  //     setError("")

  //   }

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

      <h4>Add user</h4>
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
          value={id}
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
          value={email}
          onChange={handleInputChange}
        />
        <br />
        <TextField
          id="standard-basic"
          type="text"
          label="Address"
          name="address"
          value={address}
          onChange={handleInputChange}
        />
        <br />
        <ToastContainer />
        <Button type="submit" style={{ width: "700px", marginTop: "20px" }}>
          SUBMIT
        </Button>
      </form>
    </>
  );
};

export default Adduser;
