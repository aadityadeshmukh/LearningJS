const getTheTitles = function(listBooks) {
  listTitles = listBooks.map(book => book.title);
  console.log({ listTitles });
  return listTitles;
};

module.exports = getTheTitles;
