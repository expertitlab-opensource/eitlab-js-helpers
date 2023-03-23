# eitlab-js-helpers
A powerful helpers to create your application using js
 
## HOW TO INSTALL
# npm install eitlab-js-helpers --save

## HOW TO USE
var myHelpers = require('eitlab-js-helpers');

```javascript 
## METHOD 
# controlPasswordField
 myHelpers.controlPasswordField({
    max: 10,
    input_id: 'inputIdname',
    liste: [],
    level: 'strong',
    show_generate_password_icon: true,
    show_hide_password_icon: true,
    show_copy_password_icon: true
});

# getAverageArray
console.log(myHelpers.getAverageArray([1,2,3,4,5]));

# getSumArray
console.log(myHelpers.getSumArray([1,2,3,4,5]));

# getMinFromArray
console.log(myHelpers.getMinFromArray([1,2,3,4,5]));

# getMaxFromArray
console.log(myHelpers.getMaxFromArray([1,2,3,4,5]));

# generateToken
console.log(myHelpers.generateToken(20, 'strong'));

# generateDecimalCode
console.log(myHelpers.generateDecimalCode(8));


        