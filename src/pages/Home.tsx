import { Stack, Text } from "@mantine/core";
import { Navbar } from "../components";
export function Home() {
    return (
        <Stack>
            <Navbar />
            <Text size="xl">Welcome to the home page!</Text>
        </Stack>
    );
}