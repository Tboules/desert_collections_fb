import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { cAuth, googleAuthProvider } from "../../firebase/clientConfig";

export enum SignInProvider {
  GOOGLE,
  CUSTOM,
}

export const useDesertCollectionSignIn = (p: SignInProvider) => {
  const [loading, setLoading] = useState<boolean>(false);

  const signIn = async () => {
    setLoading(true);

    switch (p) {
      case SignInProvider.GOOGLE:
        await signInWithPopup(cAuth, googleAuthProvider);
        break;
      default:
        break;
    }
  };

  return {
    loading,
    signIn,
  };
};
