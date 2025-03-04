const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];
let positionFruit = 0;
for (let food = 0; food < foodSchedule.length; food++) {
    if (foodSchedule[food].isVegan == false) {
        foodSchedule[food] = {name: fruits[positionFruit], isVegan: true };
        positionFruit++
    }
}

console.log(foodSchedule);