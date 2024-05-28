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
}]

const materialsArray = materials

const meals = []

const cook = (firstIngredient, secondIngredient) => {
    for (const ingredient of materialsArray) {
        if (firstIngredient === ingredient.ingredientOne && secondIngredient === ingredient.ingredientTwo) {
            meals.push(ingredient.cookedDish)
        }
    }
    return meals
}

console.log('MEALS:')
console.log('---------------')
cook("Raw Prime Meat", "Hylian Rice")

for (const meal of meals) {
    console.log(`Success you made ${meal}!`)
}


