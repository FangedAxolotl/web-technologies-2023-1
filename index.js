const Sizes = { Big: 'Big', Small: 'Small' };

class Toping{
    constructor(name, priceMap, caloriesMap, imgUrl){
        this.name = name;
        this.priceMap = priceMap;
        this.caloriesMap = caloriesMap;
        this.imgUrl = imgUrl;
    }

    getName = () => this.name;

    getImgUrl = () => this.imgUrl;

    getPrice = (size) => this.priceMap.get(size);

    getCalories = (size) => this.caloriesMap.get(size);
}

class Pizza {
    constructor(pizzaType, size){
        this.pizzaType = pizzaType;
        this.size = size;
        this.toppings = [];
    }

    setPizzaType(pizzaType) {
        this.pizzaType = pizzaType;
    }

    setSize(size) {
        this.size = size;
    }

    addTopping(topping){
        this.toppings.push(topping);
    }

    removeTopping(topping){
        const index = this.toppings.findIndex(e => e == topping);
        this.toppings.splice(index, 1);
    }

    getToppings = () => this.toppings;

    getSize = () => this.size;

    getStuffing = () => this.pizzaType.getName();

    calculatePrice(){
        return this.toppings.reduce((sum, topping) => sum + topping.getPrice(this.size), 0) + this.pizzaType.getPrice(this.size);
    }

    calculateCalories(){
        return this.toppings.reduce((sum, topping) => sum + topping.getCalories(this.size), 0) + this.pizzaType.getPrice(this.size);
    }

    calculateOnForm(){
        document.getElementById('buttonPrice').textContent = `${this.getPrice()} руб., (${this.getCalories()} кКал)`;
    }
}

class PizzaType {
    constructor(name, price, calories, imgUrl) {
        this.name = name;
        this.price = price;
        this.calories = calories;
        this.imgUrl = imgUrl;
    }

    getImgUrl = () => this.imgUrl;

    getPrice = (size) => this.price.get(size);

    getCalories = (size) => this.calories.get(size);

    getName = () => this.name;
}

const pizzaTypes = [
    new PizzaType("Маргарита", new Map([[Sizes.Big, 700], [Sizes.Small, 600]]), new Map([[Sizes.Big, 500], [Sizes.Small, 400]]), 'static/pizza1.png'),
    new PizzaType("Пепперони", new Map([[Sizes.Big, 1000], [Sizes.Small, 900]]), new Map([[Sizes.Big, 600], [Sizes.Small, 500]]), 'static/pizza2.png'),
    new PizzaType("Баварская", new Map([[Sizes.Big, 900], [Sizes.Small, 800]]), new Map([[Sizes.Big, 650], [Sizes.Small, 550]]), 'static/pizza3.png')
]

const topings = [
    new Toping("Сырные бортики", new Map([[Sizes.Small, 100], [Sizes.Big, 200]]), new Map([[Sizes.Small, 100], [Sizes.Big, 200]]), 'static/bortik.png'),
    new Toping("Сливочная моцарелла", new Map([[Sizes.Small, 50], [Sizes.Big, 100]]), new Map([[Sizes.Small, 50], [Sizes.Big, 100]]), 'static/mozarella.jpg'),
    new Toping("Чеддер и пармезан", new Map([[Sizes.Small, 40], [Sizes.Big, 80]]), new Map([[Sizes.Small, 40], [Sizes.Big, 80]]), 'static/mandp.png')
]

const pizza = new Pizza(pizzaTypes[0], Sizes.Small)

function createPizzaTypes() {
    result = '';
    for (let i = 0; i < pizzaTypes.length; i++) {
        result += `<div class="pizza" onclick="onPizzaTypeClicked(${i})"><img class="pizzas" src="${pizzaTypes[i].getImgUrl()}"><span>${pizzaTypes[i].getName()}</span></div>`
    }
    return result;
}

function createTopings() {
    result = '';
    for (let i = 0; i < topings.length; i++) {
        const toppingName = topings[i].getName();
        const nameWords = toppingName.split(' ');
        result +=  `<div class="product" onclick="onToppingClicked(${i})">
                        <img class="size" src="${topings[i].getImgUrl()}">
                        <span>${nameWords.splice(0, nameWords.length / 2 + nameWords.length % 2).join(' ')}<br>${nameWords.splice(nameWords.length / 2, nameWords.length)}</span>
                        <span>${topings[i].getPrice(pizza.getSize())} &#x20bd;</span>
                    </div>`;
    }
    console.log(result);
    return result;
}

const pizzaContainer = document.getElementsByClassName('pizza-container')[0];
pizzaContainer.innerHTML = createPizzaTypes();

const topingsContainer = document.getElementsByClassName('taste')[0];
topingsContainer.innerHTML = createTopings();

handlePizzaUpdate();

function handlePizzaUpdate() {
    const price = document.getElementById('buttonPrice');
    const calories = document.getElementById('buttonCalories');
    price.innerText = pizza.calculatePrice();
    calories.innerText = pizza.calculateCalories();
}

function clicked(position) {
    if (position === 'left'){
        document.getElementById('small_big_inside').classList.remove('small_big_inside_end');
        pizza.setSize(Sizes.Small);
    }
    else{
        document.getElementById('small_big_inside').classList.add('small_big_inside_end');
        pizza.setSize(Sizes.Big);
    }
    handlePizzaUpdate();
    const topingsContainer = document.getElementsByClassName('taste')[0];
    topingsContainer.innerHTML = createTopings();
}

function onPizzaTypeClicked(index) {
    pizza.setPizzaType(pizzaTypes[index]);
    handlePizzaUpdate();
}

function onToppingClicked(index) {
    const selectedTopping = topings[index];
    pizzaToppings = pizza.getToppings();
    console.log(pizzaToppings.includes(selectedTopping))
    if(pizzaToppings.includes(selectedTopping)) {
        pizza.removeTopping(selectedTopping);
    } else {
        pizza.addTopping(selectedTopping);
    }
    console.log(pizzaToppings)
    handlePizzaUpdate();
}