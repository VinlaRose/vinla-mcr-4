
export const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_DATA": 
        return {
          ...state,
        //   data: [...state.data, action.payload], 
        //   filteredData: [...state.filteredData, action.payload], 
        };
      case "UPDATE":
        return {
          ...state,
          filteredData: action.payload,
        };
        case "SINGLE_POST":
          return {
            ...state,
            singlePostCurrent: action.payload,
          };
        
      default:
        return state;
    }
  };
  
  