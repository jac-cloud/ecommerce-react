import { Stack, Text } from "@mantine/core";
import { Navbar } from "../components";

export function Products() {
  return (
    <Stack>
      <Navbar />
      <Text size="xl">Welcome to the products page!</Text>
    </Stack>
  );
}