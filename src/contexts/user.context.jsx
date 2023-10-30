import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListener,
  signOutUser,
} from "../utils/firebase.utils/firebase.utils";

//actual context value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

//this is the component we are exporting that gets wrapped around anything that needs access to this context
export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  signOutUser();

  useEffect(() => {
    const unsub = onAuthStateChangedListener((user) => {
      console.log(user);
    });

    return unsub;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
