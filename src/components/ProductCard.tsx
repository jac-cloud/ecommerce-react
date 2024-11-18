import { Button, Card, Group, Image, Text } from "@mantine/core";
import { IconShoppingCartPlus } from "@tabler/icons-react";
import type { Product } from "../types/product";

export function ProductCard({ product }: { product: Product }) {
    const { title, description, price, image } = product;
    return (
        <Card shadow="xs" padding="sm" bg={'#d2d2d2'} radius="md" flex={1} style={{ justifyContent: 'space-between' }}>
            <Card.Section bd={'none'}>
                <Image src={image} alt={title} height={180} radius={'10 0 10 0'} />
            </Card.Section>

            <Card.Section p="sm">
                <Text fz="lg" fw={500}>
                    {title}
                </Text>
                <Text fz="sm" mt="sm">
                    {description.slice(0, 100)}...
                </Text>
            </Card.Section>

            <Group mt="sm">
                <Text fw={700}>
                    ${price}
                </Text>
                <Button color="green" style={{ flex: 1 }} rightSection={<IconShoppingCartPlus/>}>
                    Add to cart
                </Button>
            </Group>
        </Card>
    )
}
