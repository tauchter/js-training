var person = {
    _name: "Juan",

    getName: function() {
        return this._name;
    },

    getSteps: function() {

        return this.walk.steps;
    },

    walk: (function () {

        function walk() {

            walk.steps++;
        }

        walk.steps = 0;

        return walk;
    })();
};

function Person(name) {
    this._name = name;
}

Person.prototype.getName = function() {
    return this._name;
}

Person.prototype.getSteps = function() {
    return this.walk.steps;
}