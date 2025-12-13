export const categories = [
  {
    id: 1,
    name: { es: 'Sushi Rolls', en: 'Sushi Rolls' },
    slug: { es: 'sushi-rolls', en: 'sushi-rolls' },
    imageUrl: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c',
    description: {
      es: 'Rolls clásicos y especiales preparados con ingredientes frescos.',
      en: 'Classic and special rolls made with fresh ingredients.'
    }
  },
  {
    id: 2,
    name: { es: 'Nigiri', en: 'Nigiri' },
    slug: { es: 'nigiri', en: 'nigiri' },
    imageUrl: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351',
    description: {
      es: 'Bocados de arroz con cortes de pescado fresco.',
      en: 'Rice bites topped with fresh fish cuts.'
    }
  },
  {
    id: 3,
    name: { es: 'Sashimi', en: 'Sashimi' },
    slug: { es: 'sashimi', en: 'sashimi' },
    imageUrl: 'https://images.unsplash.com/photo-1553621042-f6e147245754',
    description: {
      es: 'Láminas finas de pescado y mariscos de la mejor calidad.',
      en: 'Thin slices of high-quality fish and seafood.'
    }
  },
  {
    id: 4,
    name: { es: 'Ramen', en: 'Ramen' },
    slug: { es: 'ramen', en: 'ramen' },
    imageUrl: 'https://images.unsplash.com/photo-1604909053068-91fdaeb1a868',
    description: {
      es: 'Tazones de ramen caliente con fideos y caldos intensos.',
      en: 'Hot ramen bowls with noodles and rich broths.'
    }
  },
  {
    id: 5,
    name: { es: 'Entradas', en: 'Starters' },
    slug: { es: 'entradas', en: 'starters' },
    imageUrl: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058a',
    description: {
      es: 'Gyozas, tempura, yakitori y más.',
      en: 'Gyozas, tempura, yakitori, and more.'
    }
  },
  {
    id: 6,
    name: { es: 'Bowls', en: 'Bowls' },
    slug: { es: 'bowls', en: 'bowls' },
    imageUrl: 'https://images.unsplash.com/photo-1553621042-d9e0b4a52f9b',
    description: {
      es: 'Bowls frescos con proteínas y vegetales.',
      en: 'Fresh bowls with proteins and vegetables.'
    }
  },
  {
    id: 7,
    name: { es: 'Bebidas', en: 'Drinks' },
    slug: { es: 'bebidas', en: 'drinks' },
    imageUrl: 'https://images.unsplash.com/photo-1584281185065-cf448f1e4522',
    description: {
      es: 'Bebidas frías, calientes y opciones especiales.',
      en: 'Cold and hot drinks, plus special options.'
    }
  },
  {
    id: 8,
    name: { es: 'Promociones', en: 'Special Deals' },
    slug: { es: 'promociones', en: 'special-deals' },
    imageUrl: 'https://images.unsplash.com/photo-1546069901-eacef7391c7f',
    description: {
      es: 'Combos y descuentos exclusivos del día.',
      en: 'Daily exclusive combos and discounts.'
    }
  }
];


export const products = [
  // Sushi Rolls
  {
    id: 1,
    name: { es: 'California Roll', en: 'California Roll' },
    description: { es: 'Roll clásico con palta, pepino y kanikama.', en: 'Classic roll with avocado, cucumber and crab stick.' },
    price: 11.99,
    imageUrl: 'https://images.unsplash.com/photo-1604908177522-40259c5f1f09',
    categoryId: 1,
    categoryName: { es: 'Sushi Rolls', en: 'Sushi Rolls' },
    stock: 20
  },
  {
    id: 2,
    name: { es: 'Philadelphia Roll', en: 'Philadelphia Roll' },
    description: { es: 'Salmón, queso crema y palta.', en: 'Salmon, cream cheese and avocado.' },
    price: 12.99,
    imageUrl: 'https://images.unsplash.com/photo-1553621042-d9e0b4a52f9b',
    categoryId: 1,
    categoryName: { es: 'Sushi Rolls', en: 'Sushi Rolls' },
    stock: 18
  },
  {
    id: 3,
    name: { es: 'Spicy Tuna Roll', en: 'Spicy Tuna Roll' },
    description: { es: 'Atún picante con sriracha.', en: 'Spicy tuna with sriracha.' },
    price: 13.99,
    imageUrl: 'https://images.unsplash.com/photo-1562967914-608f82629710',
    categoryId: 1,
    categoryName: { es: 'Sushi Rolls', en: 'Sushi Rolls' },
    stock: 15
  },

  // Nigiri
  {
    id: 4,
    name: { es: 'Nigiri de Salmón', en: 'Salmon Nigiri' },
    description: { es: 'Salmón fresco sobre arroz.', en: 'Fresh salmon over rice.' },
    price: 5.99,
    imageUrl: 'https://images.unsplash.com/photo-1617196034613-d35d2f7bb0e8',
    categoryId: 2,
    categoryName: { es: 'Nigiri', en: 'Nigiri' },
    stock: 35
  },
  {
    id: 5,
    name: { es: 'Nigiri de Atún', en: 'Tuna Nigiri' },
    description: { es: 'Corte de atún rojo sobre arroz.', en: 'Slice of red tuna over rice.' },
    price: 6.99,
    imageUrl: 'https://images.unsplash.com/photo-1546069901-5b1ae3e7a215',
    categoryId: 2,
    categoryName: { es: 'Nigiri', en: 'Nigiri' },
    stock: 30
  },
  {
    id: 6,
    name: { es: 'Nigiri de Langostino', en: 'Shrimp Nigiri' },
    description: { es: 'Langostino cocido sobre arroz.', en: 'Cooked shrimp over rice.' },
    price: 6.50,
    imageUrl: 'https://images.unsplash.com/photo-1553621042-6f9be0abbde2',
    categoryId: 2,
    categoryName: { es: 'Nigiri', en: 'Nigiri' },
    stock: 25
  },

  // Sashimi
  {
    id: 7,
    name: { es: 'Sashimi de Salmón', en: 'Salmon Sashimi' },
    description: { es: 'Cortes frescos de salmón.', en: 'Fresh cuts of salmon.' },
    price: 10.99,
    imageUrl: 'https://images.unsplash.com/photo-1553621042-f6e147245754',
    categoryId: 3,
    categoryName: { es: 'Sashimi', en: 'Sashimi' },
    stock: 20
  },
  {
    id: 8,
    name: { es: 'Sashimi de Atún', en: 'Tuna Sashimi' },
    description: { es: 'Atún rojo de alta calidad.', en: 'Premium red tuna.' },
    price: 11.99,
    imageUrl: 'https://images.unsplash.com/photo-1606787620532-b63b57aab7da',
    categoryId: 3,
    categoryName: { es: 'Sashimi', en: 'Sashimi' },
    stock: 18
  },
  {
    id: 9,
    name: { es: 'Sashimi Mixto', en: 'Mixed Sashimi' },
    description: { es: 'Salmón, atún y pescado blanco.', en: 'Salmon, tuna and white fish.' },
    price: 13.99,
    imageUrl: 'https://images.unsplash.com/photo-1604908177522-40259c5f1f09',
    categoryId: 3,
    categoryName: { es: 'Sashimi', en: 'Sashimi' },
    stock: 22
  },

  // Ramen
  {
    id: 10,
    name: { es: 'Shoyu Ramen', en: 'Shoyu Ramen' },
    description: { es: 'Caldo ligero de soja con fideos.', en: 'Light soy broth with noodles.' },
    price: 12.50,
    imageUrl: 'https://images.unsplash.com/photo-1604909053068-91fdaeb1a868',
    categoryId: 4,
    categoryName: { es: 'Ramen', en: 'Ramen' },
    stock: 10
  },
  {
    id: 11,
    name: { es: 'Tonkotsu Ramen', en: 'Tonkotsu Ramen' },
    description: { es: 'Caldo cremoso de cerdo.', en: 'Creamy pork broth.' },
    price: 14.50,
    imageUrl: 'https://images.unsplash.com/photo-1617196034613-d35d2f7bb0e8',
    categoryId: 4,
    categoryName: { es: 'Ramen', en: 'Ramen' },
    stock: 12
  },
  {
    id: 12,
    name: { es: 'Miso Ramen', en: 'Miso Ramen' },
    description: { es: 'Caldo tradicional de miso.', en: 'Traditional miso broth.' },
    price: 13.00,
    imageUrl: 'https://images.unsplash.com/photo-1606788075761-4c4a1c2cc74e',
    categoryId: 4,
    categoryName: { es: 'Ramen', en: 'Ramen' },
    stock: 14
  },

  // Entradas
  {
    id: 13,
    name: { es: 'Gyozas', en: 'Gyozas' },
    description: { es: 'Empanaditas japonesas rellenas.', en: 'Stuffed Japanese dumplings.' },
    price: 7.99,
    imageUrl: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058a',
    categoryId: 5,
    categoryName: { es: 'Entradas', en: 'Starters' },
    stock: 30
  },
  {
    id: 14,
    name: { es: 'Tempura de Camarón', en: 'Shrimp Tempura' },
    description: { es: 'Camarones rebozados crujientes.', en: 'Crispy battered shrimp.' },
    price: 9.99,
    imageUrl: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351',
    categoryId: 5,
    categoryName: { es: 'Entradas', en: 'Starters' },
    stock: 20
  },
  {
    id: 15,
    name: { es: 'Edamame', en: 'Edamame' },
    description: { es: 'Soja verde salada.', en: 'Salted green soybeans.' },
    price: 5.50,
    imageUrl: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0',
    categoryId: 5,
    categoryName: { es: 'Entradas', en: 'Starters' },
    stock: 50
  },

  // Bowls
  {
    id: 16,
    name: { es: 'Salmon Bowl', en: 'Salmon Bowl' },
    description: { es: 'Arroz + salmón + palta + verduras.', en: 'Rice + salmon + avocado + veggies.' },
    price: 14.99,
    imageUrl: 'https://images.unsplash.com/photo-1553621042-d9e0b4a52f9b',
    categoryId: 6,
    categoryName: { es: 'Bowls', en: 'Bowls' },
    stock: 18
  },
  {
    id: 17,
    name: { es: 'Tuna Poke', en: 'Tuna Poke' },
    description: { es: 'Poke de atún fresco.', en: 'Fresh tuna poke.' },
    price: 15.99,
    imageUrl: 'https://images.unsplash.com/photo-1546069901-5b1ae3e7a215',
    categoryId: 6,
    categoryName: { es: 'Bowls', en: 'Bowls' },
    stock: 16
  },
  {
    id: 18,
    name: { es: 'Veggie Bowl', en: 'Veggie Bowl' },
    description: { es: 'Arroz + mix de verduras frescas.', en: 'Rice + fresh vegetable mix.' },
    price: 12.50,
    imageUrl: 'https://images.unsplash.com/photo-1553621042-d9e0b4a52f9b',
    categoryId: 6,
    categoryName: { es: 'Bowls', en: 'Bowls' },
    stock: 22
  },

  // Bebidas
  {
    id: 19,
    name: { es: 'Té Verde', en: 'Green Tea' },
    description: { es: 'Té japonés caliente.', en: 'Hot Japanese tea.' },
    price: 3.00,
    imageUrl: 'https://images.unsplash.com/photo-1584281185065-cf448f1e4522',
    categoryId: 7,
    categoryName: { es: 'Bebidas', en: 'Drinks' },
    stock: 40
  },
  {
    id: 20,
    name: { es: 'Limonada', en: 'Lemonade' },
    description: { es: 'Bebida fresca artesanal.', en: 'Fresh homemade lemonade.' },
    price: 3.50,
    imageUrl: 'https://images.unsplash.com/photo-1553621043-a56dab869a89',
    categoryId: 7,
    categoryName: { es: 'Bebidas', en: 'Drinks' },
    stock: 35
  },
  {
    id: 21,
    name: { es: 'Agua Mineral', en: 'Mineral Water' },
    description: { es: 'Botella individual.', en: 'Individual bottle.' },
    price: 2.50,
    imageUrl: 'https://images.unsplash.com/photo-1563865432-4c8cd90e3a6f',
    categoryId: 7,
    categoryName: { es: 'Bebidas', en: 'Drinks' },
    stock: 60
  },

  // ⭐ SAKE (nuevo)
  {
    id: 25,
    name: { es: 'Sake', en: 'Sake' },
    description: {
      es: 'Bebida alcohólica japonesa tradicional.',
      en: 'Traditional Japanese alcoholic beverage.'
    },
    price: 6.50,
    imageUrl: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be',
    categoryId: 7,
    categoryName: { es: 'Bebidas', en: 'Drinks' },
    stock: 20
  },

  // Promociones
  {
    id: 22,
    name: { es: 'Combo Sushi 30 piezas', en: 'Sushi Combo 30 Pieces' },
    description: { es: 'Mix de rolls, nigiri y sashimi.', en: 'Mix of rolls, nigiri and sashimi.' },
    price: 29.99,
    imageUrl: 'https://images.unsplash.com/photo-1546069901-eacef7391c7f',
    categoryId: 8,
    categoryName: { es: 'Promociones', en: 'Special Deals' },
    stock: 10
  },
  {
    id: 23,
    name: { es: 'Combo Pareja', en: 'Couple Combo' },
    description: { es: '16 piezas + 2 bebidas.', en: '16 pieces + 2 drinks.' },
    price: 19.99,
    imageUrl: 'https://images.unsplash.com/photo-1604908177522-40259c5f1f09',
    categoryId: 8,
    categoryName: { es: 'Promociones', en: 'Special Deals' },
    stock: 12
  },
  {
    id: 24,
    name: { es: 'Combo Ramen + Gyoza', en: 'Ramen + Gyoza Combo' },
    description: { es: '1 ramen a elección + gyozas.', en: '1 ramen of choice + gyozas.' },
    price: 16.99,
    imageUrl: 'https://images.unsplash.com/photo-1606788075761-4c4a1c2cc74e',
    categoryId: 8,
    categoryName: { es: 'Promociones', en: 'Special Deals' },
    stock: 15
  }
];

