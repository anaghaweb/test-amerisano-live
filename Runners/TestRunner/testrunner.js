
const util = require("util");
const execAsync = util.promisify(require("child_process").exec);


const pathArray = [
 'xs', 's', 'm', 'l', 'xl'
];

const runTests = async () => {
  for (const path of pathArray) {

    await execAsync( `npx playwright test ../../tests/cart/combo/addallsku/${path}/580588600${path}.spec.ts`, ( error, stdout, stderr ) => {
        if ( error ) {
            console.error( `Error: ${ error.message }` );
            return;
        }
        console.log( `stdout: ${ stdout }` );
        
    } );
   
};
}

runTests();
