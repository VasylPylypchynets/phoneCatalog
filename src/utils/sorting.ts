import { Product } from '../types/products';

export function sortProducts(products: Product[], sortBy: string): Product[] {
  return [...products].sort((a, b) => {
    switch (sortBy) {
      case 'Newest':
        return b.year - a.year;

      case 'Name: A to Z':
        return a.name.localeCompare(b.name);

      case 'Name: Z to A':
        return b.name.localeCompare(a.name);

      case 'Price: Low to High':
        return a.price - b.price;

      case 'Price: High to Low':
        return b.price - a.price;

      default:
        return 0;
    }
  });
}
