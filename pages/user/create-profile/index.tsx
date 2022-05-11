import {
  Button,
  Center,
  Divider,
  Group,
  Paper,
  Stack,
  TextInput,
  Title,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import type { NextPage } from "next";
import { useState } from "react";
import { formatPhoneNumber } from "../../../lib/utils";

interface Props {}

const CreateProfilePage: NextPage<Props> = () => {
  const [phone, setPhone] = useState<string>("");

  return (
    <Center
      style={{
        height: "calc(100vh - 80px)",
        minHeight: "700px",
        transform: "translateY(-50px)",
      }}
    >
      <Paper
        shadow="sm"
        p={20}
        style={{ width: "90%", minWidth: "320px", maxWidth: "800px" }}
      >
        <Title align="center" style={{ marginBottom: "2rem" }}>
          Create Your Profile
        </Title>
        {/* username, first, last, dob, phone, church */}
        <form>
          <Stack spacing={16}>
            <TextInput label="Username" />

            <Group grow mt="sm">
              <TextInput label="First Name" />
              <TextInput label="Last Name" />
            </Group>
            <Group grow>
              <DatePicker label="Date of Birth" />
              <TextInput
                label="phone Number"
                value={phone}
                onChange={(e) =>
                  setPhone(formatPhoneNumber(e.currentTarget.value))
                }
              />
            </Group>
            <TextInput label="Which Church do you attend?" />
            <Button mt="lg">Create Profile</Button>
          </Stack>
        </form>
      </Paper>
    </Center>
  );
};

export default CreateProfilePage;
