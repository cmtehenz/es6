"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

var color = function color() {
    return console.log("red");
}; //arrom function
color();

var bob = {
    _name: "Bob",
    _friends: ["Guilerme", "Camila", "Murilo"],

    printFriends: function printFriends() {
        var _this = this;

        this._friends.forEach(function (f) {
            return console.log(_this._name + " knows " + f);
        });
    }
};
bob.printFriends();

var Color = function () {
    function Color(codeColor, nameColor) {
        _classCallCheck(this, Color);

        this.codeColor = codeColor;
        this.nameColor = nameColor;
    }

    _createClass(Color, [{
        key: "getColor",
        value: function getColor() {
            return {
                codeColor: this.codeColor,
                nameColor: this.nameColor
            };
        }
    }]);

    return Color;
}();

var red = new Color("red123", "Red");

console.log(red.getColor());

var name = "Gustavo";
var age = 30;
//let text = 'name: ' + name + ' age: ' + age;

var text = "\n    name: " + name + "\n    age: " + age + "\n";

console.log(text);
/*
function test(valueA){
    var valueB = arguments.length <= 1 || arguments[1] === undefined ? 4 : arguments[1]
    return valueA + valueB;
}

console.log(test(2));
*/

function test(valueA) {
    var valueB = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 4;

    return valueA + valueB;
}

console.log(test(4) + '----\n');

var list = ["test", 34, { name: "Gustavo" }];

/*
for(var i in list){
    console.log(list[i]);
}
*/

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var i = _step.value;

        console.log(i);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}
