export function greet(name = "world") {
  if (Array.isArray(name)) {
    name = name.length === 0
      ? "world"
      : name.length === 1
        ? name[0]
        : `${name.slice(0, -1).join(", ")} and ${name.at(-1)}`;
  }
  return `Hi, ${name}!`;
}
