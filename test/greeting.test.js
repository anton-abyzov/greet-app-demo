import { test } from "node:test";
import assert from "node:assert/strict";
import { greet } from "../src/greeting.js";

test("greets the world", () => {
  assert.equal(greet(), "Hello there, world!");
});

test("greets by name", () => {
  assert.equal(greet("Ada"), "Hello, Ada!");
});

test("greets a team of two", () => {
  assert.equal(greet(["Ada", "Lin"]), "Hello, Ada and Lin!");
});

test("greets larger teams with commas and a final and", () => {
  assert.equal(greet(["Ada", "Lin", "Grace"]), "Hello, Ada, Lin and Grace!");
  assert.equal(greet(["Ada", "Lin", "Grace", "Alan"]), "Hello, Ada, Lin, Grace and Alan!");
});

test("greets a team of one by name", () => {
  assert.equal(greet(["Ada"]), "Hello, Ada!");
});

test("greets the world for an empty team", () => {
  assert.equal(greet([]), "Hello there, world!");
});
