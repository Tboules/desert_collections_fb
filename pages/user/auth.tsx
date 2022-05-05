import {
  Button,
  Center,
  Divider,
  Paper,
  PasswordInput,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import type { NextPage } from "next";
import { BrandGoogle } from "tabler-icons-react";

interface Props {}

const UserAuthPage: NextPage<Props> = () => {
  return (
    <Center
      style={{
        height: "calc(100vh - 80px)",
        minHeight: "700px",
        transform: "translateY(-50px)",
      }}
    >
      <Paper shadow="xs" p={20} style={{ width: "25%", minWidth: "320px" }}>
        <Title align="center" style={{ marginBottom: "2rem" }}>
          {" "}
          Welcome
        </Title>
        <Stack spacing={10}>
          <TextInput label="Email" placeholder="Email" />
          <PasswordInput placeholder="Password" label="Password" />
          <Button mt={10}>Sign In</Button>
        </Stack>
        <Divider my="xl" label="or" labelPosition="center" />
        <Button
          leftIcon={<BrandGoogle />}
          style={{ width: "100%", height: "50px" }}
          variant="outline"
        >
          Google Sign-In
        </Button>
      </Paper>
    </Center>
  );
};

export default UserAuthPage;
