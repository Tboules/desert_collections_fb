import { Button, Group, Header } from "@mantine/core";
import { signInWithPopup } from "firebase/auth";
import { cAuth, googleAuthProvider } from "../../../firebase/clientConfig";
import { createUserRecord } from "../../../firebase/queries/userRecord";
import ColorModeSwitcher from "../../components/ColorModeSwitcher";
import LogoStack from "../../components/LogoStack";
import { useUserContext } from "../../context/UserContext";
import AddQuoteButton from "./AddQuoteButton";
import AppSearch from "./AppSearch";
import UserPageLink from "./UserPageLink";

export default function TopNav() {
  const { dcUser, loading } = useUserContext();

  return (
    <Header
      height={80}
      sx={(theme) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0px 1rem",
        backgroundColor:
          theme.colorScheme === "dark"
            ? "rgba(0, 0, 0, 0.92)"
            : "rgba(255, 255, 255, 0.98)",
      })}
      fixed
    >
      <LogoStack />
      <AppSearch />
      <Group spacing="xs">
        {!loading && (!dcUser ? <SignInButton /> : <SignOutButton />)}
        <UserPageLink />
        <ColorModeSwitcher />
        <AddQuoteButton />
      </Group>
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

  return (
    <Button color="brandAccent" variant="outline" onClick={signInWithGoogle}>
      Sign In
    </Button>
  );
}

function SignOutButton() {
  const signOut = () => {
    cAuth.signOut();
  };

  return <Button onClick={signOut}>Sign Out</Button>;
}
