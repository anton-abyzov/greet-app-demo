# Greeting ideas for `greet()`

Ideas for `greet()` in `src/greeting.js`:

1. Time-of-day greeting: accept an optional hour and return "Good morning, Ana!" before noon, "Good afternoon" until 6 pm, "Good evening" after.
2. Locale option: accept `{ locale: "es" }` and return "Hola, Ana!" or "Bonjour, Ana!", falling back to "Hi" for unknown locales.
3. Trim and skip blanks: trim names and drop empty strings from team arrays, so `greet(["Ana", " ", "Ben"])` returns "Hi, Ana and Ben!".
