import { test } from "node:test";
import assert from "node:assert/strict";
import { greet } from "../src/greeting.js";

test("greets the world", () => {
  assert.equal(greet(), "Hi, world!");
});

test("greets by name", () => {
  assert.equal(greet("Ada"), "Hi, Ada!");
});
