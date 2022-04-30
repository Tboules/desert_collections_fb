import { Center, Header } from "@mantine/core";
import { signInWithPopup } from "firebase/auth";
import { cAuth, googleAuthProvider } from "../../firebase/clientConfig";
import { createUserRecord } from "../../firebase/queries/userRecord";
import { useUserContext } from "../context/UserContext";

export default function TopNav() {
  const { dcUser, loading } = useUserContext();

  return (
    <Header
      height={80}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0px 1rem",
      }}
    >
      <h1>Desert Collections</h1>
      {!loading && (!dcUser ? <SignInButton /> : <SignOutButton />)}
    </Header>
  );
}

function SignInButton() {
  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(cAuth, googleAuthProvider);

      createUserRecord(res);
    } catch (error) {
      console.log(error);
    }
  };

  return <button onClick={signInWithGoogle}>Sign In</button>;
}

function SignOutButton() {
  const signOut = () => {
    cAuth.signOut();
  };

  return <button onClick={signOut}>Sign Out</button>;
}
