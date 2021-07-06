console.log('book store');
console.log('bookstore');
function bookProfile(title, author, numPages, status) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  if (status === false) this.status = 'Not read yet.';
  else this.status = 'Done reading.';
  this.info = function() {
    return title + ', ' + author + ', ' + numPages + ', ' + this.status;
  };
}

book = new bookProfile('Blue', 'Blah', '10000', false);
console.log(book.info());
