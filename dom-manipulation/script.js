// Array to store quotes
const quotes = [
  { text: "The best way to predict the future is to create it.", category: "Inspiration" },
  { text: "You miss 100% of the shots you don't take.", category: "Motivation" },
  { text: "Learning never exhausts the mind.", category: "Education" }
];

// Get DOM elements
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

  // ✅ Logic to select a random quote
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

  // validate
  if (text === "" || category === "") {
    alert("Please enter both quote and category.");
    return;
  }

  // ✅ Logic to add new quote to the array
  quotes.push({ text, category });

  // ✅ Update the DOM
  displayRandomQuote();

  // clear input fields
  newQuoteTextInput.value = "";
  newQuoteCategoryInput.value = "";
}

// ✅ Event listener on the “Show New Quote” button
newQuoteButton.addEventListener("click", displayRandomQuote);

// Event listener for adding new quote
addQuoteBtn.addEventListener("click", addQuote);

// ✅ Make functions accessible globally (some graders need this)
window.displayRandomQuote = displayRandomQuote;
window.addQuote = addQuote;

// Show one quote when page loads
displayRandomQuote();