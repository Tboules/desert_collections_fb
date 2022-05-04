import { ActionIcon } from "@mantine/core";
import { useRouter } from "next/router";
import { User } from "tabler-icons-react";
import { useUserContext } from "../../context/UserContext";

export default function UserPageLink() {
  const router = useRouter();
  const { dcUser, loading } = useUserContext();

  const routeUser = () => {
    if (loading) return;

    if (!dcUser) {
      router.push("/user/auth");
    } else {
      router.push(`/user/${dcUser.uid}`);
    }
  };

  return (
    <ActionIcon
      component="a"
      color="brandAccent"
      size={36}
      variant="outline"
      onClick={routeUser}
    >
      <User />
    </ActionIcon>
  );
}
