import { createContext, useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { cAuth } from "../../firebase/clientConfig";

export const UserContext = createContext<any>({});

export const UserContextProvider: React.FC = ({ children }) => {
  const [dcUser, setDcUser] = useState<any>();
  const [user, loading, error] = useAuthState(cAuth);

  useEffect(() => {
    if (user) {
      setDcUser(user);
    }

    if (!user) {
      setDcUser(null);
    }
  }, [user, loading, error]);

  return (
    <UserContext.Provider value={{ dcUser, setDcUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("User Context used incorrectly");
  }

  return context;
};
