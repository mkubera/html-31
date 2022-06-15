// Model-View-Update

// Helper functions
const qs = (s) => document.querySelector(s);

// DOM
const countDOM = qs("#count");
const incrementDOM = qs("#increment");
const decrementDOM = qs("#decrement");
const resetDOM = qs("#reset");

// Model
const INITIAL_COUNT = 15;
let count = INITIAL_COUNT;

// Update
const increment = (n) => n + 1;
const decrement = (n) => n - 1;
const reset = () => INITIAL_COUNT;

// View
const renderCount = () => {
  countDOM.textContent = count;
};

// Events
incrementDOM.addEventListener("click", (event) => {
  count = increment(count);
  renderCount();
});
decrementDOM.addEventListener("click", (event) => {
  count = decrement(count);
  renderCount();
});
resetDOM.addEventListener("click", (event) => {
  count = reset();
  renderCount();
});

// App start
renderCount();

// =================================================

// Model-View-Update

// DOM
const kangaroosDOM = qs(".kangaroos");
const deleteFirstKangarooDOM = qs("#deleteFirstKangaroo");

// Model
let kangaroos = [
  { id: 1, name: "Kangaroo 1" },
  { id: 2, name: "Kangaroo 2" },
  { id: 3, name: "Kangaroo 3" },
  { id: 4, name: "Kangaroo 4" },
];

// Update
const deleteFirstKangaroo = () => {
  kangaroos = kangaroos.filter((kangaroo, idx) => idx !== 0);
  renderApp();
};

// View
const renderApp = () => {
  kangaroosDOM.innerHTML = kangaroos
    .map(({ name }) => `<li>${name}</li>`)
    .join("");
};

// Events
deleteFirstKangarooDOM.addEventListener("click", (e) => {
  deleteFirstKangaroo();
});

// App start
renderApp();

// =================================================

// Helper functions
// const qsa = (s) => document.querySelectorAll(s);

// Model
// const kangaroosDOM = qsa(".kangaroo");

// console.log(kangaroosDOM);

// =================================================
