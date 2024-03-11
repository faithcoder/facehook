import { useReducer } from "react";
import { ProfileContext } from "../context";
import {
  initialState,
  profileReducer as ProfileReducers,
} from "../reducers/ProfileReducers";

const profileProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProfileReducers, initialState);

  return (
    <ProfileContext.Provider value={{ state, dispatch }}>
      {children}
    </ProfileContext.Provider>
  );
};

export default profileProvider;
