const os = require('os');
const { execSync } = require('child_process');

const platform = os.platform();

if (platform === 'win32') {
  console.log('Installing Windows-specific SWC binary...');
  execSync('npm install @next/swc-win32-x64-msvc');
} else if (platform === 'linux') {
  console.log('Installing Linux-specific SWC binary...');
  execSync('npm install @next/swc-linux-x64-gnu');
} else {
  console.log('Unsupported platform, no SWC binary will be installed.');
}
