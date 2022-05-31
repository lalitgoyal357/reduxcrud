import { GET_USER, DELETE_USER,ADD_USER, SINGLE_USER, EDIT_USER } from "../action/type";
const initialstate = {
  users: [],
  user: {},
  loading: true,
};

const usersReducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    
      case EDIT_USER:   
    return {
        ...state,

        loading: false,
      };
      case DELETE_USER:
        
    return {
        ...state,
        item: state.users.filter((users)=>users.id != action.payload),
        loading: false,
      };
      case ADD_USER:
        return {
          ...state,
        
          loading: false,
        };
        case SINGLE_USER:
        
          return {
            ...state,
            user: action.payload,
            loading: false,

          };
          console.log("usrr",action.payload)
    default:
      return state;
  }
};

export default usersReducer;
