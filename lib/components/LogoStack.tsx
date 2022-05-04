import { Group, Stack, Title } from "@mantine/core";
import Image from "next/image";
import Link from "next/link";

export default function LogoStack() {
  return (
    <Link href="/" passHref>
      <Group spacing="xs" style={{ cursor: "pointer" }}>
        <Image
          alt="logo"
          src="/assets/logo/Desert_Collections_logo.svg"
          height={42}
          width={42}
        />
        <Stack spacing={2}>
          <Title style={{ lineHeight: 1 }} order={5}>
            Desert
          </Title>
          <Title style={{ lineHeight: 1 }} order={5}>
            Collections
          </Title>
        </Stack>
      </Group>
    </Link>
  );
}
