const { exec } = require( "child_process" );


exec( 'npx allure generate ../../raw-test-data/forms/shipadd/screenshot -o ../../TestReports/forms/shipadd/screenshot --clean', ( error, stdout, stderr ) => {
    if ( error ) {
        console.error( `Error: ${ error.message }` );
        return;
    }
    console.log( `stdout: ${ stdout }` );

} );
exec( 'npx allure generate ../../raw-test-data/forms/shipadd/formfilled -o ../../TestReports/forms/shipadd/formfilled --clean', ( error, stdout, stderr ) => {
    if ( error ) {
        console.error( `Error: ${ error.message }` );
        return;
    }
    console.log( `stdout: ${ stdout }` );

} );

exec( 'npx allure generate ../../raw-test-data/forms/shipadd/validation/emptyfields -o ../../TestReports/forms/shipadd/validation/emptyfields --clean', ( error, stdout, stderr ) => {
    if ( error ) {
        console.error( `Error: ${ error.message }` );
        return;
    }
    console.log( `stdout: ${ stdout }` );

} );
exec( 'npx allure generate ../../raw-test-data/forms/shipadd/validation/submitsuccess -o ../../TestReports/forms/shipadd/validation/submitsuccess --clean', ( error, stdout, stderr ) => {
    if ( error ) {
        console.error( `Error: ${ error.message }` );
        return;
    }
    console.log( `stdout: ${ stdout }` );

} );