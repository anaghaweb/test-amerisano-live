const { exec } = require( "child_process" );

const data = ['AS580', 
 'AS588', 'AS600','580588', '580600', '588600', '580588600'
];
const glove =['580588'];
const size = 
[   
    //  {size:'XS',desc:'Extra Small'}, 
     {size:'S',desc:'Small'},
    // {size:'M',desc:'Medium'} , 
    // {size:'L',desc:'Large'},
    // {size:'XL',desc:'Extra Large'},
    // {size:'allsizes', desc:'All Sizes'}
];

function cart(){
glove.forEach(sku =>{
    size.forEach((size)=>{
    exec( `npx allure generate ../../raw-test-data/cart/${sku}/${size.size.toLowerCase()} -o ../../TestReports/cart/${sku}/${size.size} --clean`, ( error, stdout, stderr ) => {
        if ( error ) {
            console.error( `Error: ${ error.message }` );
            return;
        }
        console.log( `stdout: ${ stdout }` );
        
    } );
})
})
}

cart();
  