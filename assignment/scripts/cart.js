console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

//Functions
function addItem( item ) {
    basket.push( item );
    return true;
}

function listItems( array ) {
    for( item of array ) {
        console.log( item );
    }
}

// First Iteration, empties the array but isn't permanent
// function empty( array ) {
//     array = [];
//     return array;
// }

//Second Iteration, empties the array and is permanent
function empty( array ) {
    array.length = 0;
    return array;
}

//TEST ZONE
//Testing for addItem()
console.log( addItem( 'apple' ) );
console.log( `Items in your basket are now: ${basket}` );
console.log( addItem( 'oranges' ) );
console.log( `Items in your basket are now: ${basket}` );
console.log( addItem( 'bananas' ) );
console.log( `Items in your basket are now: ${basket}` );

//Testing for listItems()
let testArray = ['cat', 'dog', 'bird', 90, 321, true, false];
listItems( testArray );
listItems( basket );

//Testing for empty() the first iteration
// empty( testArray );
// console.log( testArray );

// console.log( basket );
// console.log( empty( basket ) );
// console.log( basket );

//Testing for empty() the second iteration
// empty( testArray );
// console.log( testArray );

empty( basket );
addItem( 'mango' );
console.log( basket );