import { Button, Card, Group, Image, Text } from "@mantine/core";
import { IconShoppingCartPlus } from "@tabler/icons-react";

interface ProductCardProps {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
}


export function ProductCard(props: ProductCardProps) {
    const { name, description, price, image } = props;
    return (
        <Card>
            <Card.Section>
                <Image src={image} alt={name} height={180}/>
            </Card.Section>

            <Card.Section>
                <Text fz="lg" fw={500}>
                    {name}
                </Text>
                <Text fz="sm" mt="sm">
                    {description}
                </Text>
                <Text mt="sm" fw={700}>
                    ${price}
                </Text>
            </Card.Section>

            <Group mt="sm">
                <Button color="green" style={{ flex: 1 }} rightSection={<IconShoppingCartPlus/>}>
                    Add to cart
                </Button>
            </Group>
        </Card>
    )
}