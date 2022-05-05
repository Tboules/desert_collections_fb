import { Button } from "@mantine/core";
import { BrandGoogle } from "tabler-icons-react";

interface Props {}

export default function SignInWithGoogleButton(props: Props) {
  return (
    <Button
      leftIcon={<BrandGoogle />}
      style={{ width: "100%", height: "50px" }}
      variant="outline"
    >
      Google Sign-In
    </Button>
  );
}
