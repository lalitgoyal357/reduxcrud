import axios from "axios";
import { GET_USER, DELETE_USER,ADD_USER, SINGLE_USER, EDIT_USER } from "./type";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


/// user npm run server command before start
const getUsers = (users) => ({
  type: GET_USER,
  payload: users,
});

const userDelt = (id) => ({
  type: DELETE_USER,
  payload: id,
});

const userAdd = () => ({
  type: ADD_USER,

});
const userUpdate = () => ({
  type: EDIT_USER,

});
const singleAdd = (user) => ({
  type: SINGLE_USER,
  payload: user,

});

export const loadUsers = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:3300/user")
      .then((res) => {
        console.log("esponose", res.data);
        dispatch(getUsers(res.data));
      })
      .catch((err) => console.log(err));
  };
};
export const singleUsers = (id) => { 
  console.log("id",id)
  return function (dispatch) {
    axios
      .get(`http://localhost:3300/user/${id.id}`)
      .then((res) => {
        console.log("singleusers", res.data);
        dispatch(singleAdd(res.data));
      })
      .catch((err) => console.log(err));
  };
};

export const deleteUser = (id) => {
  return function (dispatch) {
    axios
      .delete(`http://localhost:3300/user/${id}`)
      .then((res) => {
        // console.log("esponose",res.data)
        dispatch(userDelt());
        dispatch(loadUsers());
      })
      .catch((err) => console.log(err));
  };
};

export const addUser = (user) => {
  return function (dispatch) {
    axios
      .post("http://localhost:3300/user",user)
      .then(async(res) => {
        toast.success('user Added', {
          autoClose: 1000,
          hideProgressBar: true,
          position: 'top-center',
        });

        // console.log("esponose",res.data)
        dispatch(userAdd());
        dispatch(loadUsers());
      })
      .catch((err) => console.log(err));
  };
};
export const upadateUser = (user,ID) => {
  return function (dispatch) {
    axios
      .put(`http://localhost:3300/user/${ID}`,user )
      .then((res) => {
        // console.log("esponose",res.data)
        dispatch(userUpdate());
        dispatch(loadUsers());

      })
      .catch((err) => console.log(err));
  };
};

// export const loadUsers = () => (dispatch) => {
//     axios
//       .get(`${process.env.REACT_APP_API}`)
//       .then((res) => {
//           console.log("RES",res)
//         dispatch(getUsers(res.data));
//       })
//       .catch((err) => console.log(err));
//   };
