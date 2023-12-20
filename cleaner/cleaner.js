const fs = require( 'fs' );
const path = require( 'path' );

const resultsDirectory = '../raw-test-data'; // Adjust based on your directory structure

function cleaner( directory ) {
    const files = fs.readdirSync( directory );

    files.forEach( ( file ) => {
        const filePath = path.join( directory, file );

        if ( fs.statSync( filePath ).isDirectory() ) {
            cleaner( filePath ); // Recursively process subdirectories
        } else {
            // Exclude specific file types (e.g., .zip)
            if ( file.endsWith( '.zip' ) ) {
                fs.unlinkSync( filePath ); // Remove the file
            }
        }
    } );
}

cleaner( resultsDirectory );
