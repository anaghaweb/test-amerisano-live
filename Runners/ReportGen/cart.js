const { exec } = require( "child_process" );

const data = ['AS580', 'AS588', 'AS600', 'allskutocart'];

data.forEach(path =>{
    exec( `npx allure generate ../../raw-test-data/cart/addtocart/screenshot/${path} -o ../../TestReports/cart/addtocart/screenshot/${path} --clean`, ( error, stdout, stderr ) => {
        if ( error ) {
            console.error( `Error: ${ error.message }` );
            return;
        }
        console.log( `stdout: ${ stdout }` );
        
    } );
})
 