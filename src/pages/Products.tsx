import { SimpleGrid, Stack } from "@mantine/core";
import { Navbar, ProductCard } from "../components";

export function Products() {
  const products = [
    {
      id: "1",
      name: "Product 1",
      description: "Description of product 1",
      price: 100,
      image: "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    },
    {
      id: "2",
      name: "Product 2",
      description: "description of product 2",
      price: 200,
      image: "https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=80",
    },
  ];
  return (
    <Stack>
      <Navbar />
      <SimpleGrid mt="sm" pl="sm" pr="sm"
          cols={{ base: 1, sm: 2, lg: 5 }}
          spacing={{ base: 10, sm: 'xl' }}
          verticalSpacing={{ base: 'md', sm: 'xl' }} 
      >
        { 
        products.map((product) => (
            <ProductCard key={product.id} {...product} />
        ))
        }
      </SimpleGrid>
    </Stack>
  );
}