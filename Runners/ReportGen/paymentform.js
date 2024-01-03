const { exec } = require( "child_process" );

exec( 'npx allure generate ../../raw-test-data/forms/paymentmethod/screenshot/initialrender/deviceLarge -o ../../TestReports/forms/paymentmethod/screenshot/initialrender/deviceLarge --clean', ( error, stdout, stderr ) => {
    if ( error ) {
        console.error( `Error: ${ error.message }` );
        return;
    }
    console.log( `stdout: ${ stdout }` );
} );
exec( 'npx allure generate ../../raw-test-data/forms/paymentmethod/screenshot/creditcard/deviceLarge -o ../../TestReports/forms/paymentmethod/screenshot/creditcard/deviceLarge --clean', ( error, stdout, stderr ) => {
    if ( error ) {
        console.error( `Error: ${ error.message }` );
        return;
    }
    console.log( `stdout: ${ stdout }` );
} );
exec( 'npx allure generate ../../raw-test-data/forms/paymentmethod/screenshot/paypal/deviceLarge -o ../../TestReports/forms/paymentmethod/screenshot/paypal/deviceLarge --clean', ( error, stdout, stderr ) => {
    if ( error ) {
        console.error( `Error: ${ error.message }` );
        return;
    }
    console.log( `stdout: ${ stdout }` );
} );
exec( 'npx allure generate ../../raw-test-data/forms/paymentmethod/creditcard/newbillingaddress -o ../../TestReports/forms/paymentmethod/creditcard/newbillingaddress --clean', ( error, stdout, stderr ) => {
    if ( error ) {
        console.error( `Error: ${ error.message }` );
        return;
    }
    console.log( `stdout: ${ stdout }` );
} );
exec( 'npx allure generate ../../raw-test-data/forms/paymentmethod/creditcard/samebillingaddress -o ../../TestReports/forms/paymentmethod/creditcard/samebillingaddress --clean', ( error, stdout, stderr ) => {
    if ( error ) {
        console.error( `Error: ${ error.message }` );
        return;
    }
    console.log( `stdout: ${ stdout }` );
} );
exec( 'npx allure generate ../../raw-test-data/forms/paymentmethod/paypal/newbillingaddress -o ../../TestReports/forms/paymentmethod/paypal/newbillingaddress --clean', ( error, stdout, stderr ) => {
    if ( error ) {
        console.error( `Error: ${ error.message }` );
        return;
    }
    console.log( `stdout: ${ stdout }` );
} );
exec( 'npx allure generate ../../raw-test-data/forms/paymentmethod/paypal/samebillingaddress -o ../../TestReports/forms/paymentmethod/paypal/samebillingaddress --clean', ( error, stdout, stderr ) => {
    if ( error ) {
        console.error( `Error: ${ error.message }` );
        return;
    }
    console.log( `stdout: ${ stdout }` );
} );