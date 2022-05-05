import { AppShell, Container } from "@mantine/core";
import React from "react";
import TopNav from "./TopNav";

const containerStyles: React.CSSProperties = {
  marginTop: "80px",
  // maxWidth: "1440px",
  minHeight: "calc(100vh - 80px)",
};

export const Layout: React.FC = ({ children }) => {
  return (
    <AppShell
      padding={0}
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
      <Container px={0} fluid style={containerStyles}>
        {children}
      </Container>
    </AppShell>
  );
};
