//forms/freesample/screenshot/deviceLarge

const { exec } = require( "child_process" );

exec( 'npx allure generate ../../raw-test-data/forms/freesample/screenshot/deviceLarge -o ../../TestReports/forms/freesample/screenshot/deviceLarge --clean', ( error, stdout, stderr ) => {
    if ( error ) {
        console.error( `Error: ${ error.message }` );
        return;
    }
    console.log( `stdout: ${ stdout }` );

} );