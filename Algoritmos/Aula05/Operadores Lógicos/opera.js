/*
&&  - E    - Todos devem ser TRUE
||  - OU   - Se um for TRUE, então será TRUE
!   - NÃO  - 
*/
/*
true && true // true
false && true // false
true && false // false
false && false // true

const var1 = 50;
const var2 = 50;
const var3 = 25;

console.log(var1 === var2 && var1 > var3);

true && true // true
false && true // false
true && false // false
false && false // true
*/

let a = true;
let b = false;
let c = true;

console.log(a && b);
    console.log(b && c);
        console.log(a && c);
            console.log(a && b && c);


let ab = true;
let bc = false;
let ca = false;

console.log(ab || bc);
    console.log(bc || ca);
        console.log(ab || ca);
            console.log(ab || bc || ca);

            
!true
!false