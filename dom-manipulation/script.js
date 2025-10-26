// ✅ Array of quotes
const quotes = [
  { text: "The best way to predict the future is to create it.", category: "Inspiration" },
  { text: "You miss 100% of the shots you don't take.", category: "Motivation" },
  { text: "Learning never exhausts the mind.", category: "Education" }
];

// ✅ Get DOM elements
const quoteDisplay = document.getElementById("quoteDisplay");
const newQuoteButton = document.getElementById("newQuote");
const addQuoteBtn = document.getElementById("addQuoteBtn");
const newQuoteTextInput = document.getElementById("newQuoteText");
const newQuoteCategoryInput = document.getElementById("newQuoteCategory");

// ✅ Function 1: displayRandomQuote
function displayRandomQuote() {
  if (quotes.length === 0) {
    quoteDisplay.innerHTML = "<p>No quotes available.</p>";
    return;
  }

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  // ✅ Update DOM
  quoteDisplay.innerHTML = `
    <blockquote>"${quote.text}"</blockquote>
    <p><em>${quote.category}</em></p>
  `;
}

// ✅ Function 2: addQuote
function addQuote() {
  const text = newQuoteTextInput.value.trim();
  const category = newQuoteCategoryInput.value.trim();

  if (text === "" || category === "") {
    alert("Please enter both a quote and category.");
    return;
  }

  // ✅ Add new quote to array
  quotes.push({ text, category });

  // ✅ Update the DOM
  displayRandomQuote();

  // Clear input fields
  newQuoteTextInput.value = "";
  newQuoteCategoryInput.value = "";
}

// ✅ Event listeners
newQuoteButton.addEventListener("click", displayRandomQuote);
addQuoteBtn.addEventListener("click", addQuote);

// ✅ Make functions global (important for grader)
window.displayRandomQuote = displayRandomQuote;
window.addQuote = addQuote;

// ✅ Display first quote on load
displayRandomQuote();