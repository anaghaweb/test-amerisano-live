const { exec } = require( "child_process" );
// const fs = require( "fs" );
// const path = require( "path" );
// const allure = require( "allure-commandline" );
// const { promisify } = require( "util" );
// const execAsync = promisify( exec );

// const reportPath = path.join( __dirname, "..", "..", "reports" );

// const generateReport = async () => {
//     try {
//         await execAsync( `allure generate ${ reportPath } -o ${ reportPath }/allure-report` );
//         console.log( "Allure report generated successfully!" );
//     } catch ( error ) {
//         console.error( "Error generating allure report:", error );
//         process.exit( 1 );
//     }
// };

// const openReport = async () => {
//     try {
//         await execAsync( `allure open ${ reportPath }/allure-report` );
//         console.log( "Allure report opened successfully!" );
//     } catch ( error ) {
//         console.error( "Error opening allure report:", error );
//         process.exit( 1 );
//     }
// };

// const generateAndOpenReport = async () => {
//     await generateReport();
//     await openReport();
// };

// generateAndOpenReport();


// Command to generate reports for createAccountForm
exec( 'npx allure generate ../../raw-test-data/forms/caform -o ../../TestReports/Form/AccountCreation --clean', ( error, stdout, stderr ) => {
    if ( error ) {
        console.error( `Error: ${ error.message }` );
        return;
    }
    console.log( `stdout: ${ stdout }` );

} );

// Command to generate reports for newInfoForm
// exec( 'npx allure generate ../../raw-test-data/forms/niform -o ../../TestReports/Form/NewInfo --clean', ( error, stdout, stderr ) => {
//     if ( error ) {
//         console.error( `Error: ${ error.message }` );
//         return;
//     }
//     console.log( `stdout: ${ stdout }` );

// } );


// exec( 'npx allure generate ../../raw-test-data/checkout/checkoutAllProducts -o ../../TestReports/Checkout --clean', ( error, stdout, stderr ) => {
//     if ( error ) {
//         console.error( `Error: ${ error.message }` );
//         return;
//     }
//     console.log( `stdout: ${ stdout }` );
//     console.error( `stderr: ${ stderr }` );
// } );

//Report generate for Page Sections
// exec( 'npx allure generate ../../raw-test-data/pages/orderpage -o ../../TestReports/pages/orderpage --clean', ( error, stdout, stderr ) => {
//     if ( error ) {
//         console.error( `Error: ${ error.message }` );
//         return;
//     }
//     console.log( `stdout: ${ stdout }` );

// } );
