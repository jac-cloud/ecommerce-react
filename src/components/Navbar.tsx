import { ActionIcon, Box, Button, Group, Menu, MenuDivider, rem, Text, UnstyledButton } from "@mantine/core";
import { IconUserCircle, IconShoppingCart, IconArrowBarRight } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const loged = false;
  const navigate = useNavigate();
  return (
    <Box p="sm" style={{borderBottom:"1px solid"}}>
        <Group justify="space-between" h="100%">
            <Text size="xl" fw={700}>Sandystore</Text>
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
                      <UnstyledButton
                        onClick={() => navigate("/cart") }
                      >
                        <Text>Go to my Cart</Text>
                      </UnstyledButton>
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
                        <Button onClick={() => navigate("/login")}>Log in / Sing up</Button>
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
