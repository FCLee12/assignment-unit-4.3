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

function empty( array ) {
    array = [];
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

//Testing for empty()
console.log( empty( testArray ) );
