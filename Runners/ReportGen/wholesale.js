const { exec } = require( "child_process" );

exec( 'npx allure generate ../../raw-test-data/forms/wholesaleaccount/screenshot/ -o ../../TestReports/forms/wholesaleaccount/screenshot/devicelarge --clean', ( error, stdout, stderr ) => {
    if ( error ) {
        console.error( `Error: ${ error.message }` );
        return;
    }
    console.log( `stdout: ${ stdout }` );
} );
exec( 'npx allure generate ../../raw-test-data/forms/wholesaleaccount/validation/requiredfields -o ../../TestReports/forms/wholesaleaccount/validation/requiredfields --clean', ( error, stdout, stderr ) => {
    if ( error ) {
        console.error( `Error: ${ error.message }` );
        return;
    }
    console.log( `stdout: ${ stdout }` );
} );
