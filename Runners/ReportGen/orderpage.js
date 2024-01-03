const { exec } = require( "child_process" );

const data = ['AS580', 'AS588', 'AS600', 'betterpricing', 'needmoreinfo','review'];
data.forEach(pathName => {
    exec( `npx allure generate ../../raw-test-data/pages/orderpage/screenshot/${pathName.replace(/\s+/g,"").toLowerCase()}/devicelarge -o ../../TestReports/pages/orderpage/screenshot/${pathName}/devicelarge --clean`, ( error, stdout, stderr ) => {
        if ( error ) {
            console.error( `Error: ${ error.message }` );
            return;
        }
        console.log( `stdout: ${ stdout }` );
        
    } );
    
});
