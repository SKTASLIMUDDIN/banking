const os = require('os');
const { execSync } = require('child_process');

const platform = os.platform();

if (platform === 'win32') {
  console.log('Detected Windows platform. Installing SWC for Windows.');
  execSync('npm install @next/swc-win32-x64-msvc');
} else if (platform === 'linux') {
  console.log('Detected Linux platform. Installing SWC for Linux.');
  execSync('npm install @next/swc-linux-x64-gnu');
} else {
  console.log('Unsupported platform for SWC binaries');
}
