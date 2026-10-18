export function greet(name) {
  if (Array.isArray(name)) {
    name = name.length === 0
      ? undefined
      : name.length === 1
        ? name[0]
        : `${name.slice(0, -1).join(", ")} and ${name.at(-1)}`;
  }
  return name === undefined ? "Hello there, world!" : `Hello, ${name}!`;
}
