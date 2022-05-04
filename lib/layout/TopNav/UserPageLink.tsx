import { ActionIcon } from "@mantine/core";
import { User } from "tabler-icons-react";

interface Props {}

export default function UserPageLink(props: Props) {
  return (
    // <Link href="/user/auth" passHref>
    <ActionIcon component="a" color="brandAccent" size={36} variant="outline">
      <User />
    </ActionIcon>
    // </Link>
  );
}
