import { Button } from "@mantine/core";
import { signInWithPopup } from "firebase/auth";
import { BrandGoogle } from "tabler-icons-react";
import { cAuth, googleAuthProvider } from "../../../../firebase/clientConfig";

export default function SignInWithGoogleButton() {
  async function signInWithGoogle() {
    await signInWithPopup(cAuth, googleAuthProvider);
  }

  return (
    <Button
      leftIcon={<BrandGoogle />}
      style={{ width: "100%", height: "50px" }}
      variant="outline"
      onClick={signInWithGoogle}
    >
      Google Sign-In
    </Button>
  );
}
