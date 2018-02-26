"use strict";

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var Person = function () {
    function Person(name, email, phone) {
        _classCallCheck(this, Person);

        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    _createClass(Person, [{
        key: "toString",
        value: function toString() {
            return "Name: " + this.name + "\n                Email: " + this.email + "\n                Phone: " + this.phone + "\n                ";
        }
    }]);

    return Person;
}();

var Client = function (_Person) {
    _inherits(Client, _Person);

    function Client(id, name, email, phone) {
        _classCallCheck(this, Client);

        var _this2 = _possibleConstructorReturn(this, (Client.__proto__ || Object.getPrototypeOf(Client)).call(this, name, email, phone));

        _this2.id = id;
        return _this2;
    }

    _createClass(Client, [{
        key: "toString",
        value: function toString() {
            return "\n                ID: " + this.id + "\n                " + _get(Client.prototype.__proto__ || Object.getPrototypeOf(Client.prototype), "toString", this).call(this);
        }
    }]);

    return Client;
}(Person);

var test = new Client(1, "Gustavo", "cmtehenz@gmail.com", "49 992121-3577");

console.log(test.toString());

var color1 = new Set();
color1.add("red").add("green").add("red");

if (color1.size === 2 && color1.has("red")) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
        for (var _iterator2 = color1.values()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var key = _step2.value;

            console.log(key);
        }
    } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                _iterator2.return();
            }
        } finally {
            if (_didIteratorError2) {
                throw _iteratorError2;
            }
        }
    }
}
