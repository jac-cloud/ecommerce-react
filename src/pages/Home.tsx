import { SimpleGrid, Stack } from "@mantine/core";
import { Navbar, ProductCard } from "../components";
import { useEffect, useState } from "react";
import type { Product } from "../types/product";

export function Home() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products/')
        .then(res=>res.json())
        .then(json=>setProducts(json));
    }, [])


      return (
        <Stack>
          <Navbar />
          <SimpleGrid mt="sm" pl="sm" pr="sm"
              cols={{ base: 1, sm: 2, lg: 4 }}
              spacing={{ base: 10, sm: 'xl' }}
              verticalSpacing={{ base: 'md', sm: 'xl' }} 
          >
            { 
            products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))
            }
          </SimpleGrid>
        </Stack>
      );
}
