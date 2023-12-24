//forms/freesample/screenshot/deviceLarge

const { exec } = require( "child_process" );

exec( 'npx allure generate ../../raw-test-data/forms/freesample/screenshot/deviceLarge -o ../../TestReports/forms/freesample/screenshot/deviceLarge --clean', ( error, stdout, stderr ) => {
    if ( error ) {
        console.error( `Error: ${ error.message }` );
        return;
    }
    console.log( `stdout: ${ stdout }` );

} );

exec( 'npx allure generate ../../raw-test-data/forms/freesample/validation/feedback -o ../../TestReports/forms/freesample/validation/feedback --clean', ( error, stdout, stderr ) => {
    if ( error ) {
        console.error( `Error: ${ error.message }` );
        return;
    }
    console.log( `stdout: ${ stdout }` );

} );

exec( 'npx allure generate ../../raw-test-data/forms/freesample/validation/glovesize -o ../../TestReports/forms/freesample/validation/glovesize --clean', ( error, stdout, stderr ) => {
    if ( error ) {
        console.error( `Error: ${ error.message }` );
        return;
    }
    console.log( `stdout: ${ stdout }` );

} );
