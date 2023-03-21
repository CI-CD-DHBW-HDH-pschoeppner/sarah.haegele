import {
  TodoItem,
  generateID,
  validateTodo,
  formatTodo,
  generateColor,
} from "./todo";

describe("generateID", () => {
  it("should return a unique ID", () => {
    const id1 = generateID();
    const id2 = generateID();
    expect(id1).not.toBe(id2);
  });
});

describe("validateTodo", () => {
  it("should return false if the value is longer than 255 characters", () => {
    const todo = {
      id: "1",
      value: "a".repeat(256),
      done: false,
    };
    const todos: TodoItem[] = [];
    expect(validateTodo(todo, todos)).toBe(false);
  });
  it("should return false if the value is empty", () => {
    const todo = {
      id: "1",
      value: "",
      done: false,
    };
    const todos: TodoItem[] = [];
    expect(validateTodo(todo, todos)).toBe(false);
  });
  it("should return false if the todo is contained in the todos array (case insensitive)", () => {
    const todo = {
      id: "1",
      value: "todo",
      done: false,
    };
    const todos = [
      {
        id: "2",
        value: "Todo",
        done: false,
      },
    ];
    expect(validateTodo(todo, todos)).toBe(false);
  });
  it("should return true if the todo is valid", () => {
    const todo = {
      id: "1",
      value: "todo",
      done: false,
    };
    const todos: TodoItem[] = [];
    expect(validateTodo(todo, todos)).toBe(true);
  });
});

describe("formatTodo", () => {
  it("should capitalize the first letter of the todo", () => {
    const todo = {
      id: "1",
      value: "todo",
      done: false,
    };
    expect(formatTodo(todo)).toEqual({
      id: "1",
      value: "Todo",
      done: false,
    });
  });
});

describe("generateColor", () => {
  it("should return a random rgb color with values between 50 and 150", () => {
    const color = generateColor();
    expect(color).toMatch(/rgb\(\s*(?:(?:[5-9]\d|1[0-4]\d|150)\s*,?){3}\)$/);
  });
});
