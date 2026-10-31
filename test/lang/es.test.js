import { test } from "node:test";
import assert from "node:assert/strict";
import { greet } from "../../src/lang/es.js";

test("greets the world in Spanish", () => {
  assert.equal(greet(), "¡Hola, mundo!");
});

test("greets by name in Spanish", () => {
  assert.equal(greet("Ada"), "¡Hola, Ada!");
});
