console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

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