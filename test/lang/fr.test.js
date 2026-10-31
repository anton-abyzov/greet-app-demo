import { test } from "node:test";
import assert from "node:assert/strict";
import { greet } from "../../src/lang/fr.js";

test("greets the world in French", () => {
  assert.equal(greet(), "Bonjour, le monde !");
});

test("greets by name in French", () => {
  assert.equal(greet("Ada"), "Bonjour, Ada !");
});
