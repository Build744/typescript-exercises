# TypeScript Exercises

A comprehensive TypeScript learning project with practical exercises, built with Vite and Vitest. This project includes converted TypeScript exercises from the popular typescript-exercises repository with modern testing capabilities.

## Credits & Acknowledgments

This project is based on the excellent [TypeScript Exercises Project](https://typescript-exercises.github.io/) created by [Marat Dulin](https://github.com/mdevils). We've adapted and modernized these exercises with:

- **Vite** and **Vitest** for modern development experience
- **Enhanced testing** with type-level validation
- **Per-exercise workflows** for focused learning
- **Comprehensive documentation** for better guidance

**Original Project**: [https://typescript-exercises.github.io/](https://typescript-exercises.github.io/)

Special thanks to all contributors and creator [Marat Dulin](https://github.com/mdevils) of the original TypeScript exercises project for creating such valuable learning material! 🎉

## 🚀 Features

- **TypeScript**: Strongly typed JavaScript for better development experience
- **Vite**: Fast build tool and development server
- **Vitest**: Lightning fast testing framework with type testing support
- **Path Mapping**: Clean imports with `@/` alias
- **Test Coverage**: Built-in code coverage reporting
- **Modern Setup**: ES2020+ with modern tooling
- **TypeScript Exercises**: 15 exercises with Vitest tests
- **Prettier**: Code formatting for consistent style

## 📁 Project Structure

```
src/
├── 01-15/              # TypeScript exercises (01 through 15)
│   └── index.ts        # Exercise implementation
tests/
├── exercises/          # Converted TypeScript exercise tests
│   ├── 01.test.ts     # Exercise 01: Basic Types
│   ├── 02.test.ts     # Exercise 02: Union Types
│   ├── 03.test.ts     # Exercise 03: Type Guards
│   ├── 04.test.ts     # Exercise 04: Type Predicates
│   ├── 05.test.ts     # Exercise 05: Utility Types
│   └── ...            # More exercises
└── setup.ts           # Test setup configuration
scripts/               # Helper scripts for exercise commands
ex.js                 # Simple exercise runner script
```

## 🎯 Quick Exercise Commands

Work on individual exercises with these simple commands:

### Option 1: NPM Scripts (Recommended)

```bash
npm run exo:check 01    # Check TypeScript errors for exercise 01
npm run exo:test 01     # Run tests for exercise 01
npm run exo:verify 01     # Run both type check AND tests for exercise 01
```

### Option 2: Simple Helper Script (Even Shorter)

```bash
node ex.js check 01    # Check TypeScript errors for exercise 01
node ex.js test 01     # Run tests for exercise 01
node ex.js both 01     # Run both type check AND tests for exercise 01
```

**Example workflow:**

1. Work on `src/01/index.ts`
2. Run `npm run exo:check 01` (or `node ex.js check 01`)
3. Fix the TypeScript errors
4. Run `npm run exo:verify 01` (or `node ex.js both 01`) ✅

### All Available Commands Summary

| Command    | NPM Script              | Helper Script         | Description             |
| ---------- | ----------------------- | --------------------- | ----------------------- |
| Type Check | `npm run exo:check 01`  | `node ex.js check 01` | Check TypeScript errors |
| Test       | `npm run exo:test 01`   | `node ex.js test 01`  | Run Vitest tests        |
| Both       | `npm run exo:verify 01` | `node ex.js both 01`  | Complete validation     |

## 🛠 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Install dependencies:

```bash
npm install
```

### Available Scripts

```bash
# Install dependencies
npm install

# Run all tests
npm test

# Run only TypeScript exercise tests
npm run test:exercises

# Run tests in watch mode
npm run test:watch

# Run tests with UI
npm run test:ui

# Generate test coverage report
npm run test:coverage

# Type checking
npm run type-check

# Format code with Prettier
npm run format

# Check code formatting
npm run format:check

# Development mode
npm run dev

# Build the project
npm run build
```

## 🧪 How the Tests Work

The tests in this project are designed to **fail when the exercises are incomplete** and **pass when properly implemented**. Here's how it works:

### 🔴 Before Completing all Exercises

When you first run the tests on an incomplete exercise, you should see:

1. **TypeScript compilation errors** when running `npm run type-check`
2. **Test failures** when running `npm test`
3. **Runtime errors** in the console

### ✅ After Completing all Exercises

When you properly implement the solution:

1. **No TypeScript compilation errors**
2. **All tests pass**
3. **Clean runtime execution**

### 🎯 Exercise Completion Criteria

An exercise is considered **complete** when:

1. ✅ **Type check passes**: `npm run exo:check 01` shows no errors
2. ✅ **Tests pass**: `npm run exo:test 01` runs successfully
3. ✅ **Complete validation**: `npm run exo:verify 01` passes both checks
4. ✅ **Implementation correct**: Types are properly defined (not `unknown`)

### 🚀 Recommended Workflow

1. **Start** with an exercise (e.g., exercise 01 - `src/01/index.ts`)
2. **Read** the comments and requirements in the file
3. **Check what needs fixing:**
   ```bash
   npm run exo:check 01    # or: node ex.js check 01
   ```
4. **Implement** the solution
5. **Validate your solution:**
   ```bash
   npm run exo:verify 01     # or: node ex.js both 01
   ```
6. **Success!** ✅ When both type check and tests pass

### 🎯 Success Indicators

**✅ Exercise Complete:**

```bash
$ npm run exo:verify 01
🚀 Running complete validation for exercise 01...
🔍 Step 1: Type checking...
✅ Type check passed!
🧪 Step 2: Running tests...
✅ Tests passed!
🎉 Exercise 01 completed successfully!
```

**❌ Exercise Incomplete:**

```bash
$ npm run exo:check 01
🔍 Type checking exercise 01...
❌ Exercise 01 has type errors that need to be fixed.
```

### 🔧 Alternative Commands

For those who prefer traditional commands:

```bash
# Check TypeScript errors
npm run type-check                    # Check all exercises
npx tsc --noEmit --strict src/01/index.ts     # Check specific exercise

# Run tests
npm test                              # Run all tests
npm test -- tests/exercises/01.test.ts  # Run specific exercise test

# Run tests with type checking
npm test -- --typecheck              # Run all tests with type checking
```

### 💡 Testing Philosophy

The tests use `expectTypeOf` from Vitest to verify that:

- Types are correctly defined (not `unknown`)
- Function signatures match expectations
- Array types are properly typed
- Runtime behavior works as expected

Remember: The goal is to learn TypeScript, so focus on getting the **types right**, not just making tests pass!

## 📚 What's Included

### TypeScript Exercises

**Exercise 01**: Basic Types - Define interfaces and use them with typed arrays and functions
**Exercise 02**: Union Types - Work with User | Admin union types  
**Exercise 03**: Type Guards - Use the `in` operator for type narrowing
**Exercise 04**: Type Predicates - Create custom type guard functions
**Exercise 05**: Utility Types - Apply `Partial<T>` and `Omit<T>` for flexible filtering
**Exercise 06**: Function Overloads - Create overloaded functions with conditional return types
**Exercise 07-15**: Advanced topics including mapped types, conditional types, and more

### Modern Testing

Comprehensive test suites using Vitest with:

- Type-level testing with `expectTypeOf`
- Runtime behavior verification
- Clear error messages and feedback
- Watch mode for development

## 🧪 Running Tests

```bash
# Run all tests
npm test

# Run only TypeScript exercise tests
npm run test:exercises

# Run tests in watch mode for development
npm run test:watch

# Open the Vitest UI for interactive testing
npm run test:ui

# Generate coverage report
npm run test:coverage
```

## 🔧 Configuration

- **TypeScript**: Configured with strict mode and modern ES features
- **Vitest**: Set up with TypeScript support and path mapping
- **Path Mapping**: Use `@/` for clean imports from src directory

## 📝 Best Practices

1. **Focus on TypeScript learning** - Exercises should teach specific TypeScript concepts
2. **Write comprehensive tests** including type-level validation with `expectTypeOf`
3. **Use descriptive variable names** and clear comments explaining the learning objective
4. **Follow TypeScript best practices** with proper typing and modern syntax
5. **Keep exercises focused** - Each exercise should target specific TypeScript features

## 🤝 Contributing

We welcome contributions to improve the TypeScript learning experience! Here's how you can help:

### Adding New Exercises

1. **Create exercise files** following the pattern: `src/XX/index.ts`
2. **Add corresponding tests** in `tests/exercises/XX.test.ts`
3. **Use `unknown` types** for learners to implement
4. **Include clear comments** explaining the learning objectives
5. **Test both type-level and runtime behavior**

### Improving Existing Exercises

1. **Enhanced test coverage** with more edge cases
2. **Better error messages** and learning guidance
3. **Clearer documentation** and examples
4. **Performance optimizations** for the development workflow

### Development Guidelines

- Follow the existing exercise numbering pattern
- Ensure new exercises work with the per-exercise command scripts
- Insure that type checking that fail when incomplete and pass when solved
- Update documentation to reflect new exercises
- Maintain compatibility with Vite and Vitest

### What We Need

- More advanced TypeScript exercises (generics, conditional types, etc.)
- Better type-level testing patterns
- Enhanced developer experience improvements
- Documentation improvements and translations

Feel free to open an issue to discuss new exercise ideas or submit a pull request! 🚀

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Happy coding! 🎉
