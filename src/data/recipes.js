const foodImage = (dish) =>
  `https://loremflickr.com/600/450/${encodeURIComponent(dish)},food`;
const recipes = [
  {
    id: 1,
    name: "Chicken Biryani",
    category: "Non-Veg",
    cuisine: "Indian",
    time: "60 mins",
    image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600",
    ingredients: ["Chicken", "Basmati rice", "Onions", "Tomatoes", "Biryani masala", "Yogurt"],
    instructions: ["Marinate chicken with yogurt and spices.", "Fry onions and cook chicken.", "Add rice and water.", "Cook until rice and chicken are done."]
  },
  {
    id: 2,
    name: "Paneer Butter Masala",
    category: "Veg",
    cuisine: "Indian",
    time: "35 mins",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600",
    ingredients: ["Paneer", "Tomatoes", "Butter", "Cream", "Garam masala"],
    instructions: ["Prepare tomato gravy.", "Add butter and spices.", "Add paneer cubes.", "Finish with cream and serve."]
  },
  {
    id: 3,
    name: "Veg Fried Rice",
    category: "Veg",
    cuisine: "Chinese",
    time: "25 mins",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600",
    ingredients: ["Cooked rice", "Carrots", "Beans", "Capsicum", "Soy sauce"],
    instructions: ["Chop vegetables.", "Stir-fry vegetables.", "Add cooked rice.", "Mix soy sauce and serve."]
  },
  {
    id: 4,
    name: "Chicken Fried Rice",
    category: "Non-Veg",
    cuisine: "Chinese",
    time: "35 mins",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600",
    ingredients: ["Chicken", "Rice", "Egg", "Carrots", "Soy sauce"],
    instructions: ["Cook chicken pieces.", "Scramble the egg.", "Add vegetables and rice.", "Mix everything with soy sauce."]
  },
  {
    id: 5,
    name: "Masala Dosa",
    category: "Veg",
    cuisine: "South Indian",
    time: "30 mins",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600",
    ingredients: ["Dosa batter", "Potatoes", "Onions", "Mustard seeds", "Turmeric"],
    instructions: ["Prepare potato masala.", "Spread dosa batter on a hot pan.", "Add potato masala.", "Fold and serve."]
  },
  {
    id: 6,
    name: "Idli",
    category: "Veg",
    cuisine: "South Indian",
    time: "20 mins",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600",
    ingredients: ["Idli batter", "Water", "Salt"],
    instructions: ["Prepare idli batter.", "Pour into idli molds.", "Steam until cooked.", "Serve with chutney."]
  },
  {
    id: 7,
    name: "Veg Pulao",
    category: "Veg",
    cuisine: "Indian",
    time: "35 mins",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600",
    ingredients: ["Basmati rice", "Carrots", "Beans", "Peas", "Whole spices"],
    instructions: ["Wash the rice.", "Cook vegetables with spices.", "Add rice and water.", "Cook until fluffy."]
  },
  {
    id: 8,
    name: "Chicken Curry",
    category: "Non-Veg",
    cuisine: "Indian",
    time: "45 mins",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600",
    ingredients: ["Chicken", "Onions", "Tomatoes", "Ginger garlic paste", "Spices"],
    instructions: ["Fry onions.", "Add ginger garlic paste and spices.", "Add chicken and tomatoes.", "Cook until tender."]
  },
  {
    id: 9,
    name: "Chole Masala",
    category: "Veg",
    cuisine: "Indian",
    time: "40 mins",
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=600",
    ingredients: ["Chickpeas", "Onions", "Tomatoes", "Chole masala", "Ginger"],
    instructions: ["Cook chickpeas until soft.", "Prepare onion tomato gravy.", "Add chickpeas and masala.", "Simmer and serve."]
  },
  {
    id: 10,
    name: "Aloo Paratha",
    category: "Veg",
    cuisine: "Indian",
    time: "30 mins",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600",
    ingredients: ["Wheat flour", "Potatoes", "Green chilies", "Coriander", "Salt"],
    instructions: ["Prepare potato filling.", "Make wheat dough.", "Fill and roll the paratha.", "Cook on a pan with oil."]
  },
  {
    id: 11,
    name: "Margherita Pizza",
    category: "Veg",
    cuisine: "Italian",
    time: "30 mins",
    image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?w=600",
    ingredients: ["Pizza base", "Tomato sauce", "Mozzarella cheese", "Basil"],
    instructions: ["Spread tomato sauce on pizza base.", "Add mozzarella and basil.", "Bake until cheese melts.", "Slice and serve."]
  },
  {
    id: 12,
    name: "White Sauce Pasta",
    category: "Veg",
    cuisine: "Italian",
    time: "25 mins",
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=600",
    ingredients: ["Pasta", "Milk", "Butter", "Flour", "Cheese"],
    instructions: ["Boil pasta.", "Prepare butter and flour sauce.", "Add milk and cheese.", "Mix pasta with sauce."]
  },
  {
    id: 13,
    name: "Spaghetti",
    category: "Veg",
    cuisine: "Italian",
    time: "30 mins",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600",
    ingredients: ["Spaghetti", "Tomatoes", "Garlic", "Olive oil", "Basil"],
    instructions: ["Boil spaghetti.", "Prepare tomato garlic sauce.", "Add spaghetti to sauce.", "Mix and serve."]
  },
  {
    id: 14,
    name: "Veg Burger",
    category: "Veg",
    cuisine: "American",
    time: "25 mins",
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=600",
    ingredients: ["Burger buns", "Veg patty", "Lettuce", "Tomato", "Cheese"],
    instructions: ["Cook the veg patty.", "Toast burger buns.", "Add lettuce, tomato and patty.", "Add cheese and serve."]
  },
  {
    id: 15,
    name: "French Fries",
    category: "Veg",
    cuisine: "American",
    time: "25 mins",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600",
    ingredients: ["Potatoes", "Oil", "Salt", "Pepper"],
    instructions: ["Cut potatoes into strips.", "Soak and dry them.", "Fry until crispy.", "Season and serve."]
  },
  {
    id: 16,
    name: "Chocolate Cake",
    category: "Dessert",
    cuisine: "International",
    time: "50 mins",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600",
    ingredients: ["Flour", "Cocoa powder", "Sugar", "Milk", "Butter"],
    instructions: ["Mix dry ingredients.", "Add milk and butter.", "Pour into cake pan.", "Bake until cooked."]
  },
  {
    id: 17,
    name: "Chocolate Brownies",
    category: "Dessert",
    cuisine: "American",
    time: "40 mins",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600",
    ingredients: ["Chocolate", "Flour", "Sugar", "Butter", "Cocoa powder"],
    instructions: ["Melt chocolate and butter.", "Mix with flour, sugar and cocoa.", "Pour into baking pan.", "Bake and cool before cutting."]
  },
  {
    id: 18,
    name: "Pancakes",
    category: "Breakfast",
    cuisine: "American",
    time: "20 mins",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600",
    ingredients: ["Flour", "Milk", "Egg", "Sugar", "Baking powder"],
    instructions: ["Mix all ingredients.", "Heat a pan.", "Pour batter onto pan.", "Flip and cook both sides."]
  },
  {
    id: 19,
    name: "Omelette",
    category: "Breakfast",
    cuisine: "International",
    time: "10 mins",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600",
    ingredients: ["Eggs", "Onions", "Green chilies", "Salt", "Pepper"],
    instructions: ["Beat eggs.", "Add chopped vegetables and seasoning.", "Pour into a hot pan.", "Cook both sides."]
  },
  {
    id: 20,
    name: "Mango Milkshake",
    category: "Drinks",
    cuisine: "Indian",
    time: "10 mins",
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?w=600",
    ingredients: ["Mango", "Milk", "Sugar", "Ice"],
    instructions: ["Peel and chop mango.", "Add mango, milk and sugar to blender.", "Blend until smooth.", "Serve chilled."]
  },
  {
    id: 21,
    name: "Pesarattu",
    category: "Breakfast",
    cuisine: "South Indian",
    time: "25 mins",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600",
    ingredients: ["Green gram", "Green chilies", "Ginger", "Onions", "Salt"],
    instructions: ["Soak green gram.", "Grind with ginger and chilies.", "Spread batter on a hot pan.", "Add onions and cook both sides."]
  },
  {
    id: 22,
    name: "Rava Upma",
    category: "Breakfast",
    cuisine: "South Indian",
    time: "20 mins",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600",
    ingredients: ["Semolina", "Onions", "Carrots", "Mustard seeds", "Curry leaves"],
    instructions: ["Roast semolina.", "Fry mustard seeds and vegetables.", "Add water and salt.", "Add semolina and cook until soft."]
  },
  {
    id: 23,
    name: "Medu Vada",
    category: "Snacks",
    cuisine: "South Indian",
    time: "30 mins",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600",
    ingredients: ["Urad dal", "Green chilies", "Ginger", "Curry leaves", "Oil"],
    instructions: ["Soak and grind urad dal.", "Mix ginger, chilies and curry leaves.", "Shape into vadas.", "Fry until golden and crispy."]
  },
  {
    id: 24,
    name: "Sambar",
    category: "Lunch",
    cuisine: "South Indian",
    time: "40 mins",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600",
    ingredients: ["Toor dal", "Tomatoes", "Drumsticks", "Sambar powder", "Tamarind"],
    instructions: ["Cook toor dal.", "Cook vegetables with tamarind.", "Add sambar powder.", "Mix dal and simmer."]
  },
  {
    id: 25,
    name: "Curd Rice",
    category: "Lunch",
    cuisine: "South Indian",
    time: "15 mins",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600",
    ingredients: ["Cooked rice", "Curd", "Milk", "Mustard seeds", "Curry leaves"],
    instructions: ["Mash cooked rice.", "Mix with curd and milk.", "Prepare mustard seed tempering.", "Add tempering and serve."]
  },
    {
    id: 26,
    name: "Gobi Manchurian",
    category: "Veg",
    cuisine: "Chinese",
    time: "35 mins",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600",
    ingredients: ["Cauliflower", "Corn flour", "Soy sauce", "Garlic", "Capsicum"],
    instructions: ["Prepare cauliflower florets.", "Coat and fry cauliflower.", "Prepare garlic and soy sauce mixture.", "Toss cauliflower in the sauce."]
  },
  {
    id: 27,
    name: "Veg Manchow Soup",
    category: "Veg",
    cuisine: "Chinese",
    time: "25 mins",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600",
    ingredients: ["Carrots", "Cabbage", "Beans", "Garlic", "Soy sauce"],
    instructions: ["Chop vegetables.", "Fry garlic and vegetables.", "Add water and soy sauce.", "Simmer and serve hot."]
  },
  {
    id: 28,
    name: "Hakka Noodles",
    category: "Veg",
    cuisine: "Chinese",
    time: "25 mins",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600",
    ingredients: ["Noodles", "Cabbage", "Carrots", "Capsicum", "Soy sauce"],
    instructions: ["Boil noodles.", "Stir-fry vegetables.", "Add noodles and sauces.", "Toss and serve."]
  },
  {
    id: 29,
    name: "Butter Chicken",
    category: "Non-Veg",
    cuisine: "North Indian",
    time: "45 mins",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600",
    ingredients: ["Chicken", "Tomatoes", "Butter", "Cream", "Garam masala"],
    instructions: ["Marinate chicken.", "Cook chicken pieces.", "Prepare tomato butter gravy.", "Add chicken and cream."]
  },
  {
    id: 30,
    name: "Palak Paneer",
    category: "Veg",
    cuisine: "North Indian",
    time: "35 mins",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600",
    ingredients: ["Spinach", "Paneer", "Onions", "Garlic", "Garam masala"],
    instructions: ["Blanch spinach.", "Blend spinach into a puree.", "Cook onions and spices.", "Add spinach and paneer."]
  },
  {
    id: 31,
    name: "Rajma Masala",
    category: "Lunch",
    cuisine: "North Indian",
    time: "45 mins",
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?w=600",
    ingredients: ["Kidney beans", "Onions", "Tomatoes", "Ginger", "Rajma masala"],
    instructions: ["Soak and cook kidney beans.", "Prepare onion tomato gravy.", "Add spices and kidney beans.", "Simmer until thick."]
  },
  {
    id: 32,
    name: "Samosa",
    category: "Snacks",
    cuisine: "North Indian",
    time: "40 mins",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600",
    ingredients: ["Wheat flour", "Potatoes", "Peas", "Green chilies", "Spices"],
    instructions: ["Prepare potato filling.", "Make dough and shape cones.", "Fill with potato mixture.", "Fry until golden."]
  },
  {
    id: 33,
    name: "Aloo Gobi",
    category: "Dinner",
    cuisine: "North Indian",
    time: "30 mins",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600",
    ingredients: ["Potatoes", "Cauliflower", "Onions", "Tomatoes", "Turmeric"],
    instructions: ["Cut potatoes and cauliflower.", "Fry onions and spices.", "Add vegetables.", "Cook until tender."]
  },
  {
    id: 34,
    name: "Tomato Soup",
    category: "Veg",
    cuisine: "International",
    time: "25 mins",
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600",
    ingredients: ["Tomatoes", "Onions", "Garlic", "Butter", "Pepper"],
    instructions: ["Cook tomatoes and onions.", "Blend until smooth.", "Add butter and seasoning.", "Simmer and serve."]
  },
  {
    id: 35,
    name: "Strawberry Milkshake",
    category: "Drinks",
    cuisine: "International",
    time: "10 mins",
    image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600",
    ingredients: ["Strawberries", "Milk", "Sugar", "Ice cream"],
    instructions: ["Wash strawberries.", "Add strawberries and milk to blender.", "Add sugar and ice cream.", "Blend and serve."]
  },
  {
    id: 36,
    name: "Vanilla Ice Cream",
    category: "Dessert",
    cuisine: "International",
    time: "15 mins",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600",
    ingredients: ["Milk", "Cream", "Sugar", "Vanilla extract"],
    instructions: ["Mix milk, cream and sugar.", "Add vanilla extract.", "Freeze until firm.", "Scoop and serve."]
  },
  {
    id: 37,
    name: "Special Veg Biryani",
    category: "Veg",
    cuisine: "Indian",
    time: "50 mins",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600",
    ingredients: ["Basmati rice", "Mixed vegetables", "Yogurt", "Biryani masala", "Mint"],
    instructions: ["Marinate vegetables with yogurt and spices.", "Cook rice partially.", "Layer vegetables and rice.", "Cook until fragrant and serve."]
  },
  {
    id: 38,
    name: "Veg Spring Rolls",
    category: "Snacks",
    cuisine: "Chinese",
    time: "30 mins",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600",
    ingredients: ["Spring roll wrappers", "Cabbage", "Carrots", "Capsicum", "Soy sauce"],
    instructions: ["Shred vegetables finely.", "Stir-fry vegetables with soy sauce.", "Fill and roll wrappers.", "Fry until crisp and golden."]
  },
  {
    id: 39,
    name: "Chicken Tikka",
    category: "Non-Veg",
    cuisine: "North Indian",
    time: "40 mins",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600",
    ingredients: ["Chicken", "Yogurt", "Tikka masala", "Lemon", "Capsicum"],
    instructions: ["Mix chicken with yogurt and spices.", "Marinate for 30 minutes.", "Skewer chicken with capsicum.", "Grill or bake until cooked."]
  },
  {
    id: 40,
    name: "Veg Momos",
    category: "Veg",
    cuisine: "Nepalese",
    time: "35 mins",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600",
    ingredients: ["Flour", "Cabbage", "Carrots", "Onions", "Garlic"],
    instructions: ["Prepare dough and rest it.", "Mix chopped vegetables.", "Fill and fold dough wrappers.", "Steam momos until cooked."]
  },
  {
    id: 41,
    name: "Chicken Momos",
    category: "Non-Veg",
    cuisine: "Nepalese",
    time: "40 mins",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600",
    ingredients: ["Chicken mince", "Flour", "Onions", "Garlic", "Pepper"],
    instructions: ["Make a soft dough.", "Mix chicken mince with seasoning.", "Fill wrappers and seal.", "Steam until chicken is fully cooked."]
  },
  {
    id: 42,
    name: "Lemon Rice",
    category: "Lunch",
    cuisine: "South Indian",
    time: "20 mins",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600",
    ingredients: ["Cooked rice", "Lemon", "Peanuts", "Mustard seeds", "Turmeric"],
    instructions: ["Prepare cooked rice.", "Temper mustard seeds and peanuts.", "Add turmeric and lemon juice.", "Mix with rice and serve."]
  },
  {
    id: 43,
    name: "Veg Kathi Roll",
    category: "Snacks",
    cuisine: "Indian",
    time: "30 mins",
    image: "https://commons.wikimedia.org/wiki/Special:FilePath/Kaati_roll.jpg",
    ingredients: ["Roti", "Paneer", "Onions", "Capsicum", "Green chutney"],
    instructions: ["Saute paneer and vegetables.", "Warm rotis on a pan.", "Spread chutney on each roti.", "Add filling, roll and serve."]
  },
  {
    id: 44,
    name: "Egg Curry",
    category: "Non-Veg",
    cuisine: "Indian",
    time: "35 mins",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600",
    ingredients: ["Eggs", "Onions", "Tomatoes", "Ginger garlic paste", "Spices"],
    instructions: ["Boil and peel eggs.", "Cook onions and ginger garlic paste.", "Add tomatoes and spices.", "Add eggs and simmer in gravy."]
  },
  {
    id: 45,
    name: "Fish Fry",
    category: "Non-Veg",
    cuisine: "Indian",
    time: "25 mins",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600",
    ingredients: ["Fish fillets", "Chili powder", "Turmeric", "Lemon", "Oil"],
    instructions: ["Clean and dry fish.", "Apply chili powder, turmeric and lemon.", "Marinate briefly.", "Pan-fry until cooked on both sides."]
  },
  {
    id: 46,
    name: "Chicken 65",
    category: "Non-Veg",
    cuisine: "Indian",
    time: "40 mins",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600",
    ingredients: ["Chicken", "Yogurt", "Chili powder", "Corn flour", "Curry leaves"],
    instructions: ["Marinate chicken with yogurt and spices.", "Coat lightly with corn flour.", "Fry chicken until fully cooked.", "Toss with curry leaves and serve."]
  },
  {
    id: 47,
    name: "Corn Cheese Sandwich",
    category: "Snacks",
    cuisine: "International",
    time: "15 mins",
    image: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=600",
    ingredients: ["Bread", "Sweet corn", "Cheese", "Butter", "Pepper"],
    instructions: ["Mix corn, cheese and pepper.", "Spread filling between bread slices.", "Butter the outer sides.", "Toast until golden and cheese melts."]
  },
  {
    id: 48,
    name: "Veg Schezwan Rice",
    category: "Veg",
    cuisine: "Chinese",
    time: "30 mins",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600",
    ingredients: ["Cooked rice", "Carrots", "Beans", "Capsicum", "Schezwan sauce"],
    instructions: ["Chop vegetables finely.", "Stir-fry vegetables on high heat.", "Add rice and Schezwan sauce.", "Toss well and serve hot."]
  },
  {
    id: 49,
    name: "Pav Bhaji",
    category: "Dinner",
    cuisine: "Mumbai Street Food",
    time: "40 mins",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600",
    ingredients: ["Potatoes", "Cauliflower", "Peas", "Tomatoes", "Pav bhaji masala"],
    instructions: ["Boil and mash vegetables.", "Cook tomatoes and spices in butter.", "Mix mashed vegetables into gravy.", "Serve with toasted pav and lemon."]
  },
  {
    id: 50,
    name: "Kheer",
    category: "Dessert",
    cuisine: "Indian",
    time: "40 mins",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600",
    ingredients: ["Rice", "Milk", "Sugar", "Cardamom", "Cashews"],
    instructions: ["Wash rice and add to simmering milk.", "Cook slowly until rice is soft.", "Add sugar and cardamom.", "Garnish with roasted cashews and serve."]
  }
];

// Automatically assign food images based on recipe names
recipes.forEach((recipe) => {
  recipe.image = `https://loremflickr.com/600/450/${encodeURIComponent(
    recipe.name
  )},food`;
});

export default recipes;