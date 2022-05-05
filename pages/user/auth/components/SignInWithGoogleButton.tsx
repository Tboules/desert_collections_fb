import { Button } from "@mantine/core";
import { BrandGoogle } from "tabler-icons-react";
import {
  SignInProvider,
  useDesertCollectionSignIn,
} from "../../../../lib/hooks/useDesertCollectionSignIn";

export default function SignInWithGoogleButton() {
  const { providerIsGoogle, signIn } = useDesertCollectionSignIn(
    SignInProvider.GOOGLE
  );

  return (
    <Button
      leftIcon={<BrandGoogle />}
      style={{ width: "100%", height: "50px" }}
      variant="outline"
      onClick={signIn}
    >
      Google Sign-In
    </Button>
  );
}
