// Timecode : 2:27:20
import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';

const firstBook = {
    author: 'Kristin Hannah',
    title: 'The Women : A Novel',
    img: 'https://m.media-amazon.com/images/I/913C+MR3S5L._SL1500_.jpg'
};

const secondBook = {
    author: 'Lauren Roberts',
    title: 'Reckless (The Powerless Trilogy)',
    img: 'https://m.media-amazon.com/images/I/81q6ecxcZUL._SL1500_.jpg'
};

const BookList = () => {
    return <section className='booklist'>
        <Book author={firstBook.author} title={firstBook.title} img={firstBook.img}/>
        <Book author={secondBook.author} title={secondBook.title} img={secondBook.img}/>
    </section>
}

const Book= ({img, title, author}) => {
    return ( 
    <article className='book'>
        <img src={img} alt={title}/>
        <h2>{title}</h2>
        <h2>{author}</h2>
    </article>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<BookList/>);
