
export const categories = [
    {
        id: 1,
        name: 'Sushi',
        slug: 'sushi',
        imageUrl: 'https://example.com/sushi.jpg',
        description: 'Deliciosos rolls'
    },
    {
        id: 2,
        name: 'Ramen',
        slug: 'ramen',
        imageUrl: 'https://example.com/ramen.jpg',
        description: 'Ramen caliente'
    }
];

export const products = [
  {
    id: 1,
    name: 'California Roll',
    description: 'Roll de aguacate',
    price: 12.99,
    imageUrl: 'https://example.com/california-roll.jpg',
    categoryId: 1,
    categoryName: 'Sushi', 
    stock: 20
  },
  {
    id: 2,
    name: 'Spicy Tuna Roll',
    description: 'Roll de atún picante',
    price: 14.99,
    imageUrl: 'https://example.com/spicy-tuna-roll.jpg',
    categoryId: 1,
    categoryName: 'Sushi', 
    stock: 15
  },
  {
    id: 3,
    name: 'Shoyu Ramen',
    description: 'Ramen con caldo de soja',
    price: 10.99,
    imageUrl: 'https://example.com/shoyu-ramen.jpg',
    categoryId: 2,
    categoryName: 'Ramen', 
    stock: 10
  }
];