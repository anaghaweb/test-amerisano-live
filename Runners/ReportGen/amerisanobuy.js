const { exec } = require( "child_process" );
exec( 'npx allure generate ../../raw-test-data/pages/landingpages/buy/screenshot/as580/devicelarge -o ../../TestReports/pages/landingpages/buy/screenshot/as580/devicelarge --clean', ( error, stdout, stderr ) => {
    if ( error ) {
        console.error( `Error: ${ error.message }` );
        return;
    }
    console.log( `stdout: ${ stdout }` );
    
} );
exec( 'npx allure generate ../../raw-test-data/pages/landingpages/buy/screenshot/as588/devicelarge -o ../../TestReports/pages/landingpages/buy/screenshot/as588/devicelarge --clean', ( error, stdout, stderr ) => {
    if ( error ) {
        console.error( `Error: ${ error.message }` );
        return;
    }
    console.log( `stdout: ${ stdout }` );
    
} );
exec( 'npx allure generate ../../raw-test-data/pages/landingpages/buy/screenshot/as600/devicelarge -o ../../TestReports/pages/landingpages/buy/screenshot/as600/devicelarge --clean', ( error, stdout, stderr ) => {
    if ( error ) {
        console.error( `Error: ${ error.message }` );
        return;
    }
    console.log( `stdout: ${ stdout }` );
    
} );
exec( 'npx allure generate ../../raw-test-data/pages/landingpages/buy/screenshot/betterpricing/devicelarge -o ../../TestReports/pages/landingpages/buy/screenshot/betterpricing/devicelarge --clean', ( error, stdout, stderr ) => {
    if ( error ) {
        console.error( `Error: ${ error.message }` );
        return;
    }
    console.log( `stdout: ${ stdout }` );
    
} );
exec( 'npx allure generate ../../raw-test-data/pages/landingpages/buy/screenshot/footer/devicelarge -o ../../TestReports/pages/landingpages/buy/screenshot/footer/devicelarge --clean', ( error, stdout, stderr ) => {
    if ( error ) {
        console.error( `Error: ${ error.message }` );
        return;
    }
    console.log( `stdout: ${ stdout }` );
    
} );

exec( 'npx allure generate ../../raw-test-data/pages/landingpages/buy/screenshot/guarantee/devicelarge -o ../../TestReports/pages/landingpages/buy/screenshot/guarantee/devicelarge --clean', ( error, stdout, stderr ) => {
    if ( error ) {
        console.error( `Error: ${ error.message }` );
        return;
    }
    console.log( `stdout: ${ stdout }` );
    
} );

exec( 'npx allure generate ../../raw-test-data/pages/landingpages/buy/screenshot/hero/devicelarge -o ../../TestReports/pages/landingpages/buy/screenshot/hero/devicelarge --clean', ( error, stdout, stderr ) => {
    if ( error ) {
        console.error( `Error: ${ error.message }` );
        return;
    }
    console.log( `stdout: ${ stdout }` );
    
} );

exec( 'npx allure generate ../../raw-test-data/pages/landingpages/buy/screenshot/review/devicelarge -o ../../TestReports/pages/landingpages/buy/screenshot/review/devicelarge --clean', ( error, stdout, stderr ) => {
    if ( error ) {
        console.error( `Error: ${ error.message }` );
        return;
    }
    console.log( `stdout: ${ stdout }` );
    
} );