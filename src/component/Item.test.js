import Item from "./Item";
import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";

test("props", () => {
  const test = <Item name="item1" price={10} />;
  expect(test.props.name).toBe("item1");
  expect(test.props.price).toBe(10);
});

test("button", async () => {
  const user = userEvent.setup();
  render(<Item name="item1" price={10} />);

  const plusButt = screen.getByRole("button", { name: "+" });
  const minusButt = screen.getByRole("button", { name: "-" });

  const text = screen.getByRole("spinbutton");
  expect(+text.value).toBe(0);

  await user.click(plusButt);
  expect(+text.value).toBe(1);
  await user.click(minusButt);
  expect(+text.value).toBe(0);
  await user.click(minusButt);
  expect(+text.value).toBe(0);
});

test("text", async () => {
  const user = userEvent.setup();
  render(<Item name="item1" price={10} />);

  const text = screen.getByRole("spinbutton");
  await user.type(text, "10");
  expect(+text.value).toBe(10);
  await user.type(text, "-");
  expect(+text.value).toBe(0);
});
