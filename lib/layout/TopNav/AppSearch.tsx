import { Input } from "@mantine/core";
import { Search } from "tabler-icons-react";

export default function AppSearch() {
  return (
    <Input
      rightSection={<Search color="gray" size={16} />}
      placeholder="Search"
      radius="sm"
      size="lg"
      styles={(theme) => ({
        defaultVariant: {
          "&:focus": { borderColor: theme.colors.brandAccent },
        },
        wrapper: {
          width: "40%",
          minWidth: "340px",
        },
      })}
    />
  );
}
