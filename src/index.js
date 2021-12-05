import React from 'react';
import ReactDom from 'react-dom';
import './index.css';

function BookList(){
  return (
    <section className="bookList">
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    <Book />
    </section>
  );
};

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
    
  );
};

const Image = () => 
  <img 
  src="https://m.media-amazon.com/images/I/71rkaxiZ4mS._AC_UL320_.jpg" alt="bookimage" 
  />
;

const Title = () => <h1>
  The Second Mrs. Astor: A Heartbreaking Historical Novel of the Titanic
  </h1>;

  const Author = () => (
    <h4>Shana Abe</h4>
  )

ReactDom.render(<BookList/>, document.getElementById('root'));