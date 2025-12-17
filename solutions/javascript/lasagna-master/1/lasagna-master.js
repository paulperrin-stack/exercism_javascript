/* Task 1 */

export function cookingStatus(time) {
  if (time === 0) {
    return 'Lasagna is done.'
  } else if (time > 0) {
    return 'Not done, please wait.'
  } else {
    return 'You forgot to set the timer.'
  }
}

/* Task 2 */

export function preparationTime(layers, timePerLayer = 2){
  return layers.length * timePerLayer
}

/* Task 3 */

export function quantities(ingredients) {
  return {
    noodles: ingredients.filter(i => i === 'noodles').length * 50,
    sauce: ingredients.filter(i => i === 'sauce').length * 0.2,
  }
}

/* Task 4 */

export function addSecretIngredient (friendList, myList) {
  myList.push(friendList[friendList.length - 1]);
}

/* Task 5 */

export function scaleRecipe(recipe, amount) {
  const scaled = {};
  for (const key in recipe) {
    scaled[key] = recipe[key] * amount / 2;
  }
  return scaled;
}