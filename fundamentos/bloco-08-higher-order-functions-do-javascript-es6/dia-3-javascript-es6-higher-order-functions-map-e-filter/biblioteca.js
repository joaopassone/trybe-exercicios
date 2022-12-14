const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:

function formatedBookNames() {
  // escreva seu código aqui
  return books.map((book) => `${book.name} - ${book.genre} - ${book.author.name}`);
}

function nameAndAge() {
  // escreva seu código aqui
  const authorInfo =  books.map((book) => {
    return {
      age: book.releaseYear - book.author.birthYear,
      author: book.author.name,
    }
  });
  return authorInfo.sort((a, b) => a.age - b.age);
}

function fantasyOrScienceFiction() {
  // escreva seu código aqui
  return books.filter((book) => book.genre === 'Ficção Científica' || book.genre === 'Fantasia');
}

function oldBooksOrdered() {
  // escreva seu código aqui
  const oldBooks = books.filter((book) => 2022 - book.releaseYear > 60);
  return oldBooks.sort((a, b) => a.releaseYear - b.releaseYear);
}

function fantasyOrScienceFictionAuthors() {
  // escreva seu código aqui
  return fantasyOrScienceFiction().map((book) => book.author.name);
}

function oldBooks() {
  // escreva seu código aqui
  return oldBooksOrdered().map((book) => book.name);
}

function authorWith3DotsOnName() {
  // escreva seu código aqui
  return books.filter((book) => book.author.name.match(/^\D\.\s\D\.\s\D\.\s/)).map((book) => book.name);
}
