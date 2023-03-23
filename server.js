var passwordcontrol = require('./src/EitlabPasswordControl.js');

module.exports = {

    controlPasswordField: function (o) {
        passwordcontrol.controls(o);
    },
    getAverageArray: function (arr) {
        return arr.reduce(function (a, b) {
            return a + b;
        }, 0) / (arr.length === 0 ? 1 : arr.length);
    },
    getSumArray: function (arr) {
        return arr.reduce(function (a, b) {
            return a + b;
        }, 0);
    },
    getMinFromArray: function (arr) {
        if (arr.length <= 0) { throw Error('Error with your array. Maybe its empty') }
        else {
            return Math.min(...arr);
            // return Math.min.apply(null, arr);
        }

    },
    getMaxFromArray: function (arr) {
        if (arr.length <= 0) { throw Error('Error with your array. Maybe its empty') }
        else {
            return Math.max(...arr);
            // return Math.max.apply(null, arr);
        }

    },


    generateToken: function (len, level = 'weak') {
        var listCharacters = passwordcontrol.getCharaterList(level);
        var str = '';
        for (let i = 0; i < len; i++) {
            str += listCharacters[Math.floor(Math.random() * listCharacters.length)];
        }
        return str;
    },

    generateDecimalCode: function (len) {
        var listCharacters = passwordcontrol.getNumericList();
        var code = '';
        for (let i = 0; i < len; i++) {
            code += listCharacters[Math.floor(Math.random() * listCharacters.length)];
        }
        return code;
    },

}