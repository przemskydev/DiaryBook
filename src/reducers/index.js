import { AUTH_SUCCESS, ADD_SUCCESS, REMOVE_SUCCESS, FETCH_SUCCESS } from 'actions';

const initialState = {
  userID: '5ec3f0c6cda6212f2ca7ad67',
};

// eslint-disable-next-line no-unused-vars
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        // eslint-disable-next-line no-underscore-dangle
        [action.payload.itemType]: [...action.payload.data],
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        // eslint-disable-next-line no-underscore-dangle
        userID: action.payload.data._id,
      };
    case ADD_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [...state[action.payload.itemType], action.payload.data],
      };
    case REMOVE_SUCCESS:
      return {
        ...state,
        [action.payload.itemType]: [
          // eslint-disable-next-line no-underscore-dangle
          ...state[action.payload.itemType].filter((item) => item._id !== action.payload.id),
        ],
      };
    default:
      return state;
  }
};

export default rootReducer;
