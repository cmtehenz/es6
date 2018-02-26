/*
var bob = {
    _name: "Bob",
    _friends: ["Guilerme", "Camila", "Murilo" ],

    printFriends: function printFriends(){
        var self = this;
        this._friends.forEach(function(f){
            return console.log(self._name + " knows" + f)
        });
    }
};
bob.printFriends();

*/

var color = () => console.log("red"); //arrom function
color();

var bob = {
    _name: "Bob",
    _friends: ["Guilerme", "Camila", "Murilo" ],

    printFriends: function printFriends(){
        this._friends.forEach(f => 
            console.log(this._name + " knows " + f));
    }
};
bob.printFriends();

class Color {
    constructor(codeColor, nameColor){
        this.codeColor = codeColor;
        this.nameColor = nameColor;
    };

    getColor(){
        return {
            codeColor: this.codeColor,
            nameColor: this.nameColor
        }
    };
}

let red = new Color("red123", "Red");

console.log(red.getColor());

let name = "Gustavo";
let age = 30;
//let text = 'name: ' + name + ' age: ' + age;

let text = `
    name: ${name}
    age: ${age}
`;

console.log(text);
/*
function test(valueA){
    var valueB = arguments.length <= 1 || arguments[1] === undefined ? 4 : arguments[1]
    return valueA + valueB;
}

console.log(test(2));
*/

function test(valueA, valueB = 4){
    return valueA + valueB;
}

console.log(test(4)+ '----\n');

var list = [ "test", 34, {name: "Gustavo"}];

/*
for(var i in list){
    console.log(list[i]);
}
*/

for(let i of list){
    console.log(i);
}

class Person{
    constructor(name, email, phone){
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    toString(){
        return `Name: ${this.name}
                Email: ${this.email}
                Phone: ${this.phone}
                `;
    }

}

class Client extends Person {
    constructor(id, name, email, phone){
        super(name, email, phone);
        this.id = id;
    };
    toString(){
        return `
                ID: ${this.id}
                ${super.toString()}`;
    }
}

var test = new Client(1, "Gustavo", "cmtehenz@gmail.com", "49 992121-3577");

console.log(test.toString());


let color1 = new Set();
color1.add("red").add("green").add("red");

if(color1.size === 2 && color1.has("red")){
    for(let key of color1.values()){
        console.log(key);
    }
}