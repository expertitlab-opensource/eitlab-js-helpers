
var weak_list = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var medium_add_list = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'H', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var strong_add_list = [   '\'', '"', '(', '-', 'è', '_', 'ç', 'à', ')', '=', '+', '*', '/', '€', '$', '!', ':', ';', ',', 'ù', '%', 'µ', '?', '.', '/', '§'];

// class EitlabPasswordControl{
    
//     constructor(o){
//         if (this.access_urls().includes(location.origin)){ this.control(o)}
//     }
//     access_urls(){
//         return ['https://myeasyclassrooms.com', 'file://', 'https://expert-sms.com', 'https://expertitlab.com', 'https://myeasystock.com']
//     }
//     createIconCdn(){
//         let link = document.createElement('link');
//         link.setAttribute('reel', 'stylesheet')
//         link.setAttribute('href', 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css');
//         document.querySelector('body').appendChild(link);
//     }
//     control(o) {
//     if (!(o instanceof Object)) throw Error('invalid argument: param must be an Object');
//     if (!o.hasOwnProperty('max')) { o.max = 8 }
//     if (!o.hasOwnProperty('color')) { o.color = '#03989e' }
//     if (!o.hasOwnProperty('input_id')) { throw Error('You must give input password id'); }
//     if (!o.hasOwnProperty('liste')) { o.liste = [] }
//     if (!o.hasOwnProperty('level')) { o.level = 'strong' }

//     let weak_c = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//     let medium_add_c = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'H', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
//     let strong_add_c = ['&', 'é', '\'', '"', '(', '-', 'è', '_', 'ç', 'à', ')', '=', '+', '*', '/', '€', '$', '!', ':', ';', ',', 'ù', '%', 'µ', '?', '.', '/', '§'];

//     if (o.liste.length > 0) {

//     } else {
//         switch (o.level) {
//             case 'strong': o.liste = weak_c.concat(medium_add_c).concat(strong_add_c); break;
//             case 'medium': o.liste = weak_c.concat(medium_add_c); break;
//             case 'weak': o.liste = weak_c; break;
//             default: o.liste = weak_c.concat(medium_add_c).concat(strong_add_c); break;
//         }
//     }


//     let pwdInp = document.getElementById(o.input_id);
//     let left = 20;

//     if (o.hasOwnProperty('show_hide_password_icon')) {
//         if (o.show_hide_password_icon) {
//             this.createIconCdn();
//             pwdInp.parentElement.setAttribute('style', 'position:relative!important;');
//             let icon = document.createElement('i');
//             icon.setAttribute('style', 'color:'+o.color+'!important;cursor:pointer;z-index: 9999999;position:absolute;top:' + pwdInp.offsetHeight / 4 + 'px;right:' + left +'px;')
//             icon.setAttribute('id', 'eitlab_icon_eye');
//             icon.setAttribute('class', 'bi bi-eye');
//             pwdInp.parentElement.appendChild(icon);
//             document.getElementById('eitlab_icon_eye').addEventListener('click', function () {
//                 if (pwdInp.type == 'text') {
//                     pwdInp.type = 'password'
//                     icon.className = 'bi bi-eye-slash';
//                 } else {
//                     pwdInp.type = 'text'
//                     icon.className = 'bi bi-eye';
//                 }
//             });
//             left = 40;
//         }
//     }

//     if (o.hasOwnProperty('show_copy_password_icon')) {
//         if (o.show_copy_password_icon) {
//             this.createIconCdn();
//             pwdInp.parentElement.setAttribute('style', 'position:relative!important;');
//             let icon_copy = document.createElement('i');
//             icon_copy.setAttribute('style', 'color:'+o.color+'!important;cursor:pointer;z-index: 9999999;position:absolute;top:' + pwdInp.offsetHeight / 4 + 'px;right:' + left + 'px;')
//             icon_copy.setAttribute('id', 'eitlab_icon_copy');
//             icon_copy.setAttribute('class', 'bi bi-clipboard');
//             pwdInp.parentElement.appendChild(icon_copy);
//             let ic = document.getElementById('eitlab_icon_copy');
//             ic.addEventListener('click', function () {
//                 pwdInp.select()
//                 navigator.clipboard.writeText(pwdInp.value)
//                 // document.execComamnd('copy)
//                 ic.className = 'bi bi-clipboard-check';
//                 setTimeout(function () { ic.className = 'bi bi-clipboard'; }, 1500)
//             });
//             left = 60;
//         }
//     }
//     if (o.hasOwnProperty('show_generate_password_icon')) {
//         if (o.show_generate_password_icon) {
//             this.createIconCdn();
//             pwdInp.parentElement.setAttribute('style', 'position:relative!important;');
//             let icon_generate = document.createElement('i');
//             icon_generate.setAttribute('style', 'color:'+o.color+'!important;cursor:pointer;z-index: 9999999;position:absolute;top:' + pwdInp.offsetHeight / 4 + 'px;right:' + left + 'px;')
//             icon_generate.setAttribute('id', 'eitlab_icon_generate');
//             icon_generate.setAttribute('class', 'bi bi-exclamation-circle');
//             pwdInp.parentElement.appendChild(icon_generate);
//             document.getElementById('eitlab_icon_generate').addEventListener('click', function () {
//                 let code = '';
//                 for (let j = 0; j < o.max; j++) { code += o.liste[Math.ceil(Math.random() * (o.liste.length - 1))]; }
//                 pwdInp.value = code;
//             })

//             left = 80;

//         }
//     }



// }


// }
function createIconCdn(){
    let link = document.createElement('link');
    link.setAttribute('reel', 'stylesheet')
    link.setAttribute('href', 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css');
    document.querySelector('body').appendChild(link);
}

module.exports = {

    getCharaterList: function(level){
        let listChar = [];
        switch ( level) {
            case 'strong': listChar = weak_list.concat(medium_add_list).concat(strong_add_list); break;
            case 'medium': listChar = weak_list.concat(medium_add_list); break;
            case 'weak': listChar = weak_list; break;
            default: listChar = weak_list.concat(medium_add_list).concat(strong_add_list); break;
        }
        return listChar;
    },
    getNumericList: function(){
        return [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    },
    controls: function(o) {

        if (!(o instanceof Object)) throw Error('invalid argument: param must be an Object');
        if (!o.hasOwnProperty('max')) { o.max = 8 }
        if (!o.hasOwnProperty('color')) { o.color = '#03989e' }
        if (!o.hasOwnProperty('input_id')) { throw Error('You must give input password id'); }
        if (!o.hasOwnProperty('listCharacters')) { o.listCharacters = [] }
        if (!o.hasOwnProperty('level')) { o.level = 'strong' }
    
        let strong_add_c = ['&', 'é', '\'', '"', '(', '-', 'è', '_', 'ç', 'à', ')', '=', '+', '*', '/', '€', '$', '!', ':', ';', ',', 'ù', '%', 'µ', '?', '.', '/', '§'];
    
        if (o.listCharacters.length > 0) {
    
        } else {
            switch (o.level) {
                case 'strong': o.listCharacters = weak_list.concat(medium_add_list).concat(strong_add_c); break;
                case 'medium': o.listCharacters = weak_list.concat(medium_add_list); break;
                case 'weak': o.listCharacters = weak_list; break;
                default: o.listCharacters = weak_list.concat(medium_add_list).concat(strong_add_c); break;
            }
        }
    
        let pwdInp = document.getElementById(o.input_id);
        let left = 20;
    
        if (o.hasOwnProperty('show_hide_password_icon')) {
            if (o.show_hide_password_icon) {
                createIconCdn();
                pwdInp.parentElement.setAttribute('style', 'position:relative!important;');
                let icon = document.createElement('i');
                icon.setAttribute('style', 'color:'+o.color+'!important;cursor:pointer;z-index: 9999999;position:absolute;top:' + pwdInp.offsetHeight / 4 + 'px;right:' + left +'px;')
                icon.setAttribute('id', 'eitlab_icon_eye');
                icon.setAttribute('class', 'bi bi-eye');
                pwdInp.parentElement.appendChild(icon);
                document.getElementById('eitlab_icon_eye').addEventListener('click', function () {
                    if (pwdInp.type == 'text') {
                        pwdInp.type = 'password'
                        icon.className = 'bi bi-eye-slash';
                    } else {
                        pwdInp.type = 'text'
                        icon.className = 'bi bi-eye';
                    }
                });
                left = 40;
            }
        }
    
        if (o.hasOwnProperty('show_copy_password_icon')) {
            if (o.show_copy_password_icon) {
                createIconCdn();
                pwdInp.parentElement.setAttribute('style', 'position:relative!important;');
                let icon_copy = document.createElement('i');
                icon_copy.setAttribute('style', 'color:'+o.color+'!important;cursor:pointer;z-index: 9999999;position:absolute;top:' + pwdInp.offsetHeight / 4 + 'px;right:' + left + 'px;')
                icon_copy.setAttribute('id', 'eitlab_icon_copy');
                icon_copy.setAttribute('class', 'bi bi-clipboard');
                pwdInp.parentElement.appendChild(icon_copy);
                let ic = document.getElementById('eitlab_icon_copy');
                ic.addEventListener('click', function () {
                    pwdInp.select()
                    navigator.clipboard.writeText(pwdInp.value)
                    // document.execComamnd('copy)
                    ic.className = 'bi bi-clipboard-check';
                    setTimeout(function () { ic.className = 'bi bi-clipboard'; }, 1500)
                });
                left = 60;
            }
        }
        if (o.hasOwnProperty('show_generate_password_icon')) {
            if (o.show_generate_password_icon) {
                createIconCdn();
                pwdInp.parentElement.setAttribute('style', 'position:relative!important;');
                let icon_generate = document.createElement('i');
                icon_generate.setAttribute('style', 'color:'+o.color+'!important;cursor:pointer;z-index: 9999999;position:absolute;top:' + pwdInp.offsetHeight / 4 + 'px;right:' + left + 'px;')
                icon_generate.setAttribute('id', 'eitlab_icon_generate');
                icon_generate.setAttribute('class', 'bi bi-exclamation-circle');
                pwdInp.parentElement.appendChild(icon_generate);
                document.getElementById('eitlab_icon_generate').addEventListener('click', function () {
                    let code = '';
                    for (let j = 0; j < o.max; j++) { code += o.liste[Math.ceil(Math.random() * (o.liste.length - 1))]; }
                    pwdInp.value = code;
                })
    
                left = 80;
    
            }
        }
    
    }
    
    
    
}
