const { exec } = require( "child_process" );

const data = ['address', 'banner', 'footer', 'groupbuy', 'ourstory','product','review'];
data.forEach(pathName => {
    exec( `npx allure generate ../../raw-test-data/pages/homepage/screenshot/${pathName}/devicelarge -o ../../TestReports/pages/homepage/screenshot/${pathName}/devicelarge --clean`, ( error, stdout, stderr ) => {
        if ( error ) {
            console.error( `Error: ${ error.message }` );
            return;
        }
        console.log( `stdout: ${ stdout }` );
        
    } );
    
});
