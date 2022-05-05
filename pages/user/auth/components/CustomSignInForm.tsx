import { Button, PasswordInput, Stack, TextInput } from "@mantine/core";

interface Props {}

export default function CustomSignInForm(props: Props) {
  return (
    <Stack spacing={10}>
      <TextInput label="Email" placeholder="Email" />
      <PasswordInput placeholder="Password" label="Password" />
      <Button mt={10}>Sign In</Button>
    </Stack>
  );
}
