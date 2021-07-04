export const Food = {
    muesli: 355,
    peanut_butter: 597,
    honey: 304,
    greek_yogurt: 97,
    toasted_bread: 313,
    butter: 731,
    tuna: 109,
    lettuce: 15,
    rice: 360,
    chicken_breast: 104,
    sweet_potato: 86,
    grilled_chicken: 167,
    tomato: 18,
    apples: 52,
    oranges: 47,
    berries: 57,
    potato: 58,
    steak: 235,
};

export const conversion = {
    muesli: { number: 140, measure: "cups" }, // 80 grams muesli ~ 0.57 cups ~ 1/2 of a medium sized cup
    "peanut butter": { number: 13, measure: "spoons" }, // 40 grams pb ~ 3 spoons (1 regular spoon is 13 grams)
    honey: { number: 10, measure: "spoons" }, // 40 grams of honey ~ 4 spoons  (1 regular spoon is 10 grams)
    greek_yogurt: { number: 250, measure: "cups" }, // 260 grams greek yogurt ~ 1 whole medium cup
    tuna: { number: 120, measure: "cans of tuna" }, // 250 grams ~ 2 cans (120 grams each)
    lettuce: { number: 250, measure: "lettuce heads" }, // 250 grams lettuce ~ 1/3 regular sized lettuce
    rice: { number: 100, measure: "cups of cooked rice" }, // 150 grams rice raw should convert to approx 250 grams cooked ~ XXX cups
    apples: { number: 130, measure: "small apples" }, // 1 medium apple ~ 130 grams
    oranges: { number: 150, measure: "small oranges" }, // 150 grams is the average weight of a medium sized orange
    "chicken breast": { number: 200, measure: "fillets" }, // XXXX average weight of a chicken fillet breast
    steak: { number: 250, measure: "small scotch fillet" }, // 260 grams of steak ~ 1 6$ scotch fillet
    potatoes: { number: 110, measure: "small potatoes" }, // potato average
    "sweet potatoes": { number: 110, measure: "small sweet potatoes" }, // potato average
    caffeine: { number: 100, measure: "cups of coffee" }, //
    veggies: { number: 250, measure: "handful of veggies" }, //
    cheese: { number: 1, measure: "grams of cheese" }, //
};

// 6 in total, for each meal plan (2 for maintain, 2 for fasting, 2 for bulk)

export const Data = {
    maintain: {
        normal_surplus: 0,
        normal_tooltip: "-",
        normal: [
            {
                title: "Breakfast",
                meals: [
                    { factor: 0.0358, food: "muesli" },
                    { factor: 0.0179, food: "peanut butter" },
                    { factor: 0.0179, food: "honey" },
                ],
            },
            {
                title: "Lunch",
                meals: [
                    { factor: 0.1119, food: "tuna" },
                    { factor: 0.1119, food: "lettuce" },
                    { factor: 0.0672, food: "rice" },
                ],
            },
            {
                title: "Snack",
                meals: [{ factor: 0.1343, food: "apples" }],
            },
            {
                title: "Dinner",
                meals: [
                    { factor: 0.1567, food: "potatoes" },
                    { factor: 0.1119, food: "steak" },
                ],
            },
        ],
        exercise_surplus: 100,
        exercise_tooltip:
            "We add 100 cals to each training day <br/> as a small surplus",
        exercise: [
            {
                title: "Breakfast",
                meals: [
                    { factor: 0.0358, food: "muesli" },
                    { factor: 0.0179, food: "peanut butter" },
                    { factor: 0.0179, food: "honey" },
                ],
            },
            {
                title: "Lunch",
                meals: [
                    { factor: 0.1119, food: "tuna" },
                    { factor: 0.1119, food: "lettuce" },
                    { factor: 0.0672, food: "rice" },
                ],
            },
            {
                title: "Snack",
                meals: [{ factor: 0.1343, food: "apples" }],
            },
            {
                title: "Dinner",
                meals: [
                    { factor: 0.1567, food: "potatoes" },
                    { factor: 0.1119, food: "steak" },
                ],
            },
        ],
    },
    cut: {
        normal_surplus: -700,
        normal_tooltip: "We substract 700 calories on non training days",
        normal: [
            {
                title: "Fasting",
                meals: [{ factor: 0.1, food: "caffeine" }],
            },
            {
                title: "Lunch",
                meals: [
                    { factor: 0.1678, food: "tuna" },
                    { factor: 0.1678, food: "lettuce" },
                    { factor: 0.2215, food: "sweet potatoes" },
                ],
            },
            {
                title: "Snack",
                meals: [{ factor: 0.2417, food: "apples" }],
            },
            {
                title: "Dinner",
                meals: [
                    { factor: 0.0671, food: "rice" },
                    { factor: 0.2014, food: "chicken breast" },
                    { factor: 0.1343, food: "veggies" },
                ],
            },
        ],
        exercise_surplus: -300,
        exercise_tooltip: "We substract 300 calories on training days",
        exercise: [
            {
                title: "Fasting",
                meals: [{ factor: 0.1, food: "caffeine" }],
            },
            {
                title: "Lunch",
                meals: [
                    { factor: 0.1319, food: "tuna" },
                    { factor: 0.1319, food: "lettuce" },
                    { factor: 0.1741, food: "sweet potatoes" },
                    { factor: 0.0528, food: "cheese" },
                ],
            },
            {
                title: "Snack",
                meals: [{ factor: 0.1899, food: "apples" }],
            },
            {
                title: "Dinner",
                meals: [
                    { factor: 0.0633, food: "rice" },
                    { factor: 0.1583, food: "chicken breast" },
                    { factor: 0.1055, food: "veggies" },
                ],
            },
        ],
    },
    gain: {
        normal_surplus: 100,
        normal_tooltip: "-",
        normal: [
            {
                title: "Breakfast",
                meals: [
                    { factor: 0.0358, food: "muesli" },
                    { factor: 0.0179, food: "peanut butter" },
                    { factor: 0.0179, food: "honey" },
                ],
            },
            {
                title: "Lunch",
                meals: [
                    { factor: 0.1119, food: "tuna" },
                    { factor: 0.1119, food: "lettuce" },
                    { factor: 0.0672, food: "rice" },
                ],
            },
            {
                title: "Snack",
                meals: [{ factor: 0.1343, food: "apples" }],
            },
            {
                title: "Dinner",
                meals: [
                    { factor: 0.1567, food: "potatoes" },
                    { factor: 0.1119, food: "steak" },
                ],
            },
        ],
        exercise_surplus: 600,
        exercise_tooltip:
            "We add 600 cals to each training <br/> day to lean bulk",
        exercise: [
            {
                title: "Breakfast",
                meals: [
                    { factor: 0.0433, food: "muesli" },
                    { factor: 0.0144, food: "peanut butter" },
                    { factor: 0.0144, food: "honey" },
                ],
            },
            {
                title: "Lunch",
                meals: [
                    { factor: 0.0903, food: "tuna" },
                    { factor: 0.0903, food: "lettuce" },
                    { factor: 0.0831, food: "rice" },
                ],
            },
            {
                title: "Snack",
                meals: [{ factor: 0.1084, food: "apples" }],
            },
            {
                title: "Dinner",
                meals: [
                    { factor: 0.1445, food: "potatoes" },
                    { factor: 0.1084, food: "steak" },
                ],
            },
        ],
    },
};
