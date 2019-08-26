const pizza = [
    {
        name: "pep",
        number:3,
        price: 5
    },

    {
        name: "mushroom",
        number:3,
        price: 5
    },

    {
        name: "mango",
        number:3,
        price: 10
    },
]

//["pep", "mushroom", "mango", "pineapple"]

//console.log(pizza[0]);

const [pep, mushroom, mango] = pizza;

//console.log(mango.number);

var pizzaObj = {
    pep: "monday",
    array: [
        1,
        2,
        3
    ],
    funFunction: function (name) {
        console.log(`I'm ${name}'s function`);
    }
};

const {peppStr, arrayArr, funFunction} = pizzaObj;
//funFunction("Ethan");


var dogType = 'pug';
var dog = {
    [dogType + 'Bark'] () {
        console.log("I'm a pug");
    }
};

const {pugBark} =  dog;
pugBark();
