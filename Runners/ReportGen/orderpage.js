const { exec } = require( "child_process" );

exec( 'npx allure generate ../../raw-test-data/pages/orderpage -o ../../TestReports/pages/orderpage --clean', ( error, stdout, stderr ) => {
    if ( error ) {
        console.error( `Error: ${ error.message }` );
        return;
    }
    console.log( `stdout: ${ stdout }` );

} );

