const { exec } = require( "child_process" );

exec( 'npx allure generate ../../raw-test-data/forms/groupbuying/screenshot/deviceLarge -o ../../TestReports/forms/groupbuying/screenshot/deviceLarge --clean', ( error, stdout, stderr ) => {
    if ( error ) {
        console.error( `Error: ${ error.message }` );
        return;
    }
    console.log( `stdout: ${ stdout }` );

} );

exec( 'npx allure generate ../../raw-test-data/forms/groupbuying/validation/inputfields -o ../../TestReports/forms/groupbuying/validation/inputfields --clean', ( error, stdout, stderr ) => {
    if ( error ) {
        console.error( `Error: ${ error.message }` );
        return;
    }
    console.log( `stdout: ${ stdout }` );

} );
