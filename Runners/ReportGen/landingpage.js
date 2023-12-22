
//raw-test-data/pages/landingpages/freesample

const { exec } = require( "child_process" );

exec( 'npx allure generate ../../raw-test-data/pages/landingpages/freesample -o ../../TestReports/pages/landingpages/freesample --clean', ( error, stdout, stderr ) => {
    if ( error ) {
        console.error( `Error: ${ error.message }` );
        return;
    }
    console.log( `stdout: ${ stdout }` );

} );

