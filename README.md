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
console.log(getAverageArray([1,2,3,4,5]));

# getSumArray
console.log(getSumArray([1,2,3,4,5]));

# getMinFromArray
console.log(getMinFromArray([1,2,3,4,5]));

# getMaxFromArray
console.log(getMaxFromArray([1,2,3,4,5]));

# generateToken
console.log(generateToken(20, 'strong'));

# generateDecimalCode
console.log(generateDecimalCode(8));


        