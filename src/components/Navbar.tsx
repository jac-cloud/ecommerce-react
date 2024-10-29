import { ActionIcon, Container, Group, Stack, Text } from "@mantine/core";
import { IconUserCircle, IconShoppingCart } from "@tabler/icons-react";

export function Navbar() {
  return (
    <Stack>
        <Group>
          <Container>
            <Text>Hello</Text>
          </Container>

          <Container>
            <ActionIcon
                  component="a"
                  href="#hello"
                  variant="transparent"
                  onClick={(event) => event.preventDefault()}
                  >
                  <IconShoppingCart />
              </ActionIcon>
              <ActionIcon
                component="a"
                href="#hello"
                variant="transparent"
                onClick={(event) => event.preventDefault()}
                >
                  <IconUserCircle />
              </ActionIcon>
          </Container>          
            
        </Group>
    </Stack>
  );
}