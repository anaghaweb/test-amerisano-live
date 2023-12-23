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





