import {
  Center,
  Divider,
  Paper,
  SegmentedControl,
  Stack,
  Title,
} from "@mantine/core";
import type { NextPage } from "next";
import { useState } from "react";
import CustomSignInForm from "./components/CustomSignInForm";
import CustomSignUpForm from "./components/CustomSignUpForm";
import SignInWithGoogleButton from "./components/SignInWithGoogleButton";

interface Props {}

const UserAuthPage: NextPage<Props> = () => {
  const [formType, setFormType] = useState("sign-in");
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
        style={{ width: "25%", minWidth: "320px", maxWidth: "450px" }}
      >
        <Stack style={{ marginBottom: "2rem" }} spacing={0}>
          <Title align="center"> Welcome</Title>
          <SegmentedControl
            size="xs"
            style={{ width: "60%", margin: "auto" }}
            value={formType}
            onChange={setFormType}
            data={[
              { label: "Sign In", value: "sign-in" },
              { label: "Sign Up", value: "sign-up" },
            ]}
          />
        </Stack>

        {formType == "sign-in" ? <CustomSignInForm /> : <CustomSignUpForm />}
        <Divider my="xl" label="or" labelPosition="center" />
        <SignInWithGoogleButton />
      </Paper>
    </Center>
  );
};

export default UserAuthPage;
