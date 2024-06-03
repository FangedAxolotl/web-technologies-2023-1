const Sizes = { Big: 'Big', Small: 'Small' };

class Toping{
    constructor(name, priceMap, caloriesMap){
        this.name = name;
        this.priceMap = priceMap;
        this.caloriesMap = caloriesMap;
    }

    getPrice = (size) => this.priceMap.get(size);
    
    getCalories = (size) => this.caloriesMap.get(size);
}

class Pizza {
    constructor(pizzaType, size){
        this.pizzaType = pizzaType;
        this.size = size;
        this.toppings = [];
    }

    addTopping(topping){
        this.toppings.push(topping);
    }

    removeTopping(topping){
        const index = this.toppings.findIndex(e => e == topping);
        this.toppings.splice(index, 1);
    }

    getToppings = () => this.toppings.map(element => element.name);

    getSize = () => this.size;

    getStuffing = () => this.pizzaType.getName();

    calculatePrice(){
        return this.toppings.reduce((sum, topping) => sum + topping.getPrice(this.size), 0) + this.pizzaType.getPrice(this.size);
    }

    calculateCalories(){
        return this.toppings.reduce((sum, topping) => sum + topping.getCalories(this.size), 0) + this.pizzaType.getPrice(this.size);
    }
}

class PizzaType {
    constructor(name, price, calories) {
        this.name = name;
        this.price = price;
        this.calories = calories;
    }

    getPrice = (size) => this.price.get(size);

    getCalories = (size) => this.calories.get(size);

    getName = () => this.name;
}

// class Margarita extends Pizza {
//     constructor(size) {
//       super('Маргарита', size, 500, 300);
//       this.price += (this.size === Sizes.Big) ? 200 : 100;
//       this.calories += (this.size === Sizes.Big) ? 200 : 100;
//     }
// }

// class Pepperoni extends Pizza {
//     constructor(size) {
//       super('Пепперони', size, 800, 400);
//       this.price += (this.size === Sizes.Big) ? 200 : 100;
//       this.calories += (this.size === Sizes.Big) ? 200 : 100;
//     }
// }
  
//   class Bavarian extends Pizza { 
//     constructor(size) {
//       super('Баварская', size, 700, 450);
//       this.price += (this.size === Sizes.Big) ? 200 : 100;
//       this.calories += (this.size === Sizes.Big) ? 200 : 100;
//     }
// }

const pizzaTypes = [
    new PizzaType("Маргарита", new Map([[Sizes.Big, 700], [Sizes.Small, 600]]), new Map([[Sizes.Big, 500], [Sizes.Small, 400]])),
    new PizzaType("Пепперони", new Map([[Sizes.Big, 1000], [Sizes.Small, 900]]), new Map([[Sizes.Big, 600], [Sizes.Small, 500]])),
    new PizzaType("Баварская", new Map([[Sizes.Big, 900], [Sizes.Small, 800]]), new Map([[Sizes.Big, 650], [Sizes.Small, 550]]))
]

const topings = [
    new Toping("Сырные бортики", new Map([[Sizes.Small, 100], [Sizes.Big, 200]]), new Map([[Sizes.Small, 100], [Sizes.Big, 200]])),
    new Toping("Сливочная моцарелла", new Map([[Sizes.Small, 50], [Sizes.Big, 100]]), new Map([[Sizes.Small, 50], [Sizes.Big, 100]])),
    new Toping("Чеддер и пармезан", new Map([[Sizes.Small, 40], [Sizes.Big, 80]]), new Map([[Sizes.Small, 40], [Sizes.Big, 80]]))
]

const pizza = new Pizza(pizzaTypes[0], Sizes.Big)
pizza.size = Sizes.Big;
console.log('Пицца: ', pizza.getStuffing());
console.log('Размер: ', pizza.getSize());
console.log('Каллории: ', pizza.calculateCalories());
console.log('Цена: ', pizza.calculatePrice());

pizza.addTopping(topings[0]);
console.log('Каллории: ', pizza.calculateCalories());
console.log('Цена: ', pizza.calculatePrice());

pizza.addTopping(topings[1]);
pizza.addTopping(topings[2]);
console.log('Каллории: ', pizza.calculateCalories());
console.log('Цена: ', pizza.calculatePrice());

pizza.getToppings();

pizza.removeTopping(topings[0]);
console.log('Каллории: ', pizza.calculateCalories());
console.log('Цена: ', pizza.calculatePrice()); 
pizza.getToppings();
