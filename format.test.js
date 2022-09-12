const format = require('./index');


test("it should be equal to daniel", () => {
  expect(format("{a}", "daniel")).toBe("daniel");
})

test("it should be equal to daniel codex", () => {
  expect(format("{a} {b}", "daniel", "codex")).toBe("daniel codex");
})
