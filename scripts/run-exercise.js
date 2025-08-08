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
    console.log('Usage: npm run exo:check 01');
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
    const srcFile = `src/${exerciseNum}/index.ts`;
    const testFile = `tests/exercises/${exerciseNum}.test.ts`;

    console.log(
      `🚀 Running complete validation for exercise ${exerciseNum}...`
    );
    console.log(`📁 Source: ${srcFile}`);
    console.log(`📁 Tests: ${testFile}`);
    console.log('═'.repeat(60));

    // Step 1: Type checking
    console.log('🔍 Step 1: Type checking...');
    await runCommand('npx', ['tsc', '--noEmit', '--strict', srcFile]);
    console.log('✅ Type check passed!');
    console.log();

    // Step 2: Running tests
    console.log('🧪 Step 2: Running tests...');
    await runCommand('npm', ['test', '--', testFile, '--run']);
    console.log('✅ Tests passed!');

    console.log('═'.repeat(60));
    console.log(`🎉 Exercise ${exerciseNum} completed successfully!`);
    console.log('🎯 Both TypeScript compilation and tests are passing.');
  } catch (error) {
    console.log('═'.repeat(60));
    console.log(`❌ Exercise ${getExerciseNumber()} is not yet complete.`);
    console.log('💡 Fix the TypeScript errors and try again.');
    process.exit(1);
  }
}

main();
