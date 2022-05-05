import { Button, Group, Header } from "@mantine/core";
import { cAuth } from "../../../firebase/clientConfig";
import ColorModeSwitcher from "../../components/ColorModeSwitcher";
import LogoStack from "../../components/LogoStack";
import AddQuoteButton from "./AddQuoteButton";
import AppSearch from "./AppSearch";
import UserPageLink from "./UserPageLink";

export default function TopNav() {
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
            : "rgba(255, 255, 255, 0.95)",
      })}
      fixed
    >
      <LogoStack />
      <AppSearch />
      <Group spacing="xs">
        <SignOutButton />
        <ColorModeSwitcher />
        <UserPageLink />
        <AddQuoteButton />
      </Group>
    </Header>
  );
}

function SignOutButton() {
  const signOut = () => {
    cAuth.signOut();
  };

  return <Button onClick={signOut}>Sign Out</Button>;
}
