// const { exec } = require("child_process");

// const tests = [
//   { name: 'testthis', jsonOutput: 'as580.json' },
//   { name: 'AS588ViewCart', jsonOutput: 'as588.json' },
//   // Add more test configurations as needed
// ];

// tests.forEach(test => {
//   // Set the PLAYWRIGHT_JSON_OUTPUT_NAME environment variable for the test
//   process.env.PLAYWRIGHT_JSON_OUTPUT_NAME = `jsonReports/${test.jsonOutput}`;

//   const testCommand = `npx playwright test -g "${test.name}" --reporter=json`;

//   exec(testCommand, (error, stdout, stderr) => {
//     if (error) {
//       console.error(`Error: ${error.message}`);
//       return;
//     }
//     console.log(`stdout: ${stdout}`);
//   });
// });


const { promisify } = require('util');
const { exec } = require('child_process');

const asyncExec = promisify(exec);

const tests = [
  { name: 'testthis', jsonOutput: 'as580.json' },
   { name: 'AS588ViewCart', jsonOutput: 'as588.json' },
  // Add more test configurations as needed
];

const runTests = async () => {
  for (const test of tests) {
    // Set the PLAYWRIGHT_JSON_OUTPUT_NAME environment variable for the test
    PLAYWRIGHT_JSON_OUTPUT_NAME=`./jsonReports/${test.jsonOutput}`;

    const testCommand = `npx playwright test -g "${test.name}" --reporter=json`

    try {
      const { stdout } = await asyncExec(testCommand);
      console.log(`stdout: ${stdout}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }
};

runTests();
