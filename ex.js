#!/usr/bin/env node

// Simple CLI helper for TypeScript exercises
// Usage: node ex.js check 01  or  node ex.js test 01  or  node ex.js both 01

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname);

function showUsage() {
  console.log(`
🎯 TypeScript Exercise Helper

Usage:
  node ex.js check 01     # Type check exercise 01
  node ex.js test 01      # Test exercise 01  
  node ex.js both 01      # Both type check and test exercise 01

Examples:
  node ex.js check 01     # Check exercise 01
  node ex.js test 05      # Test exercise 05
  node ex.js both 10      # Complete validation for exercise 10
`);
}

function runCommand(command, args) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: 'inherit',
      shell: true,
      cwd: rootDir,
    });

    child.on('close', code => {
      process.exit(code);
    });

    child.on('error', reject);
  });
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length < 2) {
    showUsage();
    process.exit(1);
  }

  const [action, exerciseNum] = args;
  const validActions = ['check', 'test', 'both'];

  if (!validActions.includes(action)) {
    console.error(`❌ Invalid action: ${action}`);
    showUsage();
    process.exit(1);
  }

  if (!exerciseNum || !/^\d+$/.test(exerciseNum)) {
    console.error(`❌ Invalid exercise number: ${exerciseNum}`);
    showUsage();
    process.exit(1);
  }

  const scriptName = `ex:${action}`;
  await runCommand('npm', ['run', scriptName, exerciseNum]);
}

main().catch(console.error);
