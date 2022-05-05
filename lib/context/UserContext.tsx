import { User } from "firebase/auth";
import { useRouter } from "next/router";
import { createContext, useContext, useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { cAuth } from "../../firebase/clientConfig";
import { getUserRecord } from "../../firebase/queries/userRecord";

interface Props {
  dcUser: UserRecord | null;
  loading: boolean;
}

export const UserContext = createContext<Props | null>(null);

export const UserContextProvider: React.FC = ({ children }) => {
  const router = useRouter();
  const [dcUser, setDcUser] = useState<UserRecord | null>(null);
  const [user, loading, error] = useAuthState(cAuth);

  const retrieveAndValidateUserRecord = async (u: User) => {
    const userRecord = await getUserRecord(u.uid);
    if (userRecord) {
      setDcUser(userRecord);
    }

    if (!userRecord) {
      router.push(`/user/create-profile`);
    }
  };

  useEffect(() => {
    if (user) {
      retrieveAndValidateUserRecord(user);
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
