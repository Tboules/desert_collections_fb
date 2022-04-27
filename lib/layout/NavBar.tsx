import { signInWithPopup } from "firebase/auth";
import { cAuth, googleAuthProvider } from "../../firebase/clientConfig";
import { useUserContext } from "../context/UserContext";

interface Props {}

export default function NavBar(props: Props) {
  const { dcUser } = useUserContext();

  return (
    <nav className="nav-bar">
      <h1>hello NavBar</h1>
      {!dcUser ? <SignInButton /> : <SignOutButton />}
    </nav>
  );
}

function SignInButton() {
  const signInWithGoogle = async () => {
    const res = await signInWithPopup(cAuth, googleAuthProvider);
    console.log(res);
  };

  return <button onClick={signInWithGoogle}>Sign In</button>;
}

function SignOutButton() {
  const signOut = () => {
    cAuth.signOut();
  };

  return <button onClick={signOut}>Sign Out</button>;
}
