# Greet in three languages

## Problem

greet() only speaks English ("Hi, Ada!"). Spanish, French and German readers get no greeting in their own language.

## Scope

In: one module per language under src/lang/ (es.js, fr.js, de.js), each exporting greet(name) with a localized default, plus one test file per language. Out: team (array) greetings in other languages, a language picker or locale lookup, changes to src/greeting.js.

## Acceptance Criteria

- [ ] AC-01: src/lang/es.js exports greet: greet() returns "¡Hola, mundo!" and greet("Ada") returns "¡Hola, Ada!"
- [ ] AC-02: src/lang/fr.js exports greet: greet() returns "Bonjour, le monde !" and greet("Ada") returns "Bonjour, Ada !"
- [ ] AC-03: src/lang/de.js exports greet: greet() returns "Hallo, Welt!" and greet("Ada") returns "Hallo, Ada!"

## Approach

Each language is a standalone ES module mirroring src/greeting.js: `export function greet(name = "<world>") { return \`...\`; }`. Tests live in test/lang/<code>.test.js and follow test/greeting.test.js: `node:test`, `node:assert/strict`, import from `../../src/lang/<code>.js`. `npm test` (`node --test`) discovers test/lang/*.test.js without config changes.

No shared index or helper file: three workers implement the tasks in parallel on different machines (T-01 this Mac, T-02 Ministorm, T-03 M1), so every task owns exactly two files and none overlap. Rejected: a src/lang/index.js locale map, since it would be a file all three tasks touch.

## Decisions

### Asked
- D-01 Layout → one file per language under src/lang/ with its own test, three parallel tasks (user)
### Defaulted (change any before sw-do)
- D-02 Wording → "¡Hola, …!", "Bonjour, … !" (French space before "!"), "Hallo, …!"; defaults "mundo", "le monde", "Welt" (reversible)
- D-03 Arrays → not supported in language modules this increment (reversible)
### Open
- none

## Tasks

### T-01 Spanish greeting
- AC: AC-01 | Files: src/lang/es.js, test/lang/es.test.js | Test: npm test

### T-02 French greeting
- AC: AC-02 | Files: src/lang/fr.js, test/lang/fr.test.js | Test: npm test

### T-03 German greeting
- AC: AC-03 | Files: src/lang/de.js, test/lang/de.test.js | Test: npm test
