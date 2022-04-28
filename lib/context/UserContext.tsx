import { User } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { cAuth } from "../../firebase/clientConfig";

interface Props {
  dcUser: User | null;
  loading: boolean;
}

export const UserContext = createContext<Props | null>(null);

export const UserContextProvider: React.FC = ({ children }) => {
  const [dcUser, setDcUser] = useState<User | null>(null);
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
    <UserContext.Provider value={{ dcUser, loading }}>
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
