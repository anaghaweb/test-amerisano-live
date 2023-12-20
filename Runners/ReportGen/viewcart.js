const { exec } = require( "child_process" );

exec( 'npx allure generate ../../raw-test-data/cart/addtocart/AS580 -o ../../TestReports/cart/addtocart/AS580 --clean', ( error, stdout, stderr ) => {
    if ( error ) {
        console.error( `Error: ${ error.message }` );
        return;
    }
    console.log( `stdout: ${ stdout }` );

} );

exec( 'npx allure generate ../../raw-test-data/cart/addtocart/AS588 -o ../../TestReports/cart/addtocart/AS588 --clean', ( error, stdout, stderr ) => {
    if ( error ) {
        console.error( `Error: ${ error.message }` );
        return;
    }
    console.log( `stdout: ${ stdout }` );

} );

exec( 'npx allure generate ../../raw-test-data/cart/addtocart/AS600 -o ../../TestReports/cart/addtocart/AS600 --clean', ( error, stdout, stderr ) => {
    if ( error ) {
        console.error( `Error: ${ error.message }` );
        return;
    }
    console.log( `stdout: ${ stdout }` );

} );