const { exec } = require( "child_process" );

exec( 'npx allure generate ../../raw-test-data/forms/loginform/email -o ../../TestReports/forms/loginform/email --clean', ( error, stdout, stderr ) => {
    if ( error ) {
        console.error( `Error: ${ error.message }` );
        return;
    }
    console.log( `stdout: ${ stdout }` );

} );
exec( 'npx allure generate ../../raw-test-data/forms/loginform/password -o ../../TestReports/forms/loginform/password --clean', ( error, stdout, stderr ) => {
    if ( error ) {
        console.error( `Error: ${ error.message }` );
        return;
    }
    console.log( `stdout: ${ stdout }` );

} );
exec( 'npx allure generate ../../raw-test-data/forms/loginform/screenshot -o ../../TestReports/forms/loginform/screenshot --clean', ( error, stdout, stderr ) => {
    if ( error ) {
        console.error( `Error: ${ error.message }` );
        return;
    }
    console.log( `stdout: ${ stdout }` );

} );
