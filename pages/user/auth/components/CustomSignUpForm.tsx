import { Button, PasswordInput, Stack, TextInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { cAuth } from "../../../../firebase/clientConfig";
import signUpFormSchema from "../../../../lib/yupFormSchemas/signUpFormSchema";

interface FormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

export default function CustomSignUpForm() {
  const form = useForm<FormValues>({
    schema: yupResolver(signUpFormSchema),
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const signUp = async (values: FormValues) => {
    try {
      await createUserWithEmailAndPassword(
        cAuth,
        values.email,
        values.password
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={form.onSubmit(signUp)}>
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
        <PasswordInput
          required
          placeholder="Confirm Password"
          label="Confirm Password"
          {...form.getInputProps("confirmPassword")}
        />
        <Button type="submit" mt={10}>
          Sign Up
        </Button>
      </Stack>
    </form>
  );
}
