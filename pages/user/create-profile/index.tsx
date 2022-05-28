import {
  Button,
  Center,
  Grid,
  Group,
  Paper,
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
        style={{
          width: "98%",
          minWidth: "320px",
          maxWidth: "700px",
          padding: "30px 16px",
        }}
      >
        <Title align="center" style={{ marginBottom: "2rem" }}>
          Create Your Profile
        </Title>
        <form>
          <Grid gutter="sm">
            <Grid.Col span={12} mb="sm">
              <TextInput
                label="Username"
                placeholder="Choose a username"
                required
              />
            </Grid.Col>

            <Grid.Col xs={12} sm={6}>
              <TextInput label="First Name" placeholder="First Name" />
            </Grid.Col>

            <Grid.Col xs={12} sm={6}>
              <TextInput label="Last Name" placeholder="Last Name" />
            </Grid.Col>

            <Grid.Col xs={12} sm={6}>
              <DatePicker
                label="Date of Birth"
                placeholder="Select Date of Birth"
              />
            </Grid.Col>

            <Grid.Col xs={12} sm={6}>
              <TextInput
                label="Phone Number"
                placeholder="Phone Number"
                value={phone}
                onChange={(e) =>
                  setPhone(formatPhoneNumber(e.currentTarget.value))
                }
              />
            </Grid.Col>

            <Grid.Col span={12}>
              <TextInput
                label="Which Church do you attend?"
                placeholder="Please spell out the full name of your Church"
              />
            </Grid.Col>

            <Grid.Col span={12}>
              <Button style={{ width: "100%" }} mt="lg">
                Create Profile
              </Button>
            </Grid.Col>
          </Grid>
        </form>
      </Paper>
    </Center>
  );
};

export default CreateProfilePage;
