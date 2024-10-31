import { ActionIcon, Box, Button, Group, Menu, MenuDivider, rem, Text, UnstyledButton } from "@mantine/core";
import { IconUserCircle, IconShoppingCart, IconArrowBarRight } from "@tabler/icons-react";

export function Navbar() {
  const loged = false;
  return (
    <Box p="sm" style={{borderBottom:"1px solid"}}>
        <Group justify="space-between" h="100%">
            <Text size="xl" fw={700}>Ecommerce</Text>
            <Group h="100%">
              <UnstyledButton 
                component="a" href="#hello" 
                onClick={(event) => event.preventDefault()}
                onMouseOver={(event) => event.currentTarget.style.color = "green"}
                onMouseOut={(event) => event.currentTarget.style.color = "black"}
              >
                <Text fw={510}>Home</Text>
              </UnstyledButton>
              <UnstyledButton 
                component="a" href="#hello" 
                onClick={(event) => event.preventDefault()}
                onMouseOver={(event) => event.currentTarget.style.color = "green"}
                onMouseOut={(event) => event.currentTarget.style.color = "black"}
                >
                  <Text fw={510}>Products</Text>
                </UnstyledButton>
              <UnstyledButton 
                component="a" 
                href="#hello" 
                onClick={(event) => event.preventDefault()}
                variant="subtle"
                color="blue"
                onMouseOver={(event) => event.currentTarget.style.color = "green"}
                onMouseOut={(event) => event.currentTarget.style.color = "black"}
                >
                  <Text fw={510}>Support</Text>
                </UnstyledButton>
            </Group>
            <Group>
              <Box> 
                <Menu>
                  <Menu.Target>
                    <ActionIcon size={42} variant="transparent">
                      <IconShoppingCart style={{ width: rem(27), height: rem(27) }} />
                    </ActionIcon>
                  </Menu.Target>
                  <Menu.Dropdown>
                    <Menu.Label>
                      <Text>Empty</Text>
                    </Menu.Label>
                    <MenuDivider/>
                    <Menu.Item
                      rightSection={<IconArrowBarRight />}
                    >
                      <Text> Go to my Cart</Text>
                    </Menu.Item>  
                  </Menu.Dropdown>
                </Menu>
              </Box>
              
              
              <Box> 
                <Menu>
                  <Menu.Target>
                    <ActionIcon size={42} variant="transparent">
                      <IconUserCircle style={{ width: rem(27), height: rem(27) }} />
                    </ActionIcon>
                  </Menu.Target>
                  <Menu.Dropdown>
                    {loged ? (
                      null
                    ) : (
                      <Menu.Label>
                        <Button>Log in</Button>
                      </Menu.Label>
                    )}
                  </Menu.Dropdown>
                </Menu>
              </Box>
            </Group>
        </Group>     
    </Box>
  );
}