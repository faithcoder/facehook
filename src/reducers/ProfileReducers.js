import { actions } from "../actions/index.js";

const initialState = {
  user: null,
  posts: [],
  loading: false,
  error: null,
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.profile.DATA_FETCHING:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case actions.profile.DATA_FETCHED:
      return {
        ...state,
        user: action.data.user,
        posts: action.data.posts,
        loading: false,
        error: null,
      };
    case actions.profile.DATA_FETCH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    // case actions.profile.USER_DATA_EDITED:
    //   return {
    //     ...state,
    //     user: action.payload.user,
    //   };
    // case actions.profile.IMAGE_UPDATED:
    //   return {
    //     ...state,
    //     user: action.data.user,
    //   };
    default:
      return state;
  }
};
export { initialState, profileReducer };
