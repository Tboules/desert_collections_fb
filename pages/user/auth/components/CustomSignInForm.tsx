import { Button, PasswordInput, Stack, TextInput } from "@mantine/core";
import { useForm, yupResolver } from "@mantine/form";
import { signInWithEmailAndPassword } from "firebase/auth";
import { cAuth } from "../../../../firebase/clientConfig";
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

  const signIn = async (values: FormValues) => {
    try {
      await signInWithEmailAndPassword(cAuth, values.email, values.password);
    } catch (error) {
      console.log(error);
    }
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
