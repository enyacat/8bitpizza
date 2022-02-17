export const foodItems = [
    {
        name: 'Garlic bread',
        img: '/img/Starters/Garlic_Bread.jpeg',
        section: 'Starters',
        ingredients: '',
        price: 4

    },
    {
        name: 'Chicken wings',
        img: '/img/Starters/Chicken_wings.jpeg',
        section: 'Starters',
        ingredients: '',
        price: 10

    },
    {
        name: 'Garlic cheese pizza',
        img: '/img/Starters/Garlic_Cheese.jpeg',
        section: 'Starters',
        ingredients: '',
        price: 12

    },
    {
        name: 'Olive feta pizza',
        img: '/img/Starters/Olive_Feta.jpeg',
        section: 'Starters',
        ingredients: 'Garlic base, cheese, olive and feta',
        price: 12

    },
    {
        name: 'Wedges',
        img: '/img/Starters/Wedges.jpeg',
        section: 'Starters',
        ingredients: 'With sour cream and sweet chilli sauce',
        price: 8

    },
    {
        name: 'Margarita',
        img: '/img/traditional/Margarita.jpeg',
        section: 'Traditional pizza',
        ingredients: 'Napolitana Sauce, Cheese, Oregano',
        price: 13,
        defaultToppings: [{ checked: false, section: "Sauce", name: "Napolitana Sauce", price: 0 }, { checked: false, section: "Cheese", name: "Cheese", price: 2 }, { checked: false, section: "Garnish", name: "Oregano", price: 0 }]
    },
    {
        name: 'Pepperoni',
        img: '/img/traditional/Pepperoni.jpeg',
        section: 'Traditional pizza',
        ingredients: 'Hot Peperoni',
        price: 13,
        defaultToppings: [{ checked: false, section: "Sauce", name: "Tomato Base", price: 0 }, { checked: false, section: "Cheese", name: "Cheese", price: 2 }, { checked: false, section: "Meat", name: "Hot Pepperoni", price: 2 }]

    },
    {
        name: 'Hawaiian',
        img: '/img/traditional/Hawaiian.jpeg',
        section: 'Traditional pizza',
        ingredients: 'Ham And Pineapple',
        price: 13,
        defaultToppings: [{ checked: false, section: "Sauce", name: "Tomato Base", price: 0 }, { checked: false, section: "Cheese", name: "Cheese", price: 2 }, { checked: false, section: "Veggies&Fruits", name: "Pineapple", price: 1 }, { checked: false, section: 'Meat', name: "Ham", price: 2 }]

    },
    {
        name: 'Oz',
        img: '/img/traditional/Oz.jpeg',
        section: 'Traditional pizza',
        ingredients: 'Ham, Bacon, Egg',
        price: 13,
        defaultToppings: [{ checked: false, section: "Sauce", name: "Tomato Base", price: 0 }, { checked: false, section: "Cheese", name: "Cheese", price: 2 }, { checked: false, section: 'Meat', name: "Ham", price: 2 }, { checked: false, section: "Meat", name: "Bacon", price: 2 }, { checked: false, section: "Meat", name: "Egg", price: 2 }]

    },
    {
        name: 'Bolognese',
        img: '/img/traditional/Bolognese.jpeg',
        section: 'Traditional pizza',
        ingredients: 'Tom And Garlic Mix Base, Beef Mince, Tomato, Onion, Cheese And Herbs',
        price: 13,
        defaultToppings: [{ checked: false, section: "Sauce", name: "Tomato Base", price: 0 }, { checked: false, section: "Cheese", name: "Cheese", price: 2 }, { checked: false, section: 'Veggies&Fruits', name: "Onions", price: 1 }, { checked: false, section: "Veggies&Fruits", name: "Fresh Tomato", price: 1 }, { checked: false, section: "Meat", name: "Beef", price: 2 }, { checked: false, section: "Sauce", name: "Garlic Base", price: 0 }]

    },
    {
        name: 'Supreme',
        img: '/img/gourmet/Supreme.jpeg',
        section: 'Gourmet pizza',
        ingredients: 'Tom Base, Ham Pepperoni, Mushroom, Onion, Capsicum, Pineapple, Cheese',
        price: 15,
        defaultToppings: [{ checked: false, section: "Sauce", name: "Tomato Base", price: 0 }, { checked: false, section: "Cheese", name: "Cheese", price: 2 }, { checked: false, section: "Veggies&Fruits", name: "Mushroom", price: 1 }, { checked: false, section: 'Veggies&Fruits', name: "Onions", price: 1 }, { checked: false, section: "Veggies&Fruits", name: "Pineapple", price: 1 }, { checked: false, section: "Veggies&Fruits", name: "Capsicum", price: 1 }, { checked: false, section: 'Meat', name: "Ham", price: 2 }, { checked: false, section: "Meat", name: "Hot Pepperoni", price: 2 }]

    },
    {
        name: 'BBQ Chicken',
        img: '/img/gourmet/BBQ_Chicken.jpeg',
        section: 'Gourmet pizza',
        ingredients: 'BBQ Base, Chicken, Mushroom, Onion, Pineapple, Cheese',
        price: 15,
        defaultToppings: [{ checked: false, section: "Sauce", name: "BBQ Sauce Base", price: 0 }, { checked: false, section: "Cheese", name: "Cheese", price: 2 }, { checked: false, section: "Veggies&Fruits", name: "Mushroom", price: 1 }, { checked: false, section: 'Veggies&Fruits', name: "Onions", price: 1 }, { checked: false, section: "Veggies&Fruits", name: "Pineapple", price: 1 }, { checked: false, section: "Meat", name: "Chicken", price: 2 }]

    },
    {
        name: 'Mexican',
        img: '/img/gourmet/Mexican.jpeg',
        section: 'Gourmet pizza',
        ingredients: 'Tom Base, Pepperoni, Mushroom,Onion, Capsicum, Jalapenos, Cheese, Chilli Flakes',
        price: 15,
        defaultToppings: [{ checked: false, section: "Sauce", name: "Tomato Base", price: 0 }, { checked: false, section: "Cheese", name: "Cheese", price: 2 }, { checked: false, section: "Veggies&Fruits", name: "Mushroom", price: 1 }, { checked: false, section: 'Veggies&Fruits', name: "Onions", price: 1 }, { checked: false, section: "Veggies&Fruits", name: "Capsicum", price: 1 }, { checked: false, section: "Veggies&Fruits", name: "Jalapenos", price: 1 }, { checked: false, section: "Meat", name: "Hot Pepperoni", price: 2 }, { checked: false, section: "Garnish", name: "Chilli Flakes", price: 0 }]

    },
    {
        name: 'Meat Lovers',
        img: '/img/gourmet/Meat_Lovers.jpeg',
        section: 'Gourmet pizza',
        ingredients: 'BBQ Base, Ham Pepperoni, Cabanossis, Bacon, Cheese',
        price: 15,
        defaultToppings: [{ checked: false, section: "Sauce", name: "BBQ Sauce Base", price: 0 }, { checked: false, section: "Cheese", name: "Cheese", price: 2 }, { checked: false, section: 'Meat', name: "Ham", price: 2 }, { checked: false, section: "Meat", name: "Hot Pepperoni", price: 2 }, { checked: false, section: "Meat", name: "Bacon", price: 2 }, { checked: false, section: "Meat", name: "Cabanossi", price: 2 }, { checked: false, section: "Meat", name: "Beef", price: 2 }]

    },
    {
        name: 'Med Lamb',
        img: '/img/gourmet/Med_Lamb.jpeg',
        section: 'Gourmet pizza',
        ingredients: 'Garlic Base, Lamb, Tomato, Onion, Capsicum, Cheese, Oregano (Topped With Mint Yoghurt And Lemon Wedge)',
        price: 15
    },
    {
        name: 'Peri-Peri Chicken',
        img: '/img/gourmet/Peri_Peri_Chicken.jpeg',
        section: 'Gourmet pizza',
        ingredients: 'Tom Base, Chicken, Caramelized Onion, Red Capsicum, Shallots, Cheese (Topped With Peri Peri Sauce)',
        price: 15,
        defaultToppings: [{ checked: false, section: "Garnish", name: "Peri-Peri Sauce Base", price: 1 }, { checked: false, section: "Cheese", name: "Cheese", price: 2 }, { checked: false, section: 'Veggies&Fruits', name: "Onions", price: 1 }, { checked: false, section: "Veggies&Fruits", name: "Capsicum", price: 1 }, { checked: false, section: "Veggies&Fruits", name: "Fresh Tomato", price: 1 }, { checked: false, section: "Meat", name: "Chicken", price: 2 }]

    },
    {
        name: 'Vegetarian',
        img: '/img/gourmet/Vegeterian.jpeg',
        section: 'Gourmet pizza',
        ingredients: 'Tom Base, Mushroom, Tomatoes, Red Capsicum, Onion, Pineapple, Cheese, Olives (Topped With Pesto Aioli)',
        price: 15,
        defaultToppings: [{ checked: false, section: "Sauce", name: "Tomato Base", price: 0 }, { checked: false, section: "Cheese", name: "Cheese", price: 2 }, { checked: false, section: "Veggies&Fruits", name: "Mushroom", price: 1 }, { checked: false, section: 'Veggies&Fruits', name: "Onions", price: 1 }, { checked: false, section: "Veggies&Fruits", name: "Pineapple", price: 1 }, { checked: false, section: "Veggies&Fruits", name: "Capsicum", price: 1 }, { checked: false, section: "Veggies&Fruits", name: "Olives", price: 1 }, { checked: false, section: "Veggies&Fruits", name: "Fresh Tomato", price: 1 }]

    },
    {
        name: 'Alex',
        img: '/img/gourmet/ALEX.jpeg',
        section: 'Gourmet pizza',
        ingredients: 'Tom Base, Tomato, Onion, Shallots, Cheese, Olive, Feta, Oregano',
        price: 15,
        defaultToppings: [{ checked: false, section: "Sauce", name: "Tomato Base", price: 0 }, { checked: false, section: "Cheese", name: "Feta Cheese", price: 2 }, { checked: false, section: 'Veggies&Fruits', name: "Onions", price: 1 }, { checked: false, section: "Veggies&Fruits", name: "Olives", price: 1 }, { checked: false, section: "Veggies&Fruits", name: "Shallots", price: 1 }, { checked: false, section: "Veggies&Fruits", name: "Fresh Tomato", price: 1 }, { checked: false, section: "Garnish", name: "Oregano", price: 0 }, { checked: false, section: "Sauce", name: "Garlic Base", price: 0 }]

    },
    {
        name: 'Tandoori Chicken',
        img: '/img/gourmet/Tandoori_Chicken.jpeg',
        section: 'Gourmet pizza',
        ingredients: 'Chicken, Mushroom, Onion And Capsicum On A Tandoori Sauce Base',
        price: 15,
        defaultToppings: [{ checked: false, section: "Sauce", name: "Tandoori Sauce Base", price: 0 }, { checked: false, section: "Cheese", name: "Cheese", price: 2 }, { checked: false, section: "Veggies&Fruits", name: "Mushroom", price: 1 }, { checked: false, section: 'Veggies&Fruits', name: "Onions", price: 1 }, { checked: false, section: "Veggies&Fruits", name: "Capsicum", price: 1 }, { checked: false, section: "Meat", name: "Chicken", price: 2 }]

    },
    {
        name: 'Med Vege',
        img: '/img/gourmet/MED_Vege.jpeg',
        section: 'Gourmet pizza',
        ingredients: 'Tom Base, Zucchini, Red Capsicum, Eggplant, Cheese, Olive, Feta (Topped With Pesto Aioli)',
        price: 15

    },
    {
        name: 'Garlic Prawns',
        img: '/img/seafood/Garlic_Prawn.jpeg',
        section: 'Seafood pizza',
        ingredients: 'Tom Base, Red Capsicum, Shallots, Sundried Tomatoes, Cheese, Garlic Marinated Prawns, Feta, (Served With Lemon Wedges)',
        price: 16

    },
    {
        name: 'Szechuan Prawn',
        img: '/img/seafood/Szechuan_Prawn.jpeg',
        section: 'Seafood pizza',
        ingredients: 'Sweet-Chilli Sauce Base, Green Capsicum, Shallots, Cheese, Szechuan Seasoning Marinated Prawns(Served With Lemon Wedges)',
        price: 16

    },
    {
        name: 'Hot Chilli Prawns',
        img: '/img/seafood/Hot_Chilli_Prawns.jpeg',
        section: 'Seafood pizza',
        ingredients: 'Garlic Base, Chilli Sauce Marinated Prawns, Cheese (Served With Fresh Shallots And Lemon Wedges)',
        price: 16

    },
    {
        name: 'Vegetarian',
        img: '/img/coming_soon.png',
        section: 'Pasta',
        ingredients: 'Garlic, Mushroom, Onion, Capsicum, Olives, Eggplant, Tomato Sauce (Served With Parmesan-Cheese And Fresh Shallots)',
        price: 12

    },
    {
        name: 'Bolognese',
        img: '/img/coming_soon.png',
        section: 'Pasta',
        ingredients: 'Beef Mince, Garlic Tomato (Served With Parmesan-Cheese And Fresh Shallots)',
        price: 12

    },
    {
        name: 'Pollo e Funghi',
        img: '/img/coming_soon.png',
        section: 'Pasta',
        ingredients: 'Garlic, Chicken, Mushroom, Beef Cubes (Served With Parmesan-Cheese And Fresh Shallots)',
        price: 12

    },
    {
        name: 'Boscaiola',
        img: '/img/coming_soon.png',
        section: 'Pasta',
        ingredients: 'Garlic, Mushroom, Ham, Bacon, Beef Cubes, Creamy Sauce(Served With Parmesan-Cheese And Fresh Shallots)',
        price: 12

    },
    {
        name: 'Carbonara',
        img: '/img/coming_soon.png',
        section: 'Pasta',
        ingredients: 'Garlic, Bacon, Mushroom, Beef Cubes, Egg (Served With Parmesan-Cheese And Fresh Shallots)',
        price: 12

    },
    {
        name: 'Nutella And Strawberry Pizza',
        img: '/img/desserts/Nutella_Strawberry.jpeg',
        section: 'Desserts',
        ingredients: 'Nutella and Strawberry',
        price: 14

    },
    {
        name: 'Nutella And Oreos Pizza',
        img: '/img/coming_soon.png',
        section: 'Desserts',
        ingredients: 'Nutella And Oreos',
        price: 14

    },
    {
        name: 'Nutella And Strawberry And Oreo Pizza',
        img: '/img/desserts/Nutella_Strawberry_Oreo.jpeg',
        section: 'Desserts',
        ingredients: '',
        price: 14

    },
    {
        name: 'French Vanilla Cheesecake 450g',
        img: '/img/coming_soon.png',
        section: 'Desserts',
        ingredients: '',
        price: 6

    },
    {
        name: 'Chocolate Bavarian 450g',
        img: '/img/coming_soon.png',
        section: 'Desserts',
        ingredients: '',
        price: 6

    },
    {
        name: 'Strawberries And Cream 450g',
        img: '/img/coming_soon.png',
        section: 'Desserts',
        ingredients: '',
        price: 6

    },
    {
        name: 'Cookies And Cream 450g',
        img: '/img/coming_soon.png',
        section: 'Desserts',
        ingredients: '',
        price: 6

    },
    {
        name: 'Greek Salad',
        img: '/img/coming_soon.png',
        section: 'Salads',
        ingredients: 'Mixed Leaf, Tomatoes, Cucumber, Olives, Feta, Oregano, Balsamic Glaze',
        price: 12

    },
    {
        name: 'Chicken Caesar Salad',
        img: '/img/coming_soon.png',
        section: 'Salads',
        ingredients: 'Mixed Leaf, Chicken, Bacon, Croutons, Caesar Dressing',
        price: 12

    },
    {
        name: 'Garden Salad',
        img: '/img/salads/Garden_salad.jpeg',
        section: 'Salads',
        ingredients: 'Mixed Leaf, Cucumber, Onion, Cherry Tomatoes, Vegetable Oil, Fresh Lemon Juice And Balsamic Glaze',
        price: 9

    },
    {
        name: 'Deal One',
        img: '/img/deals.jpg',
        section: 'Deals',
        ingredients: '2 Medium Pizzas, 2 Garlic Breads, 1 Bottle Soft Drink',
        price: 36

    },
    {
        name: 'Deal Two',
        img: '/img/deals.jpg',
        section: 'Deals',
        ingredients: '2 Large Pizzas, 2 Garlic Bread And One 1.25L Soft Drink',
        price: 42

    },
    {
        name: 'Deal Three',
        img: '/img/deals.jpg',
        section: 'Deals',
        ingredients: '3 Medium Pizzas, 2 Garlic Breads, 1 Bottle Soft Drink',
        price: 50

    },
    {
        name: 'Deal Four',
        img: '/img/deals.jpg',
        section: 'Deals',
        ingredients: '3 Large Pizzas, 2 Garlic Breads, 1 Bottle Soft Drink',
        price: 56

    },
    {
        name: '1.25L Bottles Soft Drink',
        img: '/img/drinks.png',
        section: 'Beverages',
        ingredients: '',
        price: 4.5

    },
    {
        name: 'Can Soft Drink',
        img: '/img/drinks.png',
        section: 'Beverages',
        ingredients: '',
        price: 2.5

    },
    {
        name: '600ml Water',
        img: '/img/water.png',
        section: 'Beverages',
        ingredients: '',
        price: 3

    }
]

export const foods = foodItems.reduce((res, food) => {
    if (!res[food.section]) {
        res[food.section] = [];
    }
    res[food.section].push(food)
    return res;
}, {})

export function formatPrice(price) {
    return price.toLocaleString('en-AU', {
        style: 'currency',
        currency: 'AUD'
    })
}