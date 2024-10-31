import { Stack, Text } from "@mantine/core";
import { Navbar } from "../components";

export function Cart() {
  return (
    <Stack>
      <Navbar />
      <Text size="xl">Welcome to the cart page!</Text>
    </Stack>
  );
}
