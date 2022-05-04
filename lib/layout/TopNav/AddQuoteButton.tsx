import { ActionIcon } from "@mantine/core";
import Link from "next/link";
import { Plus } from "tabler-icons-react";

export default function AddQuoteButton() {
  return (
    <Link href="/add-quote" passHref>
      <ActionIcon component="a" color="brandMain" size={36} variant="filled">
        <Plus />
      </ActionIcon>
    </Link>
  );
}
