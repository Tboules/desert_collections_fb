import { ActionIcon } from "@mantine/core";
import Link from "next/link";
import { User } from "tabler-icons-react";

export default function UserPageLink() {
  return (
    <Link href="/user/profile" passHref>
      <ActionIcon component="a" color="brandAccent" size={36} variant="outline">
        <User />
      </ActionIcon>
    </Link>
  );
}
