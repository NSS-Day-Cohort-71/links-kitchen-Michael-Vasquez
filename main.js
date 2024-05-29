/*
    we have a cook function that has two parameters
    we want to be able to choose the ingredients in the argument when we invoke the function and get the completed dish
    an array of objects will be good as we can can have a first and second ingredient property, with a dish property with their associated value
    we can take the array of objects and store it in a variable and do a for statement 


*/
const materials = [{
        id: 1,
        ingredientOne: "Hylian Rice",
        ingredientTwo: "Big Hearty Truffle",
        cookedDish: "Mushroom Rice Balls"
},{
        id: 2,
        ingredientOne: "Hateno Cheese",
        ingredientTwo: "Bird Egg",
        cookedDish: "Cheesy Omelette"   
},{
        id: 3,
        ingredientOne: "Tabantha Wheat",
        ingredientTwo: "Hateno Cheese",
        cookedDish: "Cheesy Hylian Pizza"
},{
        id: 4,
        ingredientOne: "Raw Prime Meat",
        ingredientTwo: "Hylian Rice",
        cookedDish: "Prime Meat and Rice Bowl"
},{
        id: 5,
        ingredientOne: "Fresh Milk",
        ingredientTwo: "Cane Sugar",
        ingredientThree: "Raw Bird Thigh",
        cookedDish: "Egg Pudding"
}]

const materialsArray = materials

const meals = []

const cook = (firstIngredient, secondIngredient, thirdIngredient) => {
    for (const ingredient of materialsArray) {
        /*
        This line checks if the third ingredient is undefined 
        because I have recipes that only have two ingredients and uses this if statement 
        as I only want the recipe for two ingredient and two parameters
        and have three parameters and all parameters are used at my level of thinking
        */
        if (thirdIngredient === undefined){ 
            if (firstIngredient === ingredient.ingredientOne && secondIngredient === ingredient.ingredientTwo) {
            meals.push(ingredient)
        }
        } else {
            if (firstIngredient === ingredient.ingredientOne && secondIngredient === ingredient.ingredientTwo && thirdIngredient === ingredient.ingredientThree) {
            meals.push(ingredient)
            }
        }
    }
    return meals
}

console.log('MEALS:')
console.log('---------------')
cook("Fresh Milk", "Cane Sugar", "Raw Bird Thigh")

for (const meal of meals) {
        console.log(`Success! You made ${meal.cookedDish}!`)  
    }



