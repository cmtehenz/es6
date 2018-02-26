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
