import { bookList } from "./books.js";

const bookTableBody = document.getElementById("myTableBody");
const selectedBookTitle = document.getElementById("selectedBookTitle");

const drawBooks = (books) => {
  bookTableBody.replaceChildren();

  for (const book of books) {
    const tr = document.createElement("tr");
    const titleTd = document.createElement("td");
    const authorTd = document.createElement("td");
    const summaryTd = document.createElement("td");

    titleTd.textContent = book.title;
    authorTd.textContent = book.author;
    summaryTd.textContent = book.summary;

    tr.addEventListener("click", () => {
      selectedBookTitle.textContent = book.title;
    });

    tr.appendChild(titleTd);
    tr.appendChild(authorTd);
    tr.appendChild(summaryTd);
    bookTableBody.appendChild(tr);
  }
};

drawBooks(bookList);

const filterInput = document.getElementById("filterInput");
filterInput.addEventListener("input", () => {
  const term = filterInput.value.trim().toLowerCase();
  const filteredBooks = bookList.filter(
    (book) =>
      book.title.toLowerCase().includes(term) ||
      book.author.toLowerCase().includes(term) ||
      book.summary.toLowerCase().includes(term)
  );
  drawBooks(filteredBooks);
});
