import { test } from "node:test";
import assert from "node:assert/strict";
import { greet } from "../../src/lang/de.js";

test("greets the world in German", () => {
  assert.equal(greet(), "Hallo, Welt!");
});

test("greets by name in German", () => {
  assert.equal(greet("Ada"), "Hallo, Ada!");
});
