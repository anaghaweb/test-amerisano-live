const { exec } = require( "child_process" );

const freeboxData = [{name:'banner', method:'Assert_FreeBoxBanner_Visible'},
{name:'form', method:'Assert_FreeSampleForm_Visible'},
{name:'product', method:'Assert_Products_Visible'},
{name:'pricing', method:'Assert_BetterPricingSection_Visible'},
{name:'review', method:'Assert_ClientReviewSection_Visible'},
{name:'traits', method:'Assert_SpecialTraits_Visible'},
{name:'footer', method:'Assert_FreeSample_Footer_isVisible'},
];

freeboxData.forEach(pathName => {
    exec( `npx allure generate ../../raw-test-data/pages/landingpages/freesample/screenshot/${pathName.name}/devicelarge -o ../../TestReports/pages/landingpages/freesample/screenshot/${pathName.name}/devicelarge --clean`, ( error, stdout, stderr ) => {
        if ( error ) {
            console.error( `Error: ${ error.message }` );
            return;
        }
        console.log( `stdout: ${ stdout }` );
        
    } );
    
});
