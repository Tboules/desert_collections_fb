import { ActionIcon, useMantineColorScheme } from "@mantine/core";
import { Moon, Sun } from "tabler-icons-react";

export default function ColorModeSwitcher() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <ActionIcon
      color="brandAccent"
      size={36}
      variant="outline"
      onClick={() => toggleColorScheme()}
    >
      {dark ? <Sun size={22} /> : <Moon size={18} />}
    </ActionIcon>
  );
}
