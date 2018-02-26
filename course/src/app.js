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

console.log(test(4));

