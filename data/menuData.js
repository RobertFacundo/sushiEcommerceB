export const categories = [
  {
    id: 1,
    name: { es: 'Sushi Rolls', en: 'Sushi Rolls' },
    slug: { es: 'sushi-rolls', en: 'sushi-rolls' },
    imageUrl: '/images/sushiRolls.avif',
    description: {
      es: 'Rolls clásicos y especiales preparados con ingredientes frescos.',
      en: 'Classic and special rolls made with fresh ingredients.'
    }
  },
  {
    id: 2,
    name: { es: 'Nigiri', en: 'Nigiri' },
    slug: { es: 'nigiri', en: 'nigiri' },
    imageUrl: '/images/nigiris.avif',
    description: {
      es: 'Bocados de arroz con cortes de pescado fresco.',
      en: 'Rice bites topped with fresh fish cuts.'
    }
  },
  {
    id: 3,
    name: { es: 'Sashimi', en: 'Sashimi' },
    slug: { es: 'sashimi', en: 'sashimi' },
    imageUrl: '/images/sashimis.jpg',
    description: {
      es: 'Láminas finas de pescado y mariscos de la mejor calidad.',
      en: 'Thin slices of high-quality fish and seafood.'
    }
  },
  {
    id: 4,
    name: { es: 'Ramen', en: 'Ramen' },
    slug: { es: 'ramen', en: 'ramen' },
    imageUrl: '/images/ramen.avif',
    description: {
      es: 'Tazones de ramen caliente con fideos y caldos intensos.',
      en: 'Hot ramen bowls with noodles and rich broths.'
    }
  },
  {
    id: 5,
    name: { es: 'Entradas', en: 'Starters' },
    slug: { es: 'entradas', en: 'starters' },
    imageUrl: '/images/starters.avif',
    description: {
      es: 'Gyozas, tempura, yakitori y más.',
      en: 'Gyozas, tempura, yakitori, and more.'
    }
  },
  {
    id: 6,
    name: { es: 'Bowls', en: 'Bowls' },
    slug: { es: 'bowls', en: 'bowls' },
    imageUrl: '/images/bowls.jpg',
    description: {
      es: 'Bowls frescos con proteínas y vegetales.',
      en: 'Fresh bowls with proteins and vegetables.'
    }
  },
  {
    id: 7,
    name: { es: 'Bebidas', en: 'Drinks' },
    slug: { es: 'bebidas', en: 'drinks' },
    imageUrl: '/images/drinks.avif',
    description: {
      es: 'Bebidas frías, calientes y opciones especiales.',
      en: 'Cold and hot drinks, plus special options.'
    }
  },
  {
    id: 8,
    name: { es: 'Promociones', en: 'Special Deals' },
    slug: { es: 'promociones', en: 'special-deals' },
    imageUrl: '/images/combos.avif',
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
    imageUrl: '/images/californiaRoll.jpg',
    categoryId: 1,
    categoryName: { es: 'Sushi Rolls', en: 'Sushi Rolls' },
    stock: 20
  },
  {
    id: 2,
    name: { es: 'Philadelphia Roll', en: 'Philadelphia Roll' },
    description: { es: 'Salmón, queso crema y palta.', en: 'Salmon, cream cheese and avocado.' },
    price: 12.99,
    imageUrl: '/images/philadelphiaRoll.png',
    categoryId: 1,
    categoryName: { es: 'Sushi Rolls', en: 'Sushi Rolls' },
    stock: 18
  },
  {
    id: 3,
    name: { es: 'Spicy Tuna Roll', en: 'Spicy Tuna Roll' },
    description: { es: 'Atún picante con sriracha.', en: 'Spicy tuna with sriracha.' },
    price: 13.99,
    imageUrl: '/images/spiciTunaRoll.jpg',
    categoryId: 1,
    categoryName: { es: 'Sushi Rolls', en: 'Sushi Rolls' },
    stock: 15
  },
  {
    id: 27,
    name: { es: 'Ebi Tempura Roll', en: 'Ebi Tempura Roll' },
    description: {
      es: 'Langostino en tempura, palta y salsa dulce.',
      en: 'Tempura shrimp, avocado and sweet sauce.'
    },
    price: 14.99,
    imageUrl: '/images/ebiTempuraRoll.jpg',
    categoryId: 1,
    categoryName: { es: 'Sushi Rolls', en: 'Sushi Rolls' },
    stock: 14
  },
  {
    id: 28,
    name: { es: 'Dragon Roll', en: 'Dragon Roll' },
    description: {
      es: 'Anguila, pepino y palta flambeada por fuera.',
      en: 'Eel, cucumber and seared avocado on top.'
    },
    price: 15.99,
    imageUrl: '/images/dragonRoll.jpg',
    categoryId: 1,
    categoryName: { es: 'Sushi Rolls', en: 'Sushi Rolls' },
    stock: 10
  },
  {
    id: 29,
    name: { es: 'Veggie Roll', en: 'Veggie Roll' },
    description: {
      es: 'Palta, pepino, zanahoria y queso crema.',
      en: 'Avocado, cucumber, carrot and cream cheese.'
    },
    price: 10.99,
    imageUrl: '/images/veggieRoll.webp',
    categoryId: 1,
    categoryName: { es: 'Sushi Rolls', en: 'Sushi Rolls' },
    stock: 0
  },

  // Nigiri
  {
    id: 4,
    name: { es: 'Nigiri de Salmón', en: 'Salmon Nigiri' },
    description: { es: 'Salmón fresco sobre arroz.', en: 'Fresh salmon over rice.' },
    price: 5.99,
    imageUrl: '/images/nigiriSalmon.jpg',
    categoryId: 2,
    categoryName: { es: 'Nigiri', en: 'Nigiri' },
    stock: 35
  },
  {
    id: 5,
    name: { es: 'Nigiri de Atún', en: 'Tuna Nigiri' },
    description: { es: 'Corte de atún rojo sobre arroz.', en: 'Slice of red tuna over rice.' },
    price: 6.99,
    imageUrl: '/images/nigiriAtun.jpg',
    categoryId: 2,
    categoryName: { es: 'Nigiri', en: 'Nigiri' },
    stock: 30
  },
  {
    id: 6,
    name: { es: 'Nigiri de Langostino', en: 'Shrimp Nigiri' },
    description: { es: 'Langostino cocido sobre arroz.', en: 'Cooked shrimp over rice.' },
    price: 6.50,
    imageUrl: '/images/nigiriLangostino.jpeg',
    categoryId: 2,
    categoryName: { es: 'Nigiri', en: 'Nigiri' },
    stock: 25
  },
  {
    id: 30,
    name: { es: 'Nigiri de Pulpo', en: 'Octopus Nigiri' },
    description: {
      es: 'Pulpo tierno ligeramente aderezado.',
      en: 'Tender octopus lightly seasoned.'
    },
    price: 6.80,
    imageUrl: '/images/nigiriPulpo.jpg',
    categoryId: 2,
    categoryName: { es: 'Nigiri', en: 'Nigiri' },
    stock: 22
  },
  {
    id: 31,
    name: { es: 'Nigiri de Anguila', en: 'Eel Nigiri' },
    description: {
      es: 'Anguila glaseada con salsa teriyaki.',
      en: 'Glazed eel with teriyaki sauce.'
    },
    price: 7.50,
    imageUrl: '/images/nigiriAnguila.png',
    categoryId: 2,
    categoryName: { es: 'Nigiri', en: 'Nigiri' },
    stock: 18
  },
  {
    id: 32,
    name: { es: 'Nigiri de Pescado Blanco', en: 'White Fish Nigiri' },
    description: {
      es: 'Pescado blanco fresco del día.',
      en: 'Fresh catch white fish of the day.'
    },
    price: 6.20,
    imageUrl: '/images/nigiriBlanco.jpg',
    categoryId: 2,
    categoryName: { es: 'Nigiri', en: 'Nigiri' },
    stock: 0
  },

  // Sashimi
  {
    id: 7,
    name: { es: 'Sashimi de Salmón', en: 'Salmon Sashimi' },
    description: { es: 'Cortes frescos de salmón.', en: 'Fresh cuts of salmon.' },
    price: 10.99,
    imageUrl: '/images/sashimiSalmon.jpg',
    categoryId: 3,
    categoryName: { es: 'Sashimi', en: 'Sashimi' },
    stock: 20
  },
  {
    id: 8,
    name: { es: 'Sashimi de Atún', en: 'Tuna Sashimi' },
    description: { es: 'Atún rojo de alta calidad.', en: 'Premium red tuna.' },
    price: 11.99,
    imageUrl: '/images/sashimiAtun.webp',
    categoryId: 3,
    categoryName: { es: 'Sashimi', en: 'Sashimi' },
    stock: 18
  },
  {
    id: 9,
    name: { es: 'Sashimi Mixto', en: 'Mixed Sashimi' },
    description: { es: 'Salmón, atún y pescado blanco.', en: 'Salmon, tuna and white fish.' },
    price: 13.99,
    imageUrl: '/images/sashimiMix.webp',
    categoryId: 3,
    categoryName: { es: 'Sashimi', en: 'Sashimi' },
    stock: 22
  },
  {
    id: 33,
    name: { es: 'Sashimi de Pescado Blanco', en: 'White Fish Sashimi' },
    description: {
      es: 'Cortes frescos de pescado blanco del día.',
      en: 'Fresh cuts of daily white fish.'
    },
    price: 10.50,
    imageUrl: '/images/sashimiPescadoBlanco.jpg',
    categoryId: 3,
    categoryName: { es: 'Sashimi', en: 'Sashimi' },
    stock: 24
  },
  {
    id: 34,
    name: { es: 'Sashimi de Langostino', en: 'Shrimp Sashimi' },
    description: {
      es: 'Langostinos seleccionados, textura suave.',
      en: 'Selected shrimp with delicate texture.'
    },
    price: 11.50,
    imageUrl: '/images/sashimiLangostino.png',
    categoryId: 3,
    categoryName: { es: 'Sashimi', en: 'Sashimi' },
    stock: 20
  },
  {
    id: 35,
    name: { es: 'Sashimi Premium', en: 'Premium Sashimi' },
    description: {
      es: 'Selección premium de cortes especiales del chef.',
      en: 'Chef’s premium selection of special cuts.'
    },
    price: 15.99,
    imageUrl: '/images/sashimiPremium.jpg',
    categoryId: 3,
    categoryName: { es: 'Sashimi', en: 'Sashimi' },
    stock: 14
  },

  // Ramen
  {
    id: 10,
    name: { es: 'Shoyu Ramen', en: 'Shoyu Ramen' },
    description: { es: 'Caldo ligero de soja con fideos.', en: 'Light soy broth with noodles.' },
    price: 12.50,
    imageUrl: '/images/shoyuRamen.jpg',
    categoryId: 4,
    categoryName: { es: 'Ramen', en: 'Ramen' },
    stock: 10
  },
  {
    id: 11,
    name: { es: 'Tonkotsu Ramen', en: 'Tonkotsu Ramen' },
    description: { es: 'Caldo cremoso de cerdo.', en: 'Creamy pork broth.' },
    price: 14.50,
    imageUrl: '/images/tonkotsuRamen.jpg',
    categoryId: 4,
    categoryName: { es: 'Ramen', en: 'Ramen' },
    stock: 12
  },
  {
    id: 12,
    name: { es: 'Miso Ramen', en: 'Miso Ramen' },
    description: { es: 'Caldo tradicional de miso.', en: 'Traditional miso broth.' },
    price: 13.00,
    imageUrl: '/images/misoRamen.jpg',
    categoryId: 4,
    categoryName: { es: 'Ramen', en: 'Ramen' },
    stock: 14
  },
  {
    id: 36,
    name: { es: 'Spicy Ramen', en: 'Spicy Ramen' },
    description: {
      es: 'Caldo picante con cerdo, huevo y cebolla de verdeo.',
      en: 'Spicy broth with pork, egg and green onions.'
    },
    price: 14.00,
    imageUrl: '/images/spicyRamen.jpg',
    categoryId: 4,
    categoryName: { es: 'Ramen', en: 'Ramen' },
    stock: 11
  },
  {
    id: 37,
    name: { es: 'Chicken Ramen', en: 'Chicken Ramen' },
    description: {
      es: 'Caldo suave de pollo con fideos y vegetales.',
      en: 'Mild chicken broth with noodles and vegetables.'
    },
    price: 13.50,
    imageUrl: '/images/chickenRamen.jpg',
    categoryId: 4,
    categoryName: { es: 'Ramen', en: 'Ramen' },
    stock: 13
  },
  {
    id: 38,
    name: { es: 'Veggie Ramen', en: 'Veggie Ramen' },
    description: {
      es: 'Caldo vegetal con tofu, hongos y verduras.',
      en: 'Vegetable broth with tofu, mushrooms and veggies.'
    },
    price: 12.00,
    imageUrl: '/images/veggieRamen.webp',
    categoryId: 4,
    categoryName: { es: 'Ramen', en: 'Ramen' },
    stock: 16
  },

  // Entradas
  {
    id: 13,
    name: { es: 'Gyozas', en: 'Gyozas' },
    description: { es: 'Empanaditas japonesas rellenas.', en: 'Stuffed Japanese dumplings.' },
    price: 7.99,
    imageUrl: '/images/gyoza.jpg',
    categoryId: 5,
    categoryName: { es: 'Entradas', en: 'Starters' },
    stock: 0
  },
  {
    id: 14,
    name: { es: 'Tempura de Camarón', en: 'Shrimp Tempura' },
    description: { es: 'Camarones rebozados crujientes.', en: 'Crispy battered shrimp.' },
    price: 9.99,
    imageUrl: '/images/tempuraCamaron.png',
    categoryId: 5,
    categoryName: { es: 'Entradas', en: 'Starters' },
    stock: 20
  },
  {
    id: 15,
    name: { es: 'Edamame', en: 'Edamame' },
    description: { es: 'Soja verde salada.', en: 'Salted green soybeans.' },
    price: 5.50,
    imageUrl: '/images/edamame.webp',
    categoryId: 5,
    categoryName: { es: 'Entradas', en: 'Starters' },
    stock: 50
  },
  {
    id: 26,
    name: { es: 'Onigiri de Salmón', en: 'Salmon Onigiri' },
    description: {
      es: 'Triángulo de arroz relleno de salmón, envuelto en nori.',
      en: 'Rice triangle filled with salmon, wrapped in nori.'
    },
    price: 4.99,
    imageUrl: '/images/onigiriSalmon.jpg',
    categoryId: 5,
    categoryName: { es: 'Entradas', en: 'Starters' },
    stock: 40
  },
  {
    id: 39,
    name: { es: 'Onigiri de Atún', en: 'Tuna Onigiri' },
    description: {
      es: 'Triángulo de arroz relleno de atún, envuelto en nori.',
      en: 'Rice triangle filled with tuna, wrapped in nori.'
    },
    price: 5.20,
    imageUrl: '/images/onigiriAtun.avif',
    categoryId: 5,
    categoryName: { es: 'Entradas', en: 'Starters' },
    stock: 38
  },
  {
    id: 40,
    name: { es: 'Onigiri Veggie', en: 'Veggie Onigiri' },
    description: {
      es: 'Arroz relleno de verduras salteadas, envuelto en nori.',
      en: 'Rice filled with sautéed vegetables, wrapped in nori.'
    },
    price: 4.70,
    imageUrl: '/images/onigiriVeggie.jpg',
    categoryId: 5,
    categoryName: { es: 'Entradas', en: 'Starters' },
    stock: 45
  },

  // Bowls
  {
    id: 16,
    name: { es: 'Salmon Bowl', en: 'Salmon Bowl' },
    description: { es: 'Arroz + salmón + palta + verduras.', en: 'Rice + salmon + avocado + veggies.' },
    price: 14.99,
    imageUrl: '/images/salmonBowl.jpg',
    categoryId: 6,
    categoryName: { es: 'Bowls', en: 'Bowls' },
    stock: 18
  },
  {
    id: 17,
    name: { es: 'Tuna Poke', en: 'Tuna Poke' },
    description: { es: 'Poke de atún fresco.', en: 'Fresh tuna poke.' },
    price: 15.99,
    imageUrl: '/images/tunaPoke.webp',
    categoryId: 6,
    categoryName: { es: 'Bowls', en: 'Bowls' },
    stock: 16
  },
  {
    id: 18,
    name: { es: 'Veggie Bowl', en: 'Veggie Bowl' },
    description: { es: 'Arroz + mix de verduras frescas.', en: 'Rice + fresh vegetable mix.' },
    price: 12.50,
    imageUrl: '/images/veggieBowl.jpg',
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
    imageUrl: '/images/greenTea.jpg',
    categoryId: 7,
    categoryName: { es: 'Bebidas', en: 'Drinks' },
    stock: 40
  },
  {
    id: 20,
    name: { es: 'Limonada', en: 'Lemonade' },
    description: { es: 'Bebida fresca artesanal.', en: 'Fresh homemade lemonade.' },
    price: 3.50,
    imageUrl: '/images/lemonade.jpg',
    categoryId: 7,
    categoryName: { es: 'Bebidas', en: 'Drinks' },
    stock: 35
  },
  {
    id: 21,
    name: { es: 'Agua Mineral', en: 'Mineral Water' },
    description: { es: 'Botella individual.', en: 'Individual bottle.' },
    price: 2.50,
    imageUrl: '/images/mineralWater.webp',
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
    imageUrl: '/images/sake.webp',
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
    imageUrl: '/images/comboSushi.jpg',
    categoryId: 8,
    categoryName: { es: 'Promociones', en: 'Special Deals' },
    stock: 10
  },
  {
    id: 23,
    name: { es: 'Combo Pareja', en: 'Couple Combo' },
    description: { es: '16 piezas + 2 bebidas.', en: '16 pieces + 2 drinks.' },
    price: 19.99,
    imageUrl: '/images/comboSushiII.jpg',
    categoryId: 8,
    categoryName: { es: 'Promociones', en: 'Special Deals' },
    stock: 12
  },
  {
    id: 24,
    name: { es: 'Combo Ramen + Gyoza', en: 'Ramen + Gyoza Combo' },
    description: { es: '1 ramen a elección + gyozas.', en: '1 ramen of choice + gyozas.' },
    price: 16.99,
    imageUrl: '/images/comboSushiIII.jpg',
    categoryId: 8,
    categoryName: { es: 'Promociones', en: 'Special Deals' },
    stock: 15
  }
];

