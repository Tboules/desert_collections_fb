import { Button, PasswordInput, Stack, TextInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import signInFormSchema from "../../../../lib/yupFormSchemas/signInFormSchema";

interface FormValues {
  email: string;
  password: string;
}

export default function CustomSignInForm() {
  const form = useForm<FormValues>({
    schema: yupResolver(signInFormSchema),
    initialValues: {
      email: "",
      password: "",
    },
  });

  const signIn = (values: FormValues) => {
    console.log(values);
  };

  return (
    <form onSubmit={form.onSubmit(signIn)}>
      <Stack spacing={10}>
        <TextInput
          required
          label="Email"
          placeholder="Email"
          {...form.getInputProps("email")}
        />
        <PasswordInput
          required
          placeholder="Password"
          label="Password"
          {...form.getInputProps("password")}
        />
        <Button type="submit" mt={10}>
          Sign In
        </Button>
      </Stack>
    </form>
  );
}
