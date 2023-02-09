console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;

//Functions

//Original version of addItem()
// function addItem( item ) {
//     basket.push( item );
//     return true;
// }

function listItems( array ) {
    for( let item of array ) {
        console.log( item );
    }
}

// First Iteration of empty(), empties the array but isn't permanent
// function empty( array ) {
//     array = [];
//     return array;
// }

//Second Iteration of empty(), empties the array and is permanent
function empty( array ) {
    array.length = 0;
    return array;
}

function isFull( length ) {
    if( length < maxItems ) {
        return false;
    } else {
        return true;
    }
}

//Updated addItem() for stretch goal
function addItem( array, item ) {
    if( isFull(array.length) ) {
        console.log( 'Your basket is full, please empty some items and try again!' );
        return false;
    } else {
        array.push( item );
        return true;
    }
}

function removeItem( array, item ) {
    let placement = array.indexOf( item );
    console.log( placement ); //added to verify indexOf()
    let removedItem;
    if ( placement > -1 ) {
        removedItem = array.splice( placement, 1 );
        console.log( removedItem ); //added to verify returned array with removed item
        return removedItem.pop();
    } else {
        return null;
    }
}

//TEST ZONE

//***** Testing for addItem() *****
console.log('***** Testing for listItems() *****');

console.log( addItem( basket, 'apple' ) );
console.log( `Items in your basket are now: ${basket}` );
console.log( addItem( basket, 'oranges' ) );
console.log( `Items in your basket are now: ${basket}` );
console.log( addItem( basket, 'bananas' ) );
console.log( `Items in your basket are now: ${basket}` );

//***** Testing for listItems() *****
console.log('***** Testing for listItems() *****');

let testArray = ['cat', 'dog', 'bird', 90, 321, true, false];
listItems( testArray );
listItems( basket );

//***** Testing for empty() the first iteration *****
// empty( testArray );
// console.log( testArray );

// console.log( basket );
// console.log( empty( basket ) );
// console.log( basket );

//***** Testing for empty() the second iteration *****
console.log('***** Testing for empty() the second iteration *****');

console.log( 'before empty()', testArray );
empty( testArray );
console.log( 'after empty()', testArray );

console.log( 'before empty()', basket );
empty( basket );
console.log( 'after empty()', basket );
addItem( basket, 'mango' );
console.log( 'after addItem()', basket );

//***** Testing for isFull() *****
console.log('***** Testing for isFull() *****');

let testArray2 = ['cat', 'dog', 'bird', 90, 321, true, false];
console.log( isFull( testArray2.length ) );
console.log( isFull( basket.length ) );

//***** Testing for stretch goal updated addItem() *****
console.log( '***** Testing for stretch goal updated addItem() *****' );

console.log( addItem( testArray2, 1 ) );

empty( testArray2 );

console.log( addItem( testArray2, 1 ) );
console.log( testArray2 );

//***** Testing for stretch goal removeItem() *****
console.log( '***** Testing for stretch goal removeItem() *****' );

let testArray3 = ['cat', 'dog', 'bird', 90, 321, true, false];
console.log( testArray3 );
console.log( 'this should read 90:', removeItem( testArray3, 90 ) );
console.log( testArray3 );

console.log( 'this should read null:', removeItem( testArray3, 'octopus' ) );

console.log( basket );
addItem( basket, 'strawberry' );
addItem( basket, 'kiwi' );
addItem( basket, 'watermelon' );
addItem( basket, 'liver' );
console.log( basket );
console.log( 'this should read liver:', removeItem( basket, 'liver' ) );