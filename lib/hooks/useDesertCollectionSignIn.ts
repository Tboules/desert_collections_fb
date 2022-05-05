import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { cAuth, googleAuthProvider } from "../../firebase/clientConfig";

export enum SignInProvider {
  GOOGLE,
  CUSTOM,
}

export const useDesertCollectionSignIn = (p: SignInProvider) => {
  const providerIsGoogle = p == SignInProvider.GOOGLE;
  const [userRecord, setUserRecord] = useState<UserRecord | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const signIn = async () => {
    setLoading(true);
    if (providerIsGoogle) {
      const res = await signInWithPopup(cAuth, googleAuthProvider);
    }
  };

  return {
    providerIsGoogle,
    signIn,
  };
};

// const signInWithGoogle = async () => {
//   try {
//     const res = await signInWithPopup(cAuth, googleAuthProvider);

//     const uRecord = await getUserRecord(res);
//     console.log(uRecord);
//   } catch (error) {
//     console.log(error);
//   }
// };
