import { Button, Group, Header, Input, Text, Title } from "@mantine/core";
import { signInWithPopup } from "firebase/auth";
import { Search } from "tabler-icons-react";
import { cAuth, googleAuthProvider } from "../../firebase/clientConfig";
import { createUserRecord } from "../../firebase/queries/userRecord";
import ColorModeSwitcher from "../components/ColorModeSwitcher";
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
      <Title>Desert Collections</Title>
      <Input
        rightSection={<Search color="gray" size={16} />}
        placeholder="Search"
        radius="sm"
        styles={(theme) => ({
          defaultVariant: {
            "&:focus": { borderColor: theme.colors.brandAccent },
          },
          wrapper: {
            width: "30%",
            minWidth: "340px",
          },
        })}
      />
      <Group>
        {!loading && (!dcUser ? <SignInButton /> : <SignOutButton />)}
        <ColorModeSwitcher />
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

  return <Button onClick={signInWithGoogle}>Sign In</Button>;
}

function SignOutButton() {
  const signOut = () => {
    cAuth.signOut();
  };

  return <Button onClick={signOut}>Sign Out</Button>;
}
