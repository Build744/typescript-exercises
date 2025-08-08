#!/usr/bin/env node

import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = resolve(__dirname, '..');

function getExerciseNumber() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    console.error('❌ Please provide an exercise number (e.g., 01, 02, 03...)');
    console.log('Usage: npm run ex:test 01');
    process.exit(1);
  }

  const exerciseNum = args[0].toString().padStart(2, '0');
  return exerciseNum;
}

function runCommand(command, args, options = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: 'inherit',
      shell: true,
      cwd: rootDir,
      ...options,
    });

    child.on('close', code => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Command failed with exit code ${code}`));
      }
    });

    child.on('error', reject);
  });
}

async function main() {
  try {
    const exerciseNum = getExerciseNumber();
    const testFile = `tests/exercises/${exerciseNum}.test.ts`;

    console.log(`🧪 Testing exercise ${exerciseNum}...`);
    console.log(`📁 Test file: ${testFile}`);
    console.log('─'.repeat(50));

    await runCommand('npm', ['test', '--', testFile, '--run']);

    console.log('─'.repeat(50));
    console.log(`✅ Exercise ${exerciseNum} tests passed!`);
  } catch (error) {
    console.log('─'.repeat(50));
    console.log(`❌ Exercise ${getExerciseNumber()} tests failed.`);
    process.exit(1);
  }
}

main();
