// Regression tests for the self-contained Three Lenses interface.
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import vm from "node:vm";

const source = readFileSync(new URL("../quartz/static/interactive/truth-classification-practice.js", import.meta.url), "utf8");

function setup() {
  const handlers = {};
  const el = {
    dataset: {}, innerHTML: "", focused: "",
    addEventListener(type, fn) { handlers[type] = fn; },
    contains() { return true; },
    querySelector(selector) { return { focus() { el.focused = selector; } }; }
  };
  const document = {
    readyState: "complete",
    querySelector(selector) { return selector === "[data-truth-practice]" ? el : null; },
    addEventListener() {}
  };
  vm.runInNewContext(source, { window: {}, document }, { filename: "truth-classification-practice.js" });
  function click(data) {
    handlers.click({ target: { closest() {
      return { getAttribute(key) { return data[key] ?? null; } };
    } } });
  }
  function action(name) { click({ "data-action": name }); }
  function choose(axis, value) { click({ "data-axis": String(axis), "data-value": value }); }
  function change(field, value) {
    handlers.change({ target: {
      value, matches(selector) { return selector === "select[data-" + field + "]"; }
    } });
  }
  return { el, action, choose, change };
}

const { el, action, choose, change } = setup();
assert.ok(el.innerHTML.includes("1 / 50"));
change("category", "foundations");
assert.ok(el.innerHTML.includes("1 / 14"));
assert.equal(el.focused, "select[data-category]");
change("mode", "classify");
assert.equal(el.focused, "select[data-mode]");

choose(0, "Contingent");
assert.equal(el.focused, 'button[data-axis="0"][data-value="Contingent"]');
choose(1, "Analytic");
choose(2, "A priori");
action("check");
assert.ok(el.innerHTML.includes("First pass: 2 / 3"));
assert.equal(el.focused, ".truth-practice__insight");
assert.ok(!el.innerHTML.includes('data-action="review"'));
action("next");
assert.equal(el.focused, ".truth-practice__claim, .truth-practice__done");

for (let n = 1; n < 14; n++) action("skip");
assert.ok(el.innerHTML.includes("13 skipped on the first pass."));
assert.ok(el.innerHTML.includes("14 examples still need review."));
action("review");
assert.ok(el.innerHTML.includes("Your first-pass score stays unchanged."));
choose(0, "Necessary");
choose(1, "Analytic");
choose(2, "A priori");
action("check");
assert.ok(el.innerHTML.includes("First pass: 2 / 3"));
action("next");
for (let n = 1; n < 14; n++) action("skip");
assert.ok(el.innerHTML.includes("Review complete."));
assert.ok(el.innerHTML.includes("First pass: 2 correct decisions out of 3"));
action("reset");
assert.ok(el.innerHTML.includes("1 / 50"));
assert.ok(el.innerHTML.includes("First pass: 0 / 0"));
console.log("Truth practice regressions passed.");
