const {exec}=require("child_process");


exec('npx allure generate ../../raw-test-data/forms/forgotpwd/resetink/deviceLarge -o ../../TestReports/forms/forgotpwd/resetink/deviceLarge --clean', (stderr, stdout, error)=>{

if(error){
    console.error(`Error message: ${error.message}`);
    return;

}
    console.log(`output: ${stdout}`)
})

exec('npx allure generate ../../raw-test-data/forms/forgotpwd/screenshots/deviceLarge -o ../../TestReports/forms/forgotpwd/screenshots/deviceLarge --clean', (stderr, stdout, error)=>{

    if(error){
        console.error(`Error message: ${error.message}`);
        return;
    
    }
        console.log(`output: ${stdout}`)
    })