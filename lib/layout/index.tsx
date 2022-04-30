import { AppShell, Header } from "@mantine/core";
import React from "react";
import TopNav from "./TopNav";

export const Layout: React.FC = ({ children }) => {
  return (
    <AppShell
      padding="md"
      header={<TopNav />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
};
