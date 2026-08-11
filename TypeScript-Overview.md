# TypeScript Overview

## Why use TypeScript

- TypeScript works in every JavaScript environment, not just React.
- It is a superset of JavaScript, so any valid JS is valid TS.
- TypeScript adds static types, which help catch errors before runtime.
- It improves developer experience with better autocomplete, refactoring, and documentation in editors.
- It is useful in browsers, Node.js, Deno, Bun, serverless functions, desktop apps, and any JS-based runtime.

## How TypeScript works

- TypeScript code is written in `.ts` or `.tsx` files.
- The TypeScript compiler (`tsc`) checks types and transpiles code to plain JavaScript.
- The runtime environment still executes JavaScript; TypeScript is only needed at build time.
- Most projects use a bundler or build tool to compile TS into JS before deployment.

## How to start using TypeScript

1. Install TypeScript:
   - `npm install --save-dev typescript`
2. Initialize configuration:
   - `npx tsc --init`
3. Write code in `.ts` files.
4. Compile to JavaScript:
   - `npx tsc`
5. Use existing JS gradually:
   - `allowJs` and `checkJs` in `tsconfig.json` let you mix JS and TS.

## How it fits into build tools

- TypeScript integrates with bundlers like Webpack, Rollup, Vite, esbuild, and Parcel.
- The bundler takes the compiled JavaScript and packages it for the browser or server.
- TypeScript itself does not run in the browser; it only generates JavaScript that does.

## When TypeScript is especially useful

- Larger codebases or team projects.
- APIs and libraries where type contracts reduce misuse.
- Refactoring existing code safely.
- Code that interacts with external data or complex objects.

## Recommended resources

- TypeScript Tutorial For Beginner: https://www.youtube.com/watch?v=d56mG7DezGs
- TypeScript Play Ground: https://codington.io/typescript
- Understanding How JS Bundler working: https://www.youtube.com/watch?v=5IG4UmULyoA

> Note: The bundler video is great for understanding how TypeScript output is packaged and delivered, but TypeScript itself is a compile-time layer over JavaScript.
