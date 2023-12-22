const { exec } = require( "child_process" );
exec( 'npx allure generate ../../raw-test-data/forms/niform -o ../../TestReports/forms/niform --clean', ( error, stdout, stderr ) => {
    if ( error ) {
        console.error( `Error: ${ error.message }` );
        return;
    }
    console.log( `stdout: ${ stdout }` );

} );