const initialState = {
    users: [
       { name: "kelvin", email: "021882828", gen: "Accra" },
    //    { name: "Henry", email: "Henry@email.com", gen: 20 },
    //   { name: "Jamil", email: "Jamil@email.com", gen: 20 },
    ],
  
    students: [],
    number: 0,
  };
  
  const usersReducers = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_USER":
        return { ...state, users: [...state.users, action.payload] };
  
      case "EDIT_USER":
        return state;
  
      case "DELETE_USER":
        return state;
  
      default:
        return state;
    }
  };
  
  export default usersReducers;
  